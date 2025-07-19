
import type { ModalProps } from '../../types/commonComponents.types';
import './Modal.scss';

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className='modal-background' onClick={onClose}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>
                <button className='close-btn' onClick={onClose}>
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
}
