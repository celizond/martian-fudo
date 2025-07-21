import type { post } from '../types/postTypes';
import { useDeletePost } from '../services/mutations/deletePost';
import { useUpdatePost } from '../services/mutations/updatePost';

export const useActionsPost = (post: post, formState: Partial<post>) => {

    const deleteMutation = useDeletePost();
    const updateMutation = useUpdatePost(formState, post.id);

    const onDelete = async () => {
        deleteMutation.mutate(post.id); 
    }

    const onUpdate = async () => {
        updateMutation.mutate(post.id); 
    }

    return {
        deleteLoading: deleteMutation.isPending,
        deleteError: deleteMutation.isError,
        deleteSuccess: deleteMutation.isSuccess,
        updateLoading: updateMutation.isPending,
        updateError: updateMutation.isError,
        updateSuccess: updateMutation.isSuccess,
        onDelete,
        onUpdate,
    }
}
