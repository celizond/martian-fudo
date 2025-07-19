
import { useCreatePost } from '../services/mutations/createPost';
import type { post } from '../types/postTypes';

export const useGeneratePost = (partialPost: Partial<post>) => {

    const createMutation = useCreatePost(partialPost);

    const onCreate = async () => {
        createMutation.mutate(); 
    }

    return {
        createLoading: createMutation.isPending,
        createError: createMutation.isError,
        createSuccess: createMutation.isSuccess,
        onCreate,
    }
}
