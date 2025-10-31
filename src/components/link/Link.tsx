import type { ComponentProps } from 'preact'

interface LinkProps extends ComponentProps<'a'> {
  variant?: 'primary' | 'secondary' | 'muted';
}

export function Link({ variant, className = '', ...props }: LinkProps) {
  const variantClass = variant ? `link-${variant}` : '';
  const classes = [variantClass, className].filter(Boolean).join(' ');
  return <a className={classes} {...props} />
}