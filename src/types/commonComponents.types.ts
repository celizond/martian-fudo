import type { childrenType, onChangeType, onClickType } from './generic.types';

export type typeBtn = 'button' | 'submit' | 'reset';

export type ModalProps = {
    isOpen: boolean;
    children: childrenType;
    onClose: () => void;
}

export type ButtonProps = {
  text: string;
  style?: string;
  type?: typeBtn;
  disabled?: boolean;
  onClick: onClickType;
}

export type ImageBoxProps = {
    src: string;
    alt: string;
    height?: number;
    width?: number;
}

export type TextAreaProps = {
    name: string;
    placeholder?: string;
    value: any;
    onChange: onChangeType;
}