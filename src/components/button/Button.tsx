import type { ComponentProps } from 'preact';
import './styles/button.scss';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export function Button({ 
  variant, 
  size = 'md', 
  loading = false,
  disabled,
  className = '', 
  children,
  ...props 
}: ButtonProps) {
  const classes = [
    'btn',
    variant ? `btn--${variant}` : 'btn--primary',
    `btn--${size}`,
    loading ? 'btn--loading' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={classes} 
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="btn__spinner" />}
      <span className={loading ? 'btn__content--loading' : 'btn__content'}>
        {children}
      </span>
    </button>
  );
}