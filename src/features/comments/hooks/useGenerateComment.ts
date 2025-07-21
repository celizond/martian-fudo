import { useCreateComment } from "../services/mutations/createComment";
import type { comment } from "../types/comment.types";

export const useGenerateComment = (parentId: null | string, partialComment: Partial<comment>) => {

    const createMutation = useCreateComment(parentId, partialComment);

    const onCreate = () => {
        createMutation.mutate(); 
    }

    return {
        createLoading: createMutation.isPending,
        createError: createMutation.isError,
        createSuccess: createMutation.isSuccess,
        onCreate,
    }
}
