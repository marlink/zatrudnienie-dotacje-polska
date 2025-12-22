import { test, expect } from '@playwright/test';

test.describe('Zatrudnienie Calculator', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/index.html');
        await page.waitForLoadState('networkidle');
        await page.waitForSelector('.result-row', { timeout: 15000 });
    });

    test('should display 4 employment forms', async ({ page }) => {
        const rows = page.locator('.result-row');
        await expect(rows).toHaveCount(4);
    });

    test('should have calculated net values initially', async ({ page }) => {
        const bestNetValue = page.locator('#bestNetValue');
        await expect(bestNetValue).toBeVisible();
        const text = await bestNetValue.innerText();
        expect(text).not.toBe('0 zł');
    });

    test('should update when changing gross input', async ({ page }) => {
        const grossInput = page.locator('#grossInput');
        const bestNetValue = page.locator('#bestNetValue');

        const initialText = await bestNetValue.innerText();

        await grossInput.fill('10000');
        await page.waitForTimeout(500);

        const updatedText = await bestNetValue.innerText();
        expect(initialText).not.toBe(updatedText);
    });

    test('should apply young person tax relief to UoP calculation', async ({ page }) => {
        // Get the first row (UoP) amount before toggle
        const uopRow = page.locator('.result-row').first();
        const uopAmountBefore = await uopRow.locator('.amount').first().innerText();

        // Use JavaScript to toggle the checkbox and dispatch the change event
        await page.evaluate(() => {
            const checkbox = document.getElementById('youngPersonCheck') as HTMLInputElement;
            checkbox.checked = true;
            checkbox.dispatchEvent(new Event('change', { bubbles: true }));
        });

        await page.waitForTimeout(500);

        // Get the first row (UoP) amount after toggle
        const uopAmountAfter = await uopRow.locator('.amount').first().innerText();

        const valBefore = parseFloat(uopAmountBefore.replace(/[^0-9.]/g, ''));
        const valAfter = parseFloat(uopAmountAfter.replace(/[^0-9.]/g, ''));

        // Young person should have higher net pay (less tax)
        expect(valAfter).toBeGreaterThan(valBefore);
    });

    test('should reset values when clicking reset', async ({ page }) => {
        const grossInput = page.locator('#grossInput');
        const resetBtn = page.locator('#resetBtn');

        await grossInput.fill('15000');
        await page.waitForTimeout(300);
        await resetBtn.click();
        await page.waitForTimeout(300);

        await expect(grossInput).toHaveValue('5000');
    });
});
