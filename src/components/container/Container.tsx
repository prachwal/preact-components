import type { ComponentProps } from 'preact';
import './styles/container.scss';

export interface ContainerProps extends ComponentProps<'div'> {
  fluid?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export function Container({ 
  children, 
  fluid = false, 
  maxWidth,
  className = '',
  ...props 
}: ContainerProps) {
  const classes = [
    'container',
    fluid ? 'container--fluid' : '',
    maxWidth ? `container--${maxWidth}` : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
