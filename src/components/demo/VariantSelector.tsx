import { useState, useRef, useEffect } from 'preact/hooks';
import { useTheme } from '../theme';
import './styles/variant-selector.scss';

const variants = [
  { value: 'base', label: 'Base', emoji: '🎨' },
  { value: 'sepia', label: 'Sepia', emoji: '📜' },
  { value: 'forest', label: 'Forest', emoji: '🌲' },
  { value: 'ocean', label: 'Ocean', emoji: '🌊' },
] as const;

export function VariantSelector() {
  const { variant, setVariant } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const currentVariant = variants.find(v => v.value === variant) || variants[0];

  return (
    <div className="variant-selector" ref={dropdownRef}>
      <button
        className="variant-selector__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select color variant"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="variant-selector__emoji">{currentVariant.emoji}</span>
        <span className="variant-selector__label">{currentVariant.label}</span>
        <svg
          className={`variant-selector__arrow ${isOpen ? 'variant-selector__arrow--open' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="variant-selector__dropdown" role="menu">
          {variants.map((v) => (
            <li key={v.value} role="none">
              <button
                className={`variant-selector__option ${
                  v.value === variant ? 'variant-selector__option--active' : ''
                }`}
                onClick={() => {
                  setVariant(v.value);
                  setIsOpen(false);
                }}
                role="menuitem"
                aria-current={v.value === variant ? 'true' : undefined}
              >
                <span className="variant-selector__emoji">{v.emoji}</span>
                <span className="variant-selector__label">{v.label}</span>
                {v.value === variant && (
                  <svg
                    className="variant-selector__check"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 4.5L6 12L2.5 8.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
