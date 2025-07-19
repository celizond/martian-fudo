import { useCreateComment } from "../services/mutations/createComment";
import type { comment } from "../types/commentTypes";

export const useGenerateComment = (parentId: null | string, partialComment: Partial<comment>) => {

    const createMutation = useCreateComment(parentId, partialComment);

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
