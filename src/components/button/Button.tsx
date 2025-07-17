import type { MouseEventHandler } from 'react';
import './Button.scss';

export type buttonProps = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  text,
  type = 'button',
  disabled = false,
  onClick
}: buttonProps) => {

  return (
    <div className='my-button'>
      <button
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
    </div>
    
  )
}
