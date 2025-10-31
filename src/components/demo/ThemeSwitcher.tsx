import { useTheme } from '../theme';
import './styles/theme-switcher.scss';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const getNextTheme = () => {
    switch (theme) {
      case 'light':
        return 'dark';
      case 'dark':
        return 'system';
      default:
        return 'light';
    }
  };

  const handleThemeToggle = () => {
    setTheme(getNextTheme());
  };

  return (
    <button
      className="theme-switcher"
      onClick={handleThemeToggle}
      aria-label={`Current theme: ${theme}. Click to change.`}
      title={`Switch theme (current: ${theme})`}
    >
      <svg
        className="theme-switcher__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {theme === 'light' && (
          // Sun icon for light mode
          <>
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path
              d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}
        {theme === 'dark' && (
          // Moon icon for dark mode
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            fill="currentColor"
          />
        )}
        {theme === 'system' && (
          // Monitor icon for system mode
          <>
            <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M8 21h8m-4 0v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </>
        )}
      </svg>
    </button>
  );
}
