import type { ComponentProps } from 'preact';
import './styles/switch.scss';

export interface SwitchProps extends Omit<ComponentProps<'input'>, 'type' | 'size'> {
  label?: string;
  size?: 'small' | 'medium';
}

export function Switch({ 
  label,
  size = 'medium',
  className = '',
  id,
  ...props 
}: SwitchProps) {
  const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
  
  const classes = [
    'switch',
    `switch--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <input 
        type="checkbox"
        className="switch__input"
        id={switchId}
        {...props} 
      />
      <label htmlFor={switchId} className="switch__label">
        <span className="switch__slider" />
        {label && <span className="switch__text">{label}</span>}
      </label>
    </div>
  );
}
