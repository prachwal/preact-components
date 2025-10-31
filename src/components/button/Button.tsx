import type { ComponentProps } from 'preact';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ variant, size, className = '', ...props }: ButtonProps) {
  const variantClass = variant ? `btn-${variant}` : '';
  const sizeClass = size ? `btn-${size}` : '';
  const classes = [variantClass, sizeClass, className].filter(Boolean).join(' ');

  return <button className={classes} {...props} />;
}