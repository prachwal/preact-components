import { h } from 'preact'
import type { ComponentProps } from 'preact'

interface HeadingProps extends ComponentProps<'h1'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export function Heading({ level = 1, ...props }: HeadingProps): any {
  const Tag = `h${level}`
  return h(Tag, props)
}