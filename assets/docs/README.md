# Zatrudnienie w Polsce 2025 - Zaawansowany Kalkulator

![Tests](https://img.shields.io/badge/tests-5%20passing-success)
![Coverage](https://img.shields.io/badge/coverage-E2E-blue)

Kompleksowy kalkulator porównujący formy zatrudnienia w Polsce z uwzględnieniem aktualnych przepisów na 2025 rok.

## 🚀 Funkcje

- **4 Formy Zatrudnienia**: Umowa o pracę, Umowa zlecenie, Umowa o dzieło, B2B
- **Interaktywny Kalkulator**: Natychmiastowe przeliczanie w czasie rzeczywistym
- **Ulgi Podatkowe**: Kwota wolna od podatku, ulga dla młodych (poniżej 26 roku życia)
- **Podsumowanie**: Automatyczne wskazanie najlepszej opcji pod kątem netto, kosztów pracodawcy i benefitów
- **Premium Design**: Nowoczesny interfejs z glassmorphism i smooth animations

## 🛠️ Technologie

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Fonts**: Inter, Outfit (Google Fonts)
- **Icons**: Lucide Icons
- **Testing**: Playwright E2E
- **CI/CD**: GitHub Actions

## 📦 Instalacja

```bash
# Sklonuj repozytorium
git clone <repository-url>
cd zatrudnienie-dotacje-pl

# Zainstaluj zależności
npm install

# Uruchom lokalnie
npm start
# Otwórz http://localhost:3000
```

## 🌐 Deployment do GitHub Pages

### Automatyczne Wdrożenie

Projekt jest automatycznie wdrażany na GitHub Pages przy każdym push do brancha `main`/`master`.

#### Pierwsza Konfiguracja:

1. **Włącz GitHub Pages w repozytorium:**
   - Przejdź do Settings → Pages
   - W "Source" wybierz **GitHub Actions**

2. **Push do repozytorium:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Strona będzie dostępna pod:**
   ```
   https://<username>.github.io/<repository-name>/
   ```

### Manualne Wdrożenie

```bash
# Build nie jest wymagany (statyczne HTML)
git commit -am "Update content"
git push origin main
# Workflow automatycznie uruchomi deployment
```

### Architektura Wdrożenia

- ✅ **Statyczny HTML/CSS/JS** - bez build process
- ✅ **Automatic deployment** - GitHub Actions workflow
- ✅ **Custom domain** - możliwość konfiguracji
- ✅ **HTTPS** - automatyczne certyfikaty SSL


## 🧪 Testowanie

```bash
# Uruchom wszystkie testy
npm test

# Testy z widoczną przeglądarką
npm test -- --headed

# Interaktywny UI mode
npm test -- --ui

# Zobacz ostatni raport
npx playwright show-report
```

### Pokrycie Testów

✅ Wyświetlanie 4 form zatrudnienia  
✅ Inicjalne obliczenia  
✅ Aktualizacja przy zmianie wynagrodzenia  
✅ Ulga dla młodych (poniżej 26 lat)  
✅ Funkcja resetowania

## 🏗️ Struktura Projektu

```
zatrudnienie-dotacje-pl/
├── index.html              # Główny plik aplikacji
├── index.css               # Style i design system
├── master.html             # Backup/source version
├── tests/
│   └── calculator.spec.ts  # Testy E2E
├── playwright.config.ts     # Konfiguracja Playwright
├── .github/
│   └── workflows/
│       └── test.yml        # CI/CD pipeline
└── package.json
```

## 💡 Przykłady Użycia

### Podstawowe Obliczenie
1. Wprowadź wynagrodzenie brutto (np. 5000 PLN)
2. Wybierz wymiar godzin (domyślnie: 168h/mc)
3. Zobacz porównanie wszystkich form zatrudnienia

### Ulga dla Młodych
1. Zaznacz opcję "Osoba poniżej 26 roku życia"
2. Obserwuj wzrost wynagrodzenia netto (brak podatku dochodowego)

### Szybki Wybór Wynagrodzeń
Użyj przycisków preset:
- 3 000 zł
- 5 000 zł (domyślne)
- 8 000 zł
- 12 000 zł
- 15 000 zł
- 20 000 zł

## 📊 Logika Kalkulacji

### Umowa o Pracę (UoP)
- **ZUS**: 13.71% (emerytalna, rentowa, chorobowa)
- **NFZ**: 9% od podstawy (brutto - ZUS)
- **Podatek**: 12% (z kwotą wolną 30 000 zł/rok)
- **Koszt pracodawcy**: +20.48% (składki od pracodawcy)
- **Benefity**: Urlop, Chorobowe, Staż pracy

### Umowa Zlecenie (UZ)
- **ZUS**: 11.26% (emerytalna, rentowa)
- **NFZ**: 9%
- **Podatek**: 12%
- **Benefity**: ZUS emeryt/rentowy, NFZ

### Umowa o Dzieło (UOD)
- **Koszty uzyskania przychodu**: 20%
- **Podatek**: 12% od podstawy
- **Brak**: ZUS, NFZ
- **Benefity**: Brak

### B2B (Działalność Gospodarcza)
- **ZUS**: ~1600 zł (stałe, ryczałt)
- **NFZ**: ~400 zł
- **Podatek**: 12% (ryczałt)
- **Benefity**: Faktura VAT, Koszty uzyskania

## 🤝 Wkład w Projekt

Contributions are welcome! Please:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Wszystkie Pull Requests będą automatycznie przetestowane przez CI.

## 📝 Licencja

© 2025 Zatrudnienie Polska. Wszelkie prawa zastrzeżone.

## 🔗 Linki

- [Live Demo](https://traezatrudnienie-polskafb1r.vercel.app/)
- [GitHub Issues](./issues)
- [Dokumentacja API](#)

---

**Uwaga**: Wszystkie obliczenia są szacunkowe i oparte na przepisach z 2025 roku. Dla dokładnych wyliczeń skonsultuj się z doradcą podatkowym lub księgowym.
