import { useQuery } from '@tanstack/react-query';
import { postService } from '../services/postService';

export const useGetPosts = () => {
    
    const { data, error, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const data = await postService.getPosts();
            return data;
        },
    });

    return {
        isLoading,
        error,
        data,
    };

};