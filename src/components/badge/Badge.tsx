import type { ComponentProps } from 'preact';
import './styles/badge.scss';

export interface BadgeProps extends ComponentProps<'span'> {
  count?: number;
  dot?: boolean;
  showZero?: boolean;
  status?: 'success' | 'error' | 'warning' | 'info' | 'default';
  text?: string;
}

export function Badge({ 
  count = 0,
  dot = false,
  showZero = false,
  status,
  text,
  children,
  className = '',
  ...props 
}: BadgeProps) {
  const classes = [
    'badge',
    status ? `badge--${status}` : '',
    className
  ].filter(Boolean).join(' ');

  const dotClasses = [
    'badge__dot',
    status ? `badge__dot--${status}` : ''
  ].filter(Boolean).join(' ');

  const countClasses = [
    'badge__count',
    status ? `badge__count--${status}` : ''
  ].filter(Boolean).join(' ');

  // Status badge (with optional text)
  if (status && !children) {
    return (
      <span className={classes} {...props}>
        <span className={dotClasses} />
        {text && <span className="badge__text">{text}</span>}
      </span>
    );
  }

  // Badge with children
  const shouldShowCount = count > 0 || showZero;

  return (
    <span className={classes} {...props}>
      {children}
      {dot && <span className={dotClasses} />}
      {!dot && shouldShowCount && (
        <span className={countClasses}>
          {count > 99 ? '99+' : count}
        </span>
      )}
    </span>
  );
}
