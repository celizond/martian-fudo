import { useState } from 'react';

export const useModalActions = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState<any>('');
    const [isUpdating, setIsUpdating] = useState(false)

    const handlerQuitModal = () => {
        setIsOpenModal(false);
        setModalMessage('');
    }

    const handlerUpdate = () => {
        setIsUpdating(true);
        setIsOpenModal(true);
    }

    const handlerSubmitAction = async(event: any, continueFn: () => Promise<void>) => {
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
