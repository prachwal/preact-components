import type { ComponentProps } from 'preact'

interface ParagraphProps extends ComponentProps<'p'> {
  variant?: 'default' | 'muted' | 'small';
}

export function Paragraph({ variant, className = '', ...props }: ParagraphProps) {
  const variantClass = variant ? `p-${variant}` : '';
  const classes = [variantClass, className].filter(Boolean).join(' ');

  return <p className={classes} {...props} />
}