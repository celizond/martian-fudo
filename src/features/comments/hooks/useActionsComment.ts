import type { comment } from '../types/commentTypes';
import { useDeleteComment } from '../services/mutations/deleteComment';
import { useUpdateComment } from '../services/mutations/updateComment';

export const useActionsComment = (id: string, formState: Partial<comment>) => {

    const deleteMutation = useDeleteComment();
    const updateMutation = useUpdateComment(formState);

    const onDelete = async () => {
        deleteMutation.mutate(id); 
    }

    const onUpdate = async () => {
        updateMutation.mutate(); 
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
