import type { MouseEventHandler } from 'react';
import './Button.scss';

export type buttonProps = {
  text: string;
  style?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  text,
  style = 'btn-continue',
  type = 'button',
  disabled = false,
  onClick
}: buttonProps) => {

  return (
    <div className='my-button'>
      <button
      type={type}
      className={style}
      onClick={onClick}
      disabled={disabled}>
      {text}
    </button>
    </div>
    
  )
}
