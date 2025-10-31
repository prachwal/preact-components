import type { ComponentProps } from 'preact';
import './styles/radio.scss';

export interface RadioProps extends Omit<ComponentProps<'input'>, 'type'> {
  label?: string;
}

export function Radio({ 
  label,
  className = '',
  id,
  ...props 
}: RadioProps) {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
  
  const classes = [
    'radio',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <input 
        type="radio"
        className="radio__input"
        id={radioId}
        {...props} 
      />
      {label && (
        <label htmlFor={radioId} className="radio__label">
          {label}
        </label>
      )}
    </div>
  );
}
