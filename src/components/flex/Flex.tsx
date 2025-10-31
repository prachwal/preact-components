import type { ComponentProps } from 'preact';
import './styles/flex.scss';

export interface FlexProps extends ComponentProps<'div'> {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  inline?: boolean;
}

export function Flex({ 
  children, 
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  wrap = 'nowrap',
  gap,
  inline = false,
  className = '',
  style,
  ...props 
}: FlexProps) {
  const classes = [
    inline ? 'flex--inline' : 'flex',
    `flex--direction-${direction}`,
    `flex--justify-${justify}`,
    `flex--align-${align}`,
    `flex--wrap-${wrap}`,
    className
  ].filter(Boolean).join(' ');

  const flexStyle: Record<string, string> = {
    ...(style as Record<string, string> || {}),
    ...(gap !== undefined && { gap: `${gap}px` })
  };

  return (
    // eslint-disable-next-line react/forbid-dom-props
    <div className={classes} style={gap !== undefined ? flexStyle : style} {...props}>
      {children}
    </div>
  );
}
