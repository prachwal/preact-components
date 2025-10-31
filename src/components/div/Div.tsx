import type { ComponentProps } from 'preact';

interface DivProps extends ComponentProps<'div'> {
  // Add custom props if needed in the future
}

export function Div(props: DivProps) {
  return <div {...props} />;
}
