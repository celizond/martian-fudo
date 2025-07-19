import { useState } from 'react';
import { commentService } from '../services/commentService';
import type { comment } from '../types/commentTypes';
import { useLocation } from 'react-router-dom';
import type { post } from '../../posts';

export const useCreateComment = (parentId: null | string, comment: Partial<comment>) => {

    const { state } = useLocation();
    const post: post = state?.post;
    const [loadingCreate, setLoadingCreate] = useState(false);

    const onComment = async () => {
        setLoadingCreate(true);
        try {
            await commentService.createComment(parentId, post.id, { ...comment });
            // sleep para pruebas
            await new Promise(resolve => setTimeout(resolve, 2500));

            setLoadingCreate(false);
        } catch (err) {
            setLoadingCreate(false);
        }
    }

    return {
        loadingCreate,
        onComment,
    }
}
