import { type ChangeEventHandler } from 'react';
import './TextArea.scss';

export type TextAreaProps = {
    name: string;
    className: string;
    placeholder: string;
    value: any;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea = ({ name, className, placeholder, value, onChange }: TextAreaProps) => {
    return (
        <textarea
            name={name}
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}>

        </textarea>
    )
}
