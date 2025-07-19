import { useNavigate } from 'react-router-dom';
import { postService } from '../services/postService';
import type { post } from '../types/postTypes';
import { useState } from 'react';

export const useActionsPost = (post: post) => {

    const { id } = post;
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState<any>('');
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [loadingUpdate, setLoadingUpdate] = useState(false);
    const [isEditing, setIsEditing] = useState(false)

    const navigate = useNavigate();

    const handlerQuitModal = () => {
        setIsOpenModal(false);
        setModalMessage('');
    }

    const handlerUpdate = () => {
        setIsEditing(true);
        setIsOpenModal(true);
    }

    const handlerSubmitUpdate = (event: any, formState: any) => {
        event.preventDefault();
        onUpdate(formState);
    }

    const handlerViewMore = () => {
        navigate(`/post/${id}`, { state: { post } })
    }

    const onDelete = async () => {
        setLoadingDelete(true);
        try {
            await postService.deletePost(id);
            //await new Promise(resolve => setTimeout(resolve, 1000));
            setModalMessage(`Post #${id} eliminado`);
            setLoadingDelete(false);
        } catch (err) {
            setLoadingDelete(false);
            setModalMessage(`Ha ocurrido un error eliminando el post #${id}`);
        } finally {
            setIsOpenModal(true);
        }
    }

    const onUpdate = async (formState: any) => {
        setLoadingUpdate(true);
        try {
            await postService.updatePost(id, formState);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setModalMessage(`Post #${id} actualizado`);
            setLoadingUpdate(false);
        } catch (error) {
            setLoadingUpdate(false);
            setModalMessage(`Ha ocurrido un error actualizando el post #${id}`);
        } finally {
            setIsOpenModal(true);
        }
    }


    return {
        modalMessage,
        loadingDelete,
        loadingUpdate,
        isOpenModal,
        isEditing,
        handlerQuitModal,
        handlerViewMore,
        handlerUpdate,
        handlerSubmitUpdate,
        onDelete,
        onUpdate,
    }
}
