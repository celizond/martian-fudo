import { useQuery } from '@tanstack/react-query';
import { commentService } from '../services/commentService';
import type { comment } from '../types/commentTypes';

export const useGetMainComments = (idPost: string) => {
    
    const { data, error, isLoading } = useQuery({
        queryKey: ['main comments'],
        queryFn: async () => {
            const data = await commentService.getComments(idPost);
            const filteredData = data.data.filter((comment: comment) =>  comment.parentId == null) 
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