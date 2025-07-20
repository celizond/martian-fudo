import { useEffect, useRef } from 'react';
import type { TextAreaProps } from '../../types/commonComponents.types';
import './TextArea.scss';

export const TextArea = ({ name, placeholder = '', value, onChange }: TextAreaProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [value]);

    return (
        <textarea
            ref={textareaRef}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}>
        </textarea>
    )
}
