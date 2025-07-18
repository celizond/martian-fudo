import { useQuery } from '@tanstack/react-query';
import { commentService } from '../services/commentService';

export const useGetComments = () => {
    console.log('useGetComments called');
    const { data, error, isLoading } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const data = await commentService.getComments();
            return data;
        },
        staleTime: 1000 * 60 * 5
    });

    return {
        isLoading,
        error,
        data,
    };

};