import { useState } from 'react';
import { postService } from '../services/postService';
import type { post } from '../types/postTypes';

export const useCreatePost = (post: Partial<post>) => {

    const [loadingCreate, setLoadingCreate] = useState(false);

    const onPost = async () => {
        setLoadingCreate(true);
        try {
            await postService.createPost({ ...post });
            // sleep para pruebas
            await new Promise(resolve => setTimeout(resolve, 2500));

            setLoadingCreate(false);
        } catch (err) {
            setLoadingCreate(false);
        }
    }

    return {
        loadingCreate,
        onPost,
    }
}
