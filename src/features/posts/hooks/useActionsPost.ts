import { useNavigate } from 'react-router-dom';
import { postService } from '../services/postService';
import type { post } from '../types/postTypes';
import { useState } from 'react';

export const useActionsPost = (post: post) => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [loadingDelete, setLoadingDelete] = useState(false);

    const navigate = useNavigate();

    const onDelete = async () => {
        setLoadingDelete(true);
        try {
            await postService.deletePosts(post.id);
            await new Promise(resolve => setTimeout(resolve, 2500));
            setModalMessage(`Post ${post.title} eliminado`);
            setLoadingDelete(false);
        } catch (err) {
            setLoadingDelete(false);
            setModalMessage(`Ha ocurridon un error eliminando el post ${post.title}`);
        } finally {
            setIsOpenModal(true);
        }
    }

    const onUpdate = async () => {
        await postService.deletePosts(post.id);
    }

    const onViewMore = () => {
        navigate(`/post/${post.id}`, { state: { post } })
    }

    return {
        modalMessage,
        loadingDelete,
        isOpenModal,
        setIsOpenModal,
        onDelete,
        onUpdate,
        onViewMore,
    }
}
