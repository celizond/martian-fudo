import type { comment } from '../types/commentTypes';
import { useDeleteComment } from '../services/mutations/deleteComment';
import { useUpdateComment } from '../services/mutations/updateComment';

export const useActionsComment = (comment: comment, formState: Partial<comment>) => {

    const deleteMutation = useDeleteComment();
    const updateMutation = useUpdateComment( formState);

    const onDelete = async () => {
        deleteMutation.mutate(comment.id); 
    }

    const onUpdate = async () => {
        updateMutation.mutate(comment.id); 
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
