import type { childrenType, onChangeType, onClickType, onInputChangeType } from './generic.types';

export type btnTypes = 'button' | 'submit' | 'reset';
export type errorMsgTypes = 'generic' | 'comments' | 'posts';

export type ActionButtonsProps = {
    text: string;
    data: any;
    elementsEdits: any;
    useActions: any;
}

export type ButtonProps = {
    text: string;
    style?: string;
    type?: btnTypes;
    disabled?: boolean;
    onClick: onClickType;
}

export type ErrorMessageProps = {
  type: errorMsgTypes;
}

export type ImageBoxProps = {
    src: string;
    alt: string;
    height?: number;
    width?: number;
}

export type InputProps = {
    name: string;
    type: string; 
    placeholder: string; 
    value: string
    onChange: onInputChangeType;
}

export type ModalProps = {
    isOpen: boolean;
    children: childrenType;
    onClose: () => void;
}

export type TextAreaProps = {
    name: string;
    placeholder?: string;
    value: any;
    onChange: onChangeType;
}