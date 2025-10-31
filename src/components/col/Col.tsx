import type { ComponentProps } from 'preact';
import './styles/col.scss';

export interface ColProps extends ComponentProps<'div'> {
  span?: number;
  offset?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  flex?: string | number;
}

export function Col({ 
  children, 
  span = 24,
  offset = 0,
  xs,
  sm,
  md,
  lg,
  xl,
  flex,
  className = '',
  style,
  ...props 
}: ColProps) {
  const classes = [
    'col',
    `col--${span}`,
    offset > 0 ? `col--offset-${offset}` : '',
    xs ? `col--xs-${xs}` : '',
    sm ? `col--sm-${sm}` : '',
    md ? `col--md-${md}` : '',
    lg ? `col--lg-${lg}` : '',
    xl ? `col--xl-${xl}` : '',
    className
  ].filter(Boolean).join(' ');

  const colStyle: Record<string, string> = {
    ...(style as Record<string, string> || {}),
    ...(flex && { flex: String(flex) })
  };

  return (
    // eslint-disable-next-line react/forbid-dom-props
    <div className={classes} style={flex ? colStyle : style} {...props}>
      {children}
    </div>
  );
}
