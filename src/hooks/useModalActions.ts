import { useState } from 'react';
import type { eventType } from '../types/commonComponents.types';

export const useModalActions = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isUpdating, setIsUpdating] = useState(false)

    const handlerQuitModal = () => {
        setIsOpenModal(false);
        setModalMessage('');
    }

    const handlerUpdate = () => {
        setIsUpdating(true);
        setIsOpenModal(true);
    }

    const handlerSubmitAction = async(event: eventType, continueFn: () => Promise<void>) => {
        event.preventDefault();
        await continueFn();
        handlerQuitModal();
    }

    return {
        modalMessage,
        isOpenModal,
        isUpdating,
        handlerQuitModal,
        handlerUpdate,
        handlerSubmitAction,
    }
}
