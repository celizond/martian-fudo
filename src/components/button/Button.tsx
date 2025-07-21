
import type { ButtonProps } from '../../types/commonComponents.types';
import './Button.scss';

export const Button = ({ text, style = 'btn-continue', type = 'button', disabled = false, onClick }: ButtonProps) => {

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
