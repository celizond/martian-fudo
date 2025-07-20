import { useState } from 'react';
import type { eventType } from '../types/generic.types';

export const useModalActions = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isUpdating, setIsUpdating] = useState(false)

    const handlerQuitModal = () => {
        console.log(33333)
        setIsOpenModal(false);
        console.log(44444)
        setModalMessage('');
        console.log(55555, isOpenModal, modalMessage, isUpdating);
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
        console.log(11111)
        await continueFn();
        console.log(222222)
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
