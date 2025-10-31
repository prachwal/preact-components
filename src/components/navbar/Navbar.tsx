import type { ComponentProps, VNode } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import './styles/navbar.scss';

export interface NavbarProps extends ComponentProps<'nav'> {
  logo?: VNode;
  menu?: VNode;
  extra?: VNode;
  fixed?: boolean;
  transparent?: boolean;
  onMenuToggle?: (open: boolean) => void;
  showMenuButton?: boolean;
}

export function Navbar({
  logo,
  menu,
  extra,
  fixed = false,
  transparent = false,
  onMenuToggle,
  showMenuButton = true,
  className = '',
  children,
  ...props
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!fixed) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fixed]);

  const handleMenuToggle = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    onMenuToggle?.(newState);
  };

  const classes = [
    'navbar',
    fixed ? 'navbar--fixed' : '',
    transparent && !scrolled ? 'navbar--transparent' : '',
    scrolled ? 'navbar--scrolled' : '',
    mobileMenuOpen ? 'navbar--menu-open' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <nav className={classes} {...props}>
      <div className="navbar__container">
        {/* Logo */}
        {logo && (
          <div className="navbar__logo">
            {logo}
          </div>
        )}

        {/* Hamburger Button */}
        {showMenuButton && (
          <button
            className="navbar__hamburger"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen ? 'true' : 'false'}
            type="button"
          >
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
            <span className="navbar__hamburger-line" />
          </button>
        )}

        {/* Menu */}
        {menu && (
          <div className="navbar__menu">
            {menu}
          </div>
        )}

        {/* Extra content (e.g., user menu, theme toggle) */}
        {extra && (
          <div className="navbar__extra">
            {extra}
          </div>
        )}

        {/* Children fallback */}
        {!menu && !extra && children && (
          <div className="navbar__content">
            {children}
          </div>
        )}
      </div>
    </nav>
  );
}
