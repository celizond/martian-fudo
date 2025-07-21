import { errorMessages } from '../../data/messages';
import type { ErrorMessageProps } from '../../types/commonComponents.types';
import './ErrorMessage.scss';

export const ErrorMessage = ({type}: ErrorMessageProps) => {
  return (
    <div className="error-message">
      &#128125; {errorMessages[type]} &#128125;
    </div>
  )
}
