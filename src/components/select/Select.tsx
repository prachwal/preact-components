import type { ComponentProps } from 'preact';
import './styles/select.scss';

export interface SelectProps extends Omit<ComponentProps<'select'>, 'size'> {
  size?: 'small' | 'medium' | 'large';
  variant?: 'outlined' | 'filled';
  error?: boolean;
  fullWidth?: boolean;
  options?: Array<{ value: string | number; label: string; disabled?: boolean }>;
}

export function Select({ 
  size = 'medium',
  variant = 'outlined',
  error = false,
  fullWidth = false,
  options = [],
  className = '',
  children,
  disabled,
  ...props 
}: SelectProps) {
  const classes = [
    'select',
    `select--${size}`,
    `select--${variant}`,
    error ? 'select--error' : '',
    disabled ? 'select--disabled' : '',
    fullWidth ? 'select--full-width' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <select 
      className={classes} 
      disabled={disabled}
      {...props}
    >
      {options.length > 0 
        ? options.map(option => (
            <option 
              key={option.value} 
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))
        : children
      }
    </select>
  );
}
