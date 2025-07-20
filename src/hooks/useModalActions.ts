import { useState } from 'react';
import type { eventType } from '../types/generic.types';

export const useModalActions = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isUpdating, setIsUpdating] = useState(false)

    const handlerQuitModal = () => {
        setIsOpenModal(false);
        setModalMessage('');
    }

    const handlerErrorModal = () => {
        setModalMessage('Ha ocurrido un error');
        setIsOpenModal(true);
    }

    const handlerSuccessModal = () => {
        setModalMessage('Operación ejecutada con éxito');
        setIsOpenModal(true);
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
        handlerErrorModal,
        handlerSuccessModal,
    }
}
