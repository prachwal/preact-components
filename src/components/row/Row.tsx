import type { ComponentProps } from 'preact';
import './styles/row.scss';

export interface RowProps extends ComponentProps<'div'> {
  gutter?: number | [number, number];
  align?: 'top' | 'middle' | 'bottom' | 'stretch';
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
  wrap?: boolean;
}

export function Row({ 
  children, 
  gutter = 0,
  align = 'top',
  justify = 'start',
  wrap = true,
  className = '',
  style,
  ...props 
}: RowProps) {
  const [gutterX, gutterY] = Array.isArray(gutter) ? gutter : [gutter, gutter];
  
  const classes = [
    'row',
    `row--align-${align}`,
    `row--justify-${justify}`,
    wrap ? 'row--wrap' : 'row--nowrap',
    className
  ].filter(Boolean).join(' ');

  const rowStyle: Record<string, string> = {
    ...(style as Record<string, string> || {}),
    ...(gutterX && { marginLeft: `-${gutterX / 2}px`, marginRight: `-${gutterX / 2}px` }),
    ...(gutterY && { rowGap: `${gutterY}px` })
  };

  return (
    // eslint-disable-next-line react/forbid-dom-props
    <div className={classes} style={rowStyle} {...props}>
      {children}
    </div>
  );
}
