import { useQuery } from '@tanstack/react-query';
import { commentService } from '../services/commentService';

export const useGetComments = (idPost: string) => {
    
    const { data, error, isLoading } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const data = await commentService.getComments(idPost);
            return data;
        },
        refetchOnWindowFocus: true,
    });

    return {
        isLoading,
        error,
        data,
    };

};