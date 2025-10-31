import type { ComponentProps } from 'preact'
import './styles/section.scss'

interface SectionProps extends ComponentProps<'section'> {
  variant?: 'default' | 'card' | 'hero';
}

export function Section({ variant = 'default', className = '', ...props }: SectionProps) {
  const variantClass = variant !== 'default' ? `section-${variant}` : '';
  const classes = [variantClass, className].filter(Boolean).join(' ');
  return <section className={classes} {...props} />
}