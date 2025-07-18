import { useNavigate } from 'react-router-dom';
import { postService } from '../services/postService';
import type { post } from '../types/postTypes';
import { useState } from 'react';

export const useActionsPost = (post: post) => {

    const { id } = post;
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [loadingDelete, setLoadingDelete] = useState(false);

    const navigate = useNavigate();

    const onQuitModal = () => {
        setIsOpenModal(false);
        window.location.reload();
    }

    const onDelete = async () => {
        setLoadingDelete(true);
        try {
            await postService.deletePosts(id);
            await new Promise(resolve => setTimeout(resolve, 2500));
            setModalMessage(`Post #${id} eliminado`);
            setLoadingDelete(false);
        } catch (err) {
            setLoadingDelete(false);
            setModalMessage(`Ha ocurrido un error eliminando el post #${id}`);
        } finally {
            setIsOpenModal(true);
        }
    }

    const onUpdate = async () => {
        await postService.deletePosts(id);
    }

    const onViewMore = () => {
        navigate(`/post/${id}`, { state: { post } })
    }

    return {
        modalMessage,
        loadingDelete,
        isOpenModal,
        onQuitModal,
        onDelete,
        onUpdate,
        onViewMore,
    }
}
