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
- **Responsywność**: Podejście **Mobile First** z breakpointami i elastycznym layoutem.
- **Aliasy TypeScript**: Użycie aliasów ścieżek dla łatwiejszych importów (np. `@/components/Button` zamiast `../../../components/button`).

## Podejście Mobile First - Responsywność

System komponentów stosuje podejście **Mobile First**, co oznacza, że style bazowe są tworzone dla urządzeń mobilnych, a następnie rozszerzane dla większych ekranów za pomocą media queries.

### Breakpointy

Zdefiniowane w `src/styles/variables.scss`:

```scss
$breakpoints: (
  xs: 480px,   // Extra small - małe telefony
  sm: 640px,   // Small - telefony landscape, małe tablety
  md: 768px,   // Medium - tablety portrait
  lg: 1024px,  // Large - tablety landscape, małe laptopy
  xl: 1280px,  // Extra large - laptopy
  2xl: 1536px, // 2X large - duże monitory
);
```

### Responsive Mixiny

W `src/styles/mixins.scss` dostępne są pomocnicze mixiny:

#### @mixin responsive($breakpoint)

Podstawowy mixin dla media queries:

```scss
@include responsive(md) {
  // Style dla ekranów >= 768px
  font-size: 1.5rem;
}
```

#### @mixin responsive-font($mobile, $tablet, $desktop)

Responsywne rozmiary czcionek:

```scss
h1 {
  @include responsive-font(2xl, 3xl, 4xl);
  // Mobile: 1.5rem, Tablet (sm): 1.875rem, Desktop (lg): 2.25rem
}
```

#### @mixin responsive-spacing($property, $mobile, $tablet, $desktop)

Responsywne odstępy:

```scss
.section {
  @include responsive-spacing(padding, 3, 4, 6);
  // Mobile: 24px, Tablet (sm): 32px, Desktop (lg): 48px
}
```

#### @mixin container-padding

Automatyczne responsywne paddingi dla kontenerów:

```scss
.container {
  @include container-padding;
  // Mobile: 16px, Tablet (sm): 24px, Desktop (lg): 32px
}
```

#### @mixin hide-on($breakpoint) i @mixin show-between($min-bp, $max-bp)

Ukrywanie i pokazywanie elementów na określonych breakpointach:

```scss
.mobile-only {
  @include hide-on(md);  // Ukryj na ekranach >= 768px
}

.tablet-only {
  @include show-between(sm, lg);  // Pokaż tylko między 640px a 1024px
}
```

### Responsive Utility Classes

System dostarcza kompletny zestaw utility classes dla responsywności:

#### Display (Mobile First)

```html
<!-- Ukryj na desktop, pokaż na mobile -->
<div class="d-block d-lg-none">Mobile only</div>

<!-- Ukryj na mobile, pokaż na desktop -->
<div class="d-none d-lg-block">Desktop only</div>

<!-- Flex na wszystkich, grid na tablet+ -->
<div class="d-flex d-md-grid">Responsive layout</div>
```

#### Flexbox Direction

```html
<!-- Kolumna na mobile, wiersz na tablet+ -->
<div class="flex-column flex-sm-row">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

#### Alignment i Justification

```html
<!-- Center na mobile, space-between na desktop -->
<div class="d-flex justify-center justify-lg-between">
  <div>Left</div>
  <div>Right</div>
</div>

<!-- Start alignment na mobile, center na tablet+ -->
<div class="d-flex align-start align-md-center">
  <div>Content</div>
</div>
```

#### Text Alignment

```html
<!-- Center na mobile, left na desktop -->
<p class="text-center text-lg-left">Responsive text</p>
```

#### Spacing (Responsive)

```html
<!-- Małe marginesy na mobile, większe na desktop -->
<div class="mb-2 mb-md-4 mb-lg-6">Content</div>

<!-- Responsive padding -->
<div class="py-3 py-md-5 py-lg-8">Section</div>
```

### Grid System - Responsive Columns

Komponent `Col` obsługuje responsywne breakpointy:

```tsx
<Row gutter={16}>
  {/* 24 kolumny (100%) na mobile */}
  {/* 12 kolumn (50%) na small+ */}
  {/* 8 kolumn (33%) na medium+ */}
  <Col xs={24} sm={12} md={8}>
    Content
  </Col>
  <Col xs={24} sm={12} md={8}>
    Content
  </Col>
  <Col xs={24} sm={12} md={8}>
    Content
  </Col>
</Row>
```

Dostępne props dla `Col`:

- `xs` - Extra small (< 480px) - bazowy
- `sm` - Small (>= 640px)
- `md` - Medium (>= 768px)
- `lg` - Large (>= 1024px)
- `xl` - Extra large (>= 1280px)
- `span` - Domyślna szerokość (fallback)

### Responsive Container

Komponent `Container` automatycznie dostosowuje max-width i padding:

```tsx
<Container maxWidth="xl" className="py-4 py-md-6">
  {/* Padding: 32px mobile, 48px desktop */}
  Content
</Container>
```

MaxWidth variants:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px
- `fluid`: 100% width

### Best Practices - Mobile First

1. **Rozpocznij od mobilnego layoutu**:

   ```scss
   .component {
     // Bazowe style dla mobile
     padding: 1rem;
     flex-direction: column;
     
     // Rozszerzenia dla większych ekranów
     @include responsive(md) {
       padding: 2rem;
       flex-direction: row;
     }
   }
   ```

2. **Używaj Grid System z responsive props**:

   ```tsx
   <Row gutter={16}>
     <Col xs={24} md={12} lg={8}>
       {/* Stack na mobile, 2 kolumny na tablet, 3 na desktop */}
     </Col>
   </Row>
   ```

3. **Stosuj responsive utility classes**:

   ```tsx
   <div className="flex-column flex-md-row gap-2 gap-md-4">
     {/* Vertical stack z małym gap na mobile */}
     {/* Horizontal z większym gap na desktop */}
   </div>
   ```

4. **Touch-friendly targets na mobile**:
   - Minimum 44px × 44px dla elementów interaktywnych
   - Większe paddingi dla przycisków i linków
   - Responsive font sizes (większe na desktop)

5. **Optymalizuj performance**:
   - Lazy loading obrazów
   - Code splitting dla dużych komponentów
   - Minimal CSS dla critical path (above the fold)

6. **Testuj na różnych rozdzielczościach**:
   - 320px (iPhone SE)
   - 375px (iPhone X)
   - 768px (iPad portrait)
   - 1024px (iPad landscape)
   - 1920px (Desktop)

### Przykład Responsywnej Aplikacji

```tsx
import { Container, Row, Col, Card, Button, Space } from '@/components';

function App() {
  return (
    <Container maxWidth="xl" className="py-4 py-lg-6">
      {/* Stack cards na mobile, 2 kolumny na tablet, 3 na desktop */}
      <Row gutter={16}>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Card 1" className="mb-3 mb-lg-0">
            Content
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Card 2" className="mb-3 mb-lg-0">
            Content
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Card 3">
            Content
          </Card>
        </Col>
      </Row>
      
      {/* Buttons stack na mobile, horizontal na tablet */}
      <Space size="middle" className="flex-column flex-sm-row mt-4">
        <Button variant="primary">Action 1</Button>
        <Button variant="secondary">Action 2</Button>
        <Button variant="outline">Action 3</Button>
      </Space>
    </Container>
  );
}
```

## Pełna Lista Elementów do Zaimplementowania

Lista uporządkowana od najważniejszych (podstawowe komponenty używane najczęściej) do najmniej istotnych (zaawansowane lub rzadziej używane). Każdy komponent powinien mieć:

- Plik TSX z logiką.
- Plik SCSS z stylami.
- Index.ts dla eksportu.
- Props zgodne z TypeScript, rozszerzające ComponentProps dla kompatybilności.

**Legenda**: ✅ Zaimplementowane | 🚧 W trakcie | ❌ Do zrobienia

### 1. Layout i Struktura (Najważniejsze - podstawowa struktura aplikacji)

- ✅ **Container**: Główny kontener z maksymalną szerokością i centrowaniem (fluid, maxWidth: sm/md/lg/xl/2xl).
- ✅ **Row**: Wiersz w systemie grid z gutter spacing.
- ✅ **Col**: Kolumna w systemie grid z responsive props (xs/sm/md/lg/xl, span, offset).
- ✅ **Flex**: Komponent flexbox z props dla direction, justify, align, gap, wrap.
- ✅ **Space**: Komponent do dodawania odstępów między elementami (size, direction, align, wrap).
- ✅ **Divider**: Linia separatora z opcjami (orientation: horizontal/vertical, dashed, children dla tekstu).
- ✅ **Section**: Semantyczny wrapper dla sekcji strony.
- ✅ **Main**: Semantyczny wrapper dla głównej zawartości.
- ✅ **Header**: Semantyczny wrapper dla nagłówka.
- ✅ **Footer**: Semantyczny wrapper dla stopki.
- ✅ **Div**: Uniwersalny wrapper z podstawowymi props.
- ✅ **Sidebar**: Panel boczny z nawigacją (collapsible, responsive, overlay na mobile).
- ✅ **Navbar**: Pasek nawigacyjny z hamburgerem i menu.

### 2. Formularze i Wejścia (Podstawowe interakcje użytkownika)

- ✅ **Input**: Pole tekstowe z wariantami (type: text/password/email/number, prefix, suffix, error state, sizes).
- ✅ **Button**: Rozszerzenie o warianty (primary/secondary/outline/ghost/link, sizes: sm/md/lg, loading state).
- ✅ **Select**: Dropdown z opcjami (sizes, fullWidth, error state).
- ✅ **Checkbox**: Checkbox pojedynczy z label (disabled, checked, indeterminate).
- ✅ **Radio**: Radio button pojedynczy z label (disabled, checked).
- ✅ **Switch**: Przełącznik on/off (sizes: small/medium, disabled, label).
- ❌ **Form**: Kontener formularza z walidacją (integracja z biblioteką jak yup lub native).
- ❌ **InputNumber**: Pole numeryczne ze stepperami.
- ❌ **Textarea**: Wieloliniowe pole tekstowe z auto-resize.

### 3. Typografia i Treść (Rozszerzenie istniejących)

- ✅ **Heading**: Nagłówki h1-h6 z props dla level.
- ✅ **Paragraph**: Podstawowy komponent tekstowy z wariantami (variant: muted/small).
- ✅ **Link**: Link z podstawowymi stylami.
- ✅ **Code**: Blok kodu z podstawowymi stylami.
- ❌ **Text**: Ogólny komponent tekstowy z props dla size, weight, color, ellipsis, copyable.
- ❌ **Title**: Rozszerzenie Heading o dodatkowe props (ellipsis, underline).

### 4. Nawigacja

- ❌ **Menu**: Menu poziome/pionowe z submenu, active state, icons.
- ❌ **Breadcrumb**: Ścieżka nawigacyjna z separatorami.
- ❌ **Pagination**: Paginacja z kontrolami (prev/next, page size).
- ❌ **Tabs**: Zakładki z zawartością i różnymi pozycjami (top/bottom/left/right).
- ❌ **Dropdown**: Dropdown menu z triggerami (click, hover).

### 5. Wyświetlanie Danych

- ✅ **Card**: Karta z header (title, extra), body, hoverable, bordered, loading state.
- ✅ **Badge**: Odznaka z liczbą (count, max count), kropką (dot), statusem (status: success/error/warning/info).
- ❌ **Table**: Tabela z sortowaniem, filtrowaniem, paginacją.
- ❌ **List**: Lista elementów z opcjami (bordered, size, grid layout).
- ❌ **Avatar**: Awatar użytkownika (obrazek, inicjały, sizes, shapes).
- ❌ **Tag**: Tag z opcjami (closable, color variants).
- ❌ **Progress**: Pasek postępu (line, circle, różne kolory).
- ❌ **Skeleton**: Placeholder ładowania dla różnych typów zawartości.
- ❌ **Descriptions**: Lista opisów key-value dla szczegółów obiektów.

### 6. Feedback i Komunikacja

- ✅ **Alert**: Alert z typami (success/info/warning/error, message, description, closable, showIcon).
- ❌ **Message**: Globalne wiadomości (toast notifications) - wymagane Portal.
- ❌ **Notification**: Powiadomienia z przyciskami akcji - wymagane Portal.
- ❌ **Modal**: Modalne okno z confirm dialog - wymagane Portal.
- ❌ **Drawer**: Panel boczny (left/right/top/bottom) - wymagane Portal.
- ❌ **Tooltip**: Tooltip z pozycjonowaniem - wymagane Portal lub floating-ui.
- ❌ **Popover**: Popover z zawartością - wymagane Portal lub floating-ui.
- ❌ **Spin**: Spinner ładowania (różne rozmiary i kolory).
- ❌ **Result**: Komponent dla wyników akcji (success, error, 404, 403, 500).

### 7. Zaawansowane Komponenty (Mniej Istotne - Specyficzne Użycia)

- ❌ **DatePicker**: Wybór daty z zakresem - wymagana biblioteka zewnętrzna.
- ❌ **TimePicker**: Wybór czasu - wymagana biblioteka zewnętrzna.
- ❌ **Calendar**: Kalendarz miesięczny - wymagana biblioteka zewnętrzna.
- ❌ **Upload**: Upload plików z drag&drop, preview.
- ❌ **Transfer**: Transfer między dwoma listami.
- ❌ **Tree**: Drzewo hierarchiczne.
- ❌ **Cascader**: Kaskadowy wybór.
- ❌ **AutoComplete**: Autouzupełnianie.
- ❌ **Mentions**: Wzmianki (@user).
- ❌ **Rate**: Ocena gwiazdkami.
- ❌ **Slider**: Suwak wartości.
- ❌ **Steps**: Krokowy proces (wizard).

### 8. Ikony i Multimedia (Uzupełnienie)

- ✅ **Logo**: Komponent logo z podstawowymi stylami.
- ❌ **Icon**: Komponent ikon z biblioteką (np. Lucide React).
- ❌ **Image**: Obrazek z lazy loading, preview, placeholder.
- ❌ **Carousel**: Karuzela obrazów z nawigacją.

### 9. Narzędzia Deweloperskie (Najmniej Istotne - Dla Debugowania)

- ✅ **ThemeProvider**: Provider dla ręcznego przełączania motywów (light/dark/system, variants: base/sepia/forest/ocean).
- ❌ **ConfigProvider**: Provider dla globalnych ustawień (theme, locale, componentSize).
- ❌ **Affix**: Przyczepiony element (sticky).
- ❌ **Anchor**: Spis treści z linkami.
- ❌ **BackTop**: Przycisk "do góry".

## Status Implementacji

### Zaimplementowane Komponenty (29)

**Layout (13)**: Container, Row, Col, Flex, Space, Divider, Section, Main, Header, Footer, Div, Sidebar, Navbar  
**Formularze (6)**: Input, Button, Select, Checkbox, Radio, Switch  
**Typografia (4)**: Heading, Paragraph, Link, Code  
**Wyświetlanie (2)**: Card, Badge  
**Feedback (1)**: Alert  
**Multimedia (1)**: Logo  
**Narzędzia (1)**: ThemeProvider

**Build Status**: ✅ **Wszystkie komponenty kompilują się poprawnie!**

### Do Zaimplementowania (Priorytet Wysoki)

**Nawigacja**: Menu, Breadcrumb  
**Feedback**: Modal, Drawer, Tooltip, Spin  
**Formularze**: Form, Textarea, InputNumber  
**Wyświetlanie**: Table, List, Avatar, Tag  

### Do Zaimplementowania (Priorytet Średni)

**Nawigacja**: Pagination, Tabs, Dropdown  
**Wyświetlanie**: Progress, Skeleton, Descriptions  
**Feedback**: Message, Notification, Popover, Result  
**Typografia**: Text (rozszerzony), Title  

### Do Zaimplementowania (Priorytet Niski)

**Zaawansowane**: DatePicker, Upload, Tree, Steps, Rate, Slider, itp.  
**Ikony**: Icon, Image, Carousel  
**Narzędzia**: ConfigProvider, Affix, Anchor, BackTop

## Specyfikacje Nowych Komponentów

### Sidebar - Panel Boczny Nawigacyjny

Komponent panelu bocznego z nawigacją, idealny do aplikacji dashboardowych.

**Props**:

- `collapsed`: boolean - Stan zwinięcia sidebara
- `onCollapse`: (collapsed: boolean) => void - Callback przy zmianie stanu
- `width`: number - Szerokość w px (default: 256)
- `collapsedWidth`: number - Szerokość gdy zwinięty (default: 80)
- `breakpoint`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' - Breakpoint dla auto-collapse
- `theme`: 'light' | 'dark' - Motyw sidebara
- `overlay`: boolean - Czy pokazać overlay na mobile (default: true)

**Funkcjonalność**:

- Responsywny - automatyczne collapse na urządzeniach mobilnych
- Overlay backdrop na mobile z możliwością zamknięcia
- Płynne animacje przejścia
- Fixed position z scroll dla długiej zawartości
- Zachowanie stanu w localStorage (opcjonalnie)
- Integracja z system motywów

**Style**:

- Transition dla width przy collapse/expand
- Z-index odpowiedni dla overlay
- Box-shadow dla głębi
- Responsive breakpoints

### Navbar - Pasek Nawigacyjny

Główny pasek nawigacyjny aplikacji z hamburgerem i menu.

**Props**:

- `logo`: VNode - Element logo
- `menu`: VNode - Menu items
- `extra`: VNode - Dodatkowe elementy (np. user menu)
- `fixed`: boolean - Fixed top position (default: false)
- `transparent`: boolean - Transparentne tło (default: false)
- `onMenuToggle`: (open: boolean) => void - Callback dla hamburger menu
- `showMenuButton`: boolean - Czy pokazać hamburger (default: true na mobile)

**Funkcjonalność**:

- Hamburger menu integration
- Responsive - ukrywa menu items na mobile, pokazuje hamburger
- Fixed navbar z shadow przy scroll
- Smooth transitions
- Integracja z Sidebar (otwieranie/zamykanie)
- Mobile menu overlay lub drawer

**Style**:

- Flexbox layout dla alignment
- Z-index dla fixed position
- Animacje hamburger icon
- Backdrop blur opcjonalnie

### Menu - System Menu Nawigacyjny

Komponent menu do nawigacji w aplikacji.

**Props**:

- `mode`: 'horizontal' | 'vertical' | 'inline' - Tryb wyświetlania
- `items`: MenuItem[] - Array elementów menu
- `selectedKeys`: string[] - Aktywne klucze
- `openKeys`: string[] - Otwarte submenu (dla vertical)
- `onSelect`: (key: string) => void - Callback przy wyborze
- `theme`: 'light' | 'dark' - Motyw menu
- `collapsible`: boolean - Czy można zwijać submenu
- `inlineCollapsed`: boolean - Stan zwinięcia dla inline mode

**MenuItem Interface**:

```typescript
interface MenuItem {
  key: string;
  label: string | VNode;
  icon?: VNode;
  children?: MenuItem[];
  disabled?: boolean;
  danger?: boolean;
  href?: string;
  onClick?: () => void;
}
```

**Funkcjonalność**:

- Nested submenu support
- Active state highlighting
- Icons integration
- Dividers between groups
- Collapsible sections
- Keyboard navigation
- Routing integration (href lub onClick)

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
