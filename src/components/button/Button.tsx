import type { ComponentProps } from 'preact';

interface ButtonProps extends ComponentProps<'button'> {
  // Add custom props if needed
}

export function Button(props: ButtonProps) {
  return <button {...props} />;
}