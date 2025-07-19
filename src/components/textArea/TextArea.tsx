import { type ChangeEventHandler } from 'react';
import './TextArea.scss';

export type TextAreaProps = {
    name: string;
    placeholder?: string;
    value: any;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

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
