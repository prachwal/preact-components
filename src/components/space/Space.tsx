import type { ComponentProps } from 'preact';
import './styles/space.scss';

export interface SpaceProps extends ComponentProps<'div'> {
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'middle' | 'large' | number;
  align?: 'start' | 'end' | 'center' | 'baseline';
  wrap?: boolean;
}

export function Space({ 
  children, 
  direction = 'horizontal',
  size = 'small',
  align,
  wrap = false,
  className = '',
  style,
  ...props 
}: SpaceProps) {
  const sizeMap = {
    small: 8,
    middle: 16,
    large: 24
  };

  const gapValue = typeof size === 'number' ? size : sizeMap[size];

  const classes = [
    'space',
    `space--${direction}`,
    align ? `space--align-${align}` : '',
    wrap ? 'space--wrap' : '',
    className
  ].filter(Boolean).join(' ');

  const spaceStyle: Record<string, string> = {
    ...(style as Record<string, string> || {}),
    gap: `${gapValue}px`
  };

  return (
    // eslint-disable-next-line react/forbid-dom-props
    <div className={classes} style={spaceStyle} {...props}>
      {children}
    </div>
  );
}
