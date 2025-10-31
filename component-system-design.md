# System Komponentów UI (Podobny do Ant Design / Material-UI)

Na podstawie istniejących komponentów w `src/components` (button, code, footer, header, heading, link, logo, main, paragraph, section) oraz stylów w `src/styles` (base.scss, components.scss, variables.scss), zaprojektowano system komponentów pozwalający na tworzenie treści w sposób podobny do bibliotek takich jak Ant Design czy Material-UI. System opiera się na Preact, TypeScript i SCSS, z naciskiem na modułowość, reużywalność i spójność wizualną.

## Architektura Systemu

- **Komponenty podstawowe**: Rozszerzenie istniejących (Button, Heading, Paragraph, etc.) o dodatkowe warianty i props.
- **Layout**: Komponenty do strukturyzacji treści (Grid, Flex, Space).
- **Formularze**: Komponenty wejściowe i kontrolne.
- **Nawigacja**: Menu, breadcrumbs, paginacja.
- **Wyświetlanie danych**: Tabele, listy, karty.
- **Feedback**: Modalne okna, alerty, tooltips.
- **Zaawansowane**: Komponenty złożone jak date picker, upload.
- **Stylowanie**: Użycie SCSS z zmiennymi, @use zamiast @import, komponenty z props dla stylów.
- **Aliasy TypeScript**: Użycie aliasów ścieżek dla łatwiejszych importów (np. `@/components/Button` zamiast `../../../components/button`).

## Pełna Lista Elementów do Zaimplementowania

Lista uporządkowana od najważniejszych (podstawowe komponenty używane najczęściej) do najmniej istotnych (zaawansowane lub rzadziej używane). Każdy komponent powinien mieć:

- Plik TSX z logiką.
- Plik SCSS z stylami.
- Index.ts dla eksportu.
- Props zgodne z TypeScript, rozszerzające ComponentProps dla kompatybilności.

### 1. Layout i Struktura (Najważniejsze - podstawowa struktura aplikacji)

- **Container**: Główny kontener z maksymalną szerokością i centrowaniem.
- **Row**: Wiersz w systemie grid (elastyczny layout).
- **Col**: Kolumna w systemie grid (z props dla szerokości, offsetu).
- **Flex**: Komponent flexbox z props dla direction, justify, align.
- **Space**: Komponent do dodawania odstępów między elementami (gap, vertical/horizontal).
- **Divider**: Linia separatora z opcjami (vertical, dashed).

### 2. Formularze i Wejścia (Podstawowe interakcje użytkownika)

- **Input**: Pole tekstowe z wariantami (password, search, textarea).
- **Button**: Rozszerzenie istniejącego o warianty (primary, secondary, danger, size: small/medium/large, loading state).
- **Select**: Dropdown z opcjami, wielokrotny wybór.
- **Checkbox**: Checkbox pojedynczy i grupa.
- **Radio**: Radio button pojedynczy i grupa.
- **Switch**: Przełącznik on/off.
- **Form**: Kontener formularza z walidacją (integracja z biblioteką jak yup lub native).
- **InputNumber**: Pole numeryczne ze stepperami.

### 3. Typografia i Treść (Rozszerzenie istniejących)

- **Text**: Ogólny komponent tekstowy z props dla size, weight, color.
- **Title**: Rozszerzenie Heading o poziomy (h1-h6) i dodatkowe props.
- **Paragraph**: Rozszerzenie istniejącego o ellipsis, copyable.
- **Link**: Rozszerzenie istniejącego o warianty (primary, secondary, disabled).
- **Code**: Rozszerzenie istniejącego o syntax highlighting (integracja z Prism.js).

### 4. Nawigacja

- **Menu**: Menu poziome/pionowe z submenu, active state.
- **Breadcrumb**: Ścieżka nawigacyjna.
- **Pagination**: Paginacja z kontrolami (prev/next, page size).
- **Tabs**: Zakładki z zawartością.
- **Dropdown**: Dropdown menu z triggerami (click, hover).

### 5. Wyświetlanie Danych

- **Table**: Tabela z sortowaniem, filtrowaniem, paginacją.
- **List**: Lista elementów z opcjami (bordered, size).
- **Card**: Karta z header, body, actions.
- **Badge**: Odznaka z liczbą lub kropką.
- **Avatar**: Awatar użytkownika (obrazek, inicjały).
- **Tag**: Tag z opcjami (closable, color).
- **Progress**: Pasek postępu (line, circle).
- **Skeleton**: Placeholder ładowania.

### 6. Feedback i Komunikacja

- **Alert**: Alert z typami (success, warning, error, info).
- **Message**: Globalne wiadomości (toast notifications).
- **Notification**: Powiadomienia z przyciskami akcji.
- **Modal**: Modalne okno z confirm dialog.
- **Drawer**: Panel boczny (left/right/top/bottom).
- **Tooltip**: Tooltip z pozycjonowaniem.
- **Popover**: Popover z zawartością.
- **Spin**: Spinner ładowania.
- **Result**: Komponent dla wyników akcji (success, error, 404).

### 7. Zaawansowane Komponenty (Mniej Istotne - Specyficzne Użycia)

- **DatePicker**: Wybór daty z zakresem.
- **TimePicker**: Wybór czasu.
- **Calendar**: Kalendarz miesięczny.
- **Upload**: Upload plików z drag&drop, preview.
- **Transfer**: Transfer między dwoma listami.
- **Tree**: Drzewo hierarchiczne.
- **Cascader**: Kaskadowy wybór.
- **AutoComplete**: Autouzupełnianie.
- **Mentions**: Wzmianki (@user).
- **Rate**: Ocena gwiazdkami.
- **Slider**: Suwak wartości.
- **Steps**: Krokowy proces (wizard).

### 8. Ikony i Multimedia (Uzupełnienie)

- **Icon**: Komponent ikon z biblioteką (np. Lucide React).
- **Image**: Obrazek z lazy loading, preview.
- **Carousel**: Karuzela obrazów.

### 9. Narzędzia Deweloperskie (Najmniej Istotne - Dla Debugowania)

- **ConfigProvider**: Provider dla globalnych ustawień (theme, locale).
- **Affix**: Przyczepiony element (sticky).
- **Anchor**: Spis treści z linkami.
- **BackTop**: Przycisk "do góry".

## Struktura SCSS

Aby zapewnić modułowość i uniknąć problemów z enkapsulacją, użyj następującej struktury dla stylów:

### Pliki Główne w `src/styles/`

- **`variables.scss`**: Zmienne kolorów, rozmiarów, odstępów (już istnieje). Dodaj więcej zmiennych dla komponentów (np. `$border-radius: 4px;`, `$shadow: 0 2px 8px rgba(0,0,0,0.1);`).
- **`mixins.scss`** (nowy plik): Mixiny dla powtarzalnych wzorców.
  - Przykład: `@mixin button-variant($bg, $color, $hover-bg) { background-color: $bg; color: $color; &:hover { background-color: $hover-bg; } }`
  - Inne mixiny: `@mixin flex-center { display: flex; align-items: center; justify-content: center; }`, `@mixin transition($prop: all, $time: 0.3s) { transition: $prop $time ease; }`, `@mixin responsive($breakpoint) { @media (min-width: $breakpoint) { @content; } }`.
- **`utilities.scss`** (nowy plik): Klasy narzędziowe (utility classes) dla szybkiego stylowania.
  - Przykład: `.d-flex { display: flex; }`, `.justify-center { justify-content: center; }`, `.text-center { text-align: center; }`, `.mb-1 { margin-bottom: 0.25rem; }`.
- **`base.scss`**: Globalne style (już istnieje). Rozszerz o reset CSS, jeśli potrzebne.
- **`components.scss`**: Style specyficzne dla komponentów (już istnieje). Tutaj importuj style komponentów używając `@use`.
- **`index.scss`**: Główny plik importów (już istnieje). Dodaj `@use 'mixins'; @use 'utilities';`.

### Pliki dla Komponentów

- Dla każdego komponentu utwórz folder `src/components/{component}/styles/` z plikiem `{component}.scss`.
- W `{component}.scss` użyj `@use` dla importów:
  - `@use '../../../styles/variables' as vars;`
  - `@use '../../../styles/mixins' as mixins;`
- Przykład dla Button:

  ```scss
  @use '../../../styles/variables' as vars;
  @use '../../../styles/mixins' as mixins;

  .button {
    @include mixins.button-variant(vars.$primary-color, white, vars.$primary-hover);
    @include mixins.transition;
  }
  ```

- W `src/styles/components.scss` dodaj `@use '../components/button/styles/button';` dla każdego komponentu.

### Zasady Użycia @use

- Zawsze używaj `@use` zamiast `@import` dla lepszej enkapsulacji i unikania globalnego zasięgu.
- Importuj moduły z aliasami (np. `as vars`) aby uniknąć konfliktów nazw.
- Dla zmiennych i mixinów używaj namespace (np. `vars.$primary-color`).
- Nie importuj wszystkiego globalnie; importuj tylko to, co potrzebne w każdym pliku.

### Elementy Konieczne do Zaimplementowania

- **Mixiny**: Dla wariantów przycisków, formularzy, layoutów, responsywności.
- **Zmienne**: Rozszerz `variables.scss` o nowe (rozmiary, cienie, animacje).
- **Utilities**: Klasy dla flex, spacing, colors, aby przyspieszyć development.
- **Theme Support**: Dodaj zmienne dla ciemnego/jasnego motywu, z możliwością przełączania przez CSS custom properties.

## Aliasy TypeScript

Aby ułatwić importowanie komponentów i innych modułów, zaimplementowano aliasy ścieżek w TypeScript i Vite:

### Konfiguracja

- **`tsconfig.app.json`**: Dodano `baseUrl` i `paths` dla aliasów:
  - `"@/*": ["src/*"]` - główny alias dla `src`
  - `"@/components/*": ["src/components/*"]` - specyficzny dla komponentów
  - `"@/styles/*": ["src/styles/*"]` - dla stylów
  - `"@/assets/*": ["src/assets/*"]` - dla zasobów
- **`vite.config.ts`**: Dodano `resolve.alias` dla bundlera Vite.
- **`tsconfig.node.json`**: Dodano `"types": ["node"]` dla wsparcia Node.js w konfiguracji Vite.

### Użycie

- Import komponentów: `import { Button } from '@/components/button';`
- Import stylów: `import '@/styles/variables.scss';`
- Import zasobów: `import logo from '@/assets/logo.svg';`

To pozwala na krótsze i bardziej czytelne importy, niezależne od struktury katalogów.

## Lista Czynności do Zaimplementowania

Aby w pełni pokryć zapotrzebowanie na komponenty z listy, wykonaj następujące czynności w kolejności (od podstawowych do zaawansowanych). Każda czynność obejmuje implementację komponentu TSX, stylów SCSS, eksportów i testów.

1. **Rozszerz `src/styles/variables.scss`**: Dodaj zmienne dla wszystkich komponentów (rozmiary, cienie, animacje, breakpoints).
2. **Utwórz `src/styles/mixins.scss`**: Zaimplementuj mixiny dla button-variant, flex-center, transition, responsive.
3. **Utwórz `src/styles/utilities.scss`**: Dodaj utility classes dla flex, spacing, text-align, colors.
4. **Zaktualizuj `src/styles/index.scss`**: Dodaj `@use 'mixins'; @use 'utilities';`.
5. **Dla każdego komponentu z sekcji 1-3 (Layout, Formularze, Typografia)**:
   - Utwórz folder `src/components/{component}/`.
   - Zaimplementuj `{component}.tsx` z props rozszerzającymi `ComponentProps`.
   - Utwórz `styles/{component}.scss` z stylami używającymi `@use`.
   - Dodaj `index.ts` z eksportem.
   - Zaktualizuj `src/components/index.ts` o nowy eksport.
   - Dodaj style do `src/styles/components.scss` przez `@use`.
   - Napisz testy jednostkowe (np. w `__tests__/{component}.test.tsx`).
6. **Dla komponentów z sekcji 4-6 (Nawigacja, Wyświetlanie Danych, Feedback)**: Powtórz krok 5.
7. **Dla komponentów z sekcji 7-9 (Zaawansowane, Ikony, Narzędzia)**: Powtórz krok 5, dodając integracje z bibliotekami (np. date picker z react-datepicker, ikony z lucide-react).
8. **Dodaj ConfigProvider**: Utwórz provider dla globalnych ustawień (theme, locale), używając React Context.
9. **Implementuj walidację formularzy**: Dla Form, dodaj integrację z yup lub native validation.
10. **Dodaj animacje i transitions**: Użyj CSS animations dla feedback komponentów (modal, drawer).
11. **Responsywność**: Dla wszystkich komponentów dodaj responsive props i style używając mixin responsive.
12. **Dokumentacja**: Dla każdego komponentu utwórz README.md z przykładami użycia i props.
13. **Build i testy**: Uruchom build Vite, dodaj testy E2E z Playwright lub Cypress.
14. **Optymalizacja**: Dodaj lazy loading dla ciężkich komponentów, tree-shaking dla nieużywanych części.
15. **Theme switching**: Zaimplementuj przełączanie ciemny/jasny motyw przez ConfigProvider.

## Uwagi Implementacyjne

- Wszystkie komponenty powinny używać `ComponentProps` dla rozszerzania props HTML elementów.
- Stylowanie w SCSS z zmiennymi z `variables.scss`, używając `@use`.
- Eksport przez `index.ts` w każdym folderze komponentu.
- Główny eksport w `src/components/index.ts`.
- Testy jednostkowe dla każdego komponentu.
- Dokumentacja w README dla każdego komponentu.

## Kolejność Implementacji

Rozpocząć od Layout i Formularzy, następnie Typografia, Nawigacja, Wyświetlanie Danych, Feedback, a na końcu Zaawansowane i Narzędzia.
