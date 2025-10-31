import type { ComponentProps } from 'preact'
import './styles/code.scss'

interface CodeProps extends ComponentProps<'code'> {
  inline?: boolean;
}

export function Code({ inline, className = '', ...props }: CodeProps) {
  const classes = [inline ? 'code-inline' : 'code-block', className].filter(Boolean).join(' ');
  return <code className={classes} {...props} />
}