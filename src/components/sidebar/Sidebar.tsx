import type { ComponentProps } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import './styles/sidebar.scss';

export interface SidebarProps extends ComponentProps<'aside'> {
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  width?: number;
  collapsedWidth?: number;
  breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'light' | 'dark';
  overlay?: boolean;
  collapsible?: boolean;
}

const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export function Sidebar({
  collapsed: controlledCollapsed,
  onCollapse,
  width = 256,
  collapsedWidth = 80,
  breakpoint = 'md',
  theme = 'light',
  overlay = true,
  collapsible = true,
  className = '',
  children,
  ...props
}: SidebarProps) {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isCollapsed = controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;

  useEffect(() => {
    const handleResize = () => {
      const breakpointPx = BREAKPOINTS[breakpoint];
      const mobile = window.innerWidth < breakpointPx;
      setIsMobile(mobile);
      
      // Auto-collapse on mobile
      if (mobile && !isCollapsed) {
        const newCollapsed = true;
        setInternalCollapsed(newCollapsed);
        onCollapse?.(newCollapsed);
        setMobileOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint, isCollapsed, onCollapse]);

  const handleToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      const newCollapsed = !isCollapsed;
      setInternalCollapsed(newCollapsed);
      onCollapse?.(newCollapsed);
    }
  };

  const handleOverlayClick = () => {
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const sidebarWidth = isCollapsed ? collapsedWidth : width;
  const classes = [
    'sidebar',
    `sidebar--${theme}`,
    isCollapsed ? 'sidebar--collapsed' : '',
    isMobile ? 'sidebar--mobile' : '',
    mobileOpen ? 'sidebar--mobile-open' : '',
    className
  ].filter(Boolean).join(' ');

  // Create CSS custom properties for dynamic width
  const style = {
    '--sidebar-width': `${isMobile ? width : sidebarWidth}px`,
  } as any;

  return (
    <>
      {isMobile && mobileOpen && overlay && (
        <div 
          className="sidebar__overlay" 
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}
      <aside 
        className={classes}
        style={style}
        {...props}
      >
        {collapsible && !isMobile && (
          <button
            className="sidebar__toggle"
            onClick={handleToggle}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            type="button"
          >
            <span className="sidebar__toggle-icon">
              {isCollapsed ? '›' : '‹'}
            </span>
          </button>
        )}
        <div className="sidebar__content">
          {children}
        </div>
      </aside>
    </>
  );
}

// Export a hook for controlling sidebar from parent components
export function useSidebarControl() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = () => setCollapsed(!collapsed);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return {
    collapsed,
    setCollapsed,
    toggle,
    mobileOpen,
    setMobileOpen,
    toggleMobile,
  };
}
