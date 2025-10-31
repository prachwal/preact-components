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
- **ThemeProvider**: Provider dla ręcznego przełączania motywów (light/dark/system).
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
- **Theme Support**: Zaimplementowano system motywów jasny/ciemny/system z dwoma paletami kolorów, używając CSS custom properties i @media (prefers-color-scheme). Bez duplikacji definicji palet.

## Konfiguracja Motywów

System motywów obsługuje **4 warianty kolorystyczne** (base, sepia, forest, ocean) z trybami jasnym i ciemnym dla każdego. Wszystkie kolory spełniają wymagania **WCAG AA** dla dostępności.

### Warianty Kolorystyczne

#### Base (Okha) - Ciepłe tony ochry/terracotta

Paleta bazowa **Okha** (назва від російського слова "охра" - ochra), oferująca ciepłe, ziemiste tony inspirowane naturalnym pigmentem ochry.

##### Primary - Ochre (Ochra/Bursztyn)

- **Ochre 50-900**: Od najjaśniejszego (#FFF8E1) do najciemniejszego (#FF6F00)
- **Główny kolor**: Ochre 600 (#FFB300) - jasny motyw
- **Główny kolor**: Ochre 400 (#FFCA28) - ciemny motyw

##### Secondary - Terracotta (Wypalona Siena)

- **Terracotta 50-900**: Od kremowego (#FBE9E7) do głębokiego brązu (#BF360C)
- **Kolor dodatkowy**: Terracotta 500 (#FF5722) - jasny motyw
- **Kolor dodatkowy**: Terracotta 400 (#FF7043) - ciemny motyw

##### Neutralne - Ciepłe szarości

- **Neutral 50-900**: Od prawie białego (#FAFAFA) do prawie czarnego (#212121)

#### Sepia - Vintage brązy i kremy

Paleta inspirowana starymi fotografiami sepiowymi, oferująca nostalgiczny, ciepły wygląd.

##### Primary - Sepia Brown

- **Sepia 50**: #FDF6E3 (Kremowy)
- **Sepia 600**: #8B6F47 (Brązowy średni) - jasny motyw
- **Sepia 400**: #A0826D (Brązowy jasny) - ciemny motyw
- **Sepia 900**: #3E2723 (Brązowy głęboki)

##### Secondary - Burnt Umber

- **Umber 50**: #EFEBE9
- **Umber 500**: #6D4C41 - jasny motyw
- **Umber 400**: #8D6E63 - ciemny motyw
- **Umber 900**: #3E2723

#### Forest - Naturalne zielenie i brązy

Paleta inspirowana lasem, oferująca spokojne, naturalne kolory.

##### Primary - Forest Green

- **Forest 50**: #E8F5E9 (Jasnozielony)
- **Forest 600**: #43A047 (Zielony średni) - jasny motyw
- **Forest 400**: #66BB6A (Zielony jasny) - ciemny motyw
- **Forest 900**: #1B5E20 (Zielony głęboki)

##### Secondary - Bark Brown

- **Bark 50**: #EFEBE9
- **Bark 500**: #795548 - jasny motyw
- **Bark 400**: #A1887F - ciemny motyw
- **Bark 900**: #3E2723

#### Ocean - Chłodne błękity i akwamaryny

Paleta inspirowana oceanem, oferująca świeże, nowoczesne kolory.

##### Primary - Ocean Blue

- **Ocean 50**: #E1F5FE (Jasnoniebieski)
- **Ocean 600**: #039BE5 (Niebieski średni) - jasny motyw
- **Ocean 400**: #29B6F6 (Niebieski jasny) - ciemny motyw
- **Ocean 900**: #01579B (Niebieski głęboki)

##### Secondary - Teal

- **Teal 50**: #E0F2F1
- **Teal 500**: #009688 - jasny motyw
- **Teal 400**: #26A69A - ciemny motyw
- **Teal 900**: #004D40

### Kolory Semantyczne (Wspólne dla Wszystkich Wariantów)

- **Success**: Ciemnozielony (#2E7D32) / Jasnozielony (#66BB6A)
- **Warning**: Ciemnopomarańczowy (#F57C00) / Jasnopomarańczowy (#FFA726)
- **Error**: Ciemnoczerwony (#C62828) / Jasnoczerwony (#EF5350)
- **Info**: Ciemnoniebieski (#1565C0) / Jasnoniebieski (#42A5F5)

### Type-Safe Theme System

System motywów wykorzystuje **strict TypeScript typing** aby zapobiec błędom i zapewnić autocomplete dla wszystkich zmiennych CSS.

#### Podstawowe Typy

```typescript
// Tylko te zmienne mogą być nadpisane - brak możliwości pomyłki!
export type ThemeColorVariable =
  | 'primary-color'
  | 'primary-hover'
  | 'primary-active'
  | 'secondary-color'
  | 'secondary-hover'
  | 'secondary-active'
  | 'text-color'
  | 'text-muted'
  | 'text-disabled'
  | 'bg-color'
  | 'bg-secondary'
  | 'bg-tertiary'
  | 'button-bg'
  | 'read-the-docs-color'
  | 'border-color'
  | 'border-hover'
  | 'shadow-color'
  | 'success-color'
  | 'success-bg'
  | 'warning-color'
  | 'warning-bg'
  | 'error-color'
  | 'error-bg'
  | 'info-color'
  | 'info-bg';

export type ThemeVariables = {
  [K in ThemeColorVariable]?: string;
};

export type ThemeVariant = 'base' | 'sepia' | 'forest' | 'ocean';
```

#### Użycie ThemeProvider z Wariantami

```typescript
import { ThemeProvider, BaseColors } from '@/components';

// ✅ Prawidłowe - defaultVariant określa paletę kolorów
<ThemeProvider 
  defaultTheme="system"
  defaultVariant="base"  // lub 'sepia' | 'forest' | 'ocean'
>
  <App />
</ThemeProvider>

// ✅ Programatyczne przełączanie wariantów
function MyComponent() {
  const { variant, setVariant } = useTheme();
  
  return (
    <div>
      <button onClick={() => setVariant('sepia')}>Sepia</button>
      <button onClick={() => setVariant('forest')}>Forest</button>
      <button onClick={() => setVariant('ocean')}>Ocean</button>
    </div>
  );
}

// ✅ Niestandardowe kolory z type-safety
<ThemeProvider 
  defaultVariant="base"
  customVariables={{
    'primary-color': BaseColors.ochre[700],
    'success-color': '#00AA00'
  }}
>
  <App />
</ThemeProvider>

// ❌ Błąd TypeScript - nieistniejąca zmienna
<ThemeProvider 
  customVariables={{
    'wrong-variable': '#FF0000' // Error: Type 'wrong-variable' is not assignable
  }}
>
  <App />
</ThemeProvider>
```

#### Dostęp do Palet Kolorów

```typescript
import { 
  BaseColors,    // Okha palette (ochre/terracotta)
  SepiaColors,   // Sepia palette (vintage browns)
  ForestColors,  // Forest palette (natural greens)
  OceanColors,   // Ocean palette (cool blues)
  getThemeVariables 
} from '@/components/theme/theme-types';

// Programatyczne generowanie motywu
const customTheme = getThemeVariables('dark', 'forest');

// Dostęp do konkretnych kolorów
const primaryColor = ForestColors.forest[600];
const secondaryColor = ForestColors.bark[500];
```

### Funkcje ThemeProvider

- **defaultTheme**: 'light' | 'dark' | 'system' - Wybór domyślnego motywu
- **defaultVariant**: 'base' | 'sepia' | 'forest' | 'ocean' - Wybór domyślnej palety kolorów
- **customVariables**: `Partial<ThemeVariables>` - Nadpisanie dowolnych zmiennych CSS z type-safety
- **setTheme**: Funkcja zmiany motywu (jasny/ciemny/system)
- **setVariant**: Funkcja zmiany wariantu kolorystycznego
- **setCustomVariables**: Dynamiczna zmana zmiennych w runtime
- **actualTheme**: Aktualnie zastosowany motyw (rozwiązany 'system')
- **Data attributes**: `data-theme` i `data-variant` dla CSS hooks

### Persystencja

System automatycznie zapisuje preferencje użytkownika w localStorage:

- `theme-preference`: Zapisany motyw (light/dark/system)
- `theme-variant`: Zapisany wariant kolorystyczny (base/sepia/forest/ocean)

```typescript
// Przykład z persystencją
function App() {
  const { theme, setTheme, variant, setVariant } = useTheme();
  
  // Zmiana jest automatycznie zapisana w localStorage
  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
  };
  
  const handleVariantChange = (newVariant: ThemeVariant) => {
    setVariant(newVariant);
  };
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <p>Current variant: {variant}</p>
    </div>
  );
}
```

### Przykład Użycia w Komponentach

```scss
.my-component {
  color: var(--text-color);
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  
  &:hover {
    border-color: var(--border-hover);
  }
}
```

### WCAG AA Compliance

Wszystkie kombinacje kolorów tekstu i tła spełniają wymogi WCAG AA:

- **Normalny tekst**: Kontrast minimum 4.5:1
- **Duży tekst (18px+)**: Kontrast minimum 3:1
- **Kolory semantyczne**: Zoptymalizowane dla użytkowników z deficytami widzenia kolorów

### Rozszerzenie

ThemeProvider oferuje:

- **defaultTheme**: 'light' | 'dark' | 'system' - wybór domyślnego motywu
- **customVariables**: `Partial<ThemeVariables>` - nadpisanie dowolnych zmiennych CSS z type-safety
- **setCustomVariables**: Dynamiczna zmiana zmiennych w runtime
- **actualTheme**: Aktualnie zastosowany motyw (rozwiązany 'system')
- **OkhaColors**: Pełna paleta kolorów do własnych kompozycji

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
