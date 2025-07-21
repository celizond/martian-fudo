import type { InputProps } from '../../types/commonComponents.types';
import './Input.scss';

export const Input = ({ name, type, placeholder, value, onChange }: InputProps) => {

    return (
        <div className='input'>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}>
            </input>
        </div>

    )
}
