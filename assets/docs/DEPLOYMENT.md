# 🚀 GitHub Pages Deployment Guide

## Przygotowanie Projektu

Projekt **zatrudnienie polska 2006** jest przygotowany do automatycznego wdrożenia na GitHub Pages.

## Krok 1: Konfiguracja GitHub Repository

### 1.1 Włącz GitHub Pages

1. Przejdź do swojego repozytorium na GitHub
2. Kliknij **Settings** (Ustawienia)
3. W lewym menu wybierz **Pages**
4. W sekcji **Source** wybierz **GitHub Actions**

![GitHub Pages Settings](https://docs.github.com/assets/cb-47267/images/help/pages/select-github-actions-source.png)

### 1.2 Weryfikacja Plików

Upewnij się, że następujące pliki istnieją w repozytorium:

```
✅ .github/workflows/deploy.yml   # Workflow automatycznego wdrożenia
✅ .nojekyll                       # Wyłącza przetwarzanie Jekyll
✅ index.html                      # Strona główna
✅ index.css                       # Style
```

## Krok 2: Pierwsze Wdrożenie

### 2.1 Commit i Push

```bash
# Dodaj wszystkie pliki
git add .

# Stwórz commit
git commit -m "feat: Prepare for GitHub Pages deployment"

# Wypchnij do GitHub
git push origin main
```

### 2.2 Monitoruj Wdrożenie

1. Przejdź do zakładki **Actions** w repozytorium
2. Zobaczysz workflow "Deploy to GitHub Pages" w trakcie wykonywania
3. Poczekaj aż workflow zakończy się sukcesem (zielona checkmark ✅)

### 2.3 Dostęp do Strony

Po pomyślnym wdrożeniu, Twoja strona będzie dostępna pod adresem:

```
https://<twoja-nazwa-użytkownika>.github.io/<nazwa-repozytorium>/
```

Przykład:
```
https://johndoe.github.io/zatrudnienie-dotacje-pl/
```

## Krok 3: Aktualizacje

Każdy push do brancha `main` lub `master` automatycznie uruchomi nowe wdrożenie:

```bash
# Dokonaj zmian w plikach
nano index.html

# Commit i push
git commit -am "Update calculator"
git push origin main

# Automatyczne wdrożenie rozpocznie się automatycznie!
```

## Krok 4: Custom Domain (Opcjonalnie)

### 4.1 Dodaj Domenę

1. Przejdź do Settings → Pages
2. W sekcji **Custom domain** wpisz swoją domenę (np. `kalkulator.example.com`)
3. Kliknij **Save**

### 4.2 Konfiguracja DNS

W panelu swojego dostawcy domeny, dodaj rekord:

**Dla subdomain (np. kalkulator.example.com):**
```
Type: CNAME
Name: kalkulator
Value: <twoja-nazwa>.github.io
```

**Dla root domain (np. example.com):**
```
Type: A
Name: @
Value: 185.199.108.153
        185.199.109.153
        185.199.110.153
        185.199.111.153
```

### 4.3 Włącz HTTPS

1. Poczekaj kilka minut aż DNS się rozpropaguje
2. W Settings → Pages zaznacz **Enforce HTTPS**

## Rozwiązywanie Problemów

### Strona nie wyświetla się prawidłowo

**Problem:** Zasoby (CSS, JS) nie ładują się
**Rozwiązanie:** Upewnij się, że ścieżki są relatywne:
```html
<!-- Dobrze ✅ -->
<link rel="stylesheet" href="index.css">

<!-- Źle ❌ -->
<link rel="stylesheet" href="/index.css">
```

### Workflow kończy się błędem

**Sprawdź:**
1. Czy plik `.github/workflows/deploy.yml` istnieje
2. Czy GitHub Pages jest włączony w Settings
3. Czy wybrałeś "GitHub Actions" jako źródło

### Strona wyświetla 404

**Sprawdź:**
1. Czy plik `index.html` istnieje w root directory
2. Czy workflow zakończył się sukcesem
3. Czy używasz poprawnego URL

## Monitorowanie

### Sprawdź Status Wdrożenia

1. Zakładka **Actions** - lista wszystkich wdrożeń
2. Zakładka **Environments** - aktywne środowiska (github-pages)
3. Settings → Pages - aktualny URL strony

### Logi Wdrożenia

Kliknij na konkretny workflow w zakładce Actions aby zobaczyć szczegółowe logi.

## Testowanie Przed Wdrożeniem

### Lokalnie

```bash
# Uruchom lokalny serwer
python3 -m http.server 8000
# Lub
npx http-server

# Otwórz w przeglądarce
open http://localhost:8000
```

### Testowanie Visual

```bash
# Uruchom testy Playwright
npm test

# Z wizualizacją
npm test -- --headed
```

## Best Practices

1. **Zawsze testuj lokalnie** przed pushem
2. **Używaj znaczących commit messages**
3. **Monitoruj workflow** po każdym pushu
4. **Backup** - regularnie pobieraj kopię repozytorium
5. **Branch protection** - rozważ ustawienie review przed merge do main

## Koszty

GitHub Pages jest **DARMOWY** dla publicznych repozytoriów z limitami:
- 100 GB bandwidth/miesiąc
- 1 GB storage
- 10 builds/godzinę

Dla większości projektów te limity są więcej niż wystarczające.

---

## Wsparcie

Jeśli masz problemy:
1. Sprawdź [GitHub Pages Documentation](https://docs.github.com/en/pages)
2. Zobacz [GitHub Actions Documentation](https://docs.github.com/en/actions)
3. Stwórz issue w repozytorium projektu

Powodzenia! 🚀
