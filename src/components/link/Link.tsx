import type { ComponentProps } from 'preact'

export function Link(props: ComponentProps<'a'>) {
  return <a {...props} />
}