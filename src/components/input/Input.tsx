import type { ComponentProps } from 'preact';
import './styles/input.scss';

export interface InputProps extends Omit<ComponentProps<'input'>, 'size'> {
  size?: 'small' | 'medium' | 'large';
  variant?: 'outlined' | 'filled';
  error?: boolean;
  prefix?: string;
  suffix?: string;
  fullWidth?: boolean;
}

export function Input({ 
  size = 'medium',
  variant = 'outlined',
  error = false,
  prefix,
  suffix,
  fullWidth = false,
  className = '',
  disabled,
  ...props 
}: InputProps) {
  const classes = [
    'input',
    `input--${size}`,
    `input--${variant}`,
    error ? 'input--error' : '',
    disabled ? 'input--disabled' : '',
    fullWidth ? 'input--full-width' : '',
    className
  ].filter(Boolean).join(' ');

  if (prefix || suffix) {
    return (
      <div className={`input-wrapper ${fullWidth ? 'input-wrapper--full-width' : ''}`}>
        {prefix && <span className="input__prefix">{prefix}</span>}
        <input 
          className={classes} 
          disabled={disabled}
          {...props} 
        />
        {suffix && <span className="input__suffix">{suffix}</span>}
      </div>
    );
  }

  return (
    <input 
      className={classes} 
      disabled={disabled}
      {...props} 
    />
  );
}
