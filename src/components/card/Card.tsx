import type { ComponentProps, VNode } from 'preact';
import './styles/card.scss';

export interface CardProps extends Omit<ComponentProps<'div'>, 'title'> {
  title?: string | VNode;
  extra?: VNode;
  bordered?: boolean;
  hoverable?: boolean;
  loading?: boolean;
}

export function Card({ 
  title,
  extra,
  bordered = true,
  hoverable = false,
  loading = false,
  children,
  className = '',
  ...props 
}: CardProps) {
  const classes = [
    'card',
    bordered ? 'card--bordered' : '',
    hoverable ? 'card--hoverable' : '',
    loading ? 'card--loading' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {(title || extra) && (
        <div className="card__header">
          {title && <div className="card__title">{title}</div>}
          {extra && <div className="card__extra">{extra}</div>}
        </div>
      )}
      <div className="card__body">
        {children}
      </div>
    </div>
  );
}
