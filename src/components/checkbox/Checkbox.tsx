import type { ComponentProps } from 'preact';
import './styles/checkbox.scss';

export interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type'> {
  label?: string;
  indeterminate?: boolean;
}

export function Checkbox({ 
  label,
  indeterminate = false,
  className = '',
  id,
  ...props 
}: CheckboxProps) {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  
  const classes = [
    'checkbox',
    indeterminate ? 'checkbox--indeterminate' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <input 
        type="checkbox"
        className="checkbox__input"
        id={checkboxId}
        {...props} 
      />
      {label && (
        <label htmlFor={checkboxId} className="checkbox__label">
          {label}
        </label>
      )}
    </div>
  );
}
