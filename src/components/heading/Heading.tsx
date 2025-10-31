import { h } from 'preact'
import type { ComponentProps } from 'preact'

interface HeadingProps extends ComponentProps<'h1'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({ level = 1, className = '', ...props }: HeadingProps): any {
  const Tag = `h${level}`
  const classes = [className].filter(Boolean).join(' ');
  return h(Tag, { className: classes, ...props })
}