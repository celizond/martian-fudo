import type { TextAreaProps } from '../../types/commonComponents.types';
import './TextArea.scss';

export const TextArea = ({ name, placeholder= '', value, onChange }: TextAreaProps) => {
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}>

        </textarea>
    )
}
