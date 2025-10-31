import type { ComponentProps } from 'preact';
import './styles/divider.scss';

export interface DividerProps extends ComponentProps<'div'> {
  orientation?: 'horizontal' | 'vertical';
  dashed?: boolean;
  plain?: boolean;
}

export function Divider({ 
  children,
  orientation = 'horizontal',
  dashed = false,
  plain = false,
  className = '',
  ...props 
}: DividerProps) {
  const classes = [
    'divider',
    `divider--${orientation}`,
    dashed ? 'divider--dashed' : '',
    children ? 'divider--with-text' : '',
    plain ? 'divider--plain' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children && <span className="divider__text">{children}</span>}
    </div>
  );
}
