import type { ComponentProps } from 'preact';
import { useState } from 'preact/hooks';
import './styles/alert.scss';

export interface AlertProps extends ComponentProps<'div'> {
  type?: 'success' | 'info' | 'warning' | 'error';
  message: string;
  description?: string;
  closable?: boolean;
  onClose?: () => void;
  showIcon?: boolean;
}

export function Alert({ 
  type = 'info',
  message,
  description,
  closable = false,
  onClose,
  showIcon = false,
  className = '',
  ...props 
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  const classes = [
    'alert',
    `alert--${type}`,
    description ? 'alert--with-description' : '',
    className
  ].filter(Boolean).join(' ');

  const icons = {
    success: '✓',
    info: 'ℹ',
    warning: '⚠',
    error: '✕'
  };

  return (
    <div className={classes} {...props}>
      {showIcon && (
        <span className="alert__icon">{icons[type]}</span>
      )}
      <div className="alert__content">
        <div className="alert__message">{message}</div>
        {description && (
          <div className="alert__description">{description}</div>
        )}
      </div>
      {closable && (
        <button 
          className="alert__close"
          onClick={handleClose}
          type="button"
          aria-label="Close"
        >
          ✕
        </button>
      )}
    </div>
  );
}
