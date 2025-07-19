import { useQuery } from '@tanstack/react-query';
import { commentService } from '../services/commentService';
import type { comment } from '../types/commentTypes';

export const useGetNestedComments = (idPost: string, idComment: string) => {
    
    const { data, error, isLoading } = useQuery({
        queryKey: ['nested comments'],
        queryFn: async () => {
            const data = await commentService.getComments(idPost);
            const filteredData = data.data.filter((comment: comment) =>  comment.parentId === idComment);
            return filteredData;
        },
        refetchOnWindowFocus: true,
    });

    return {
        isLoading,
        error,
        data,
    };

};