import { useQuery } from '@tanstack/react-query';
import { postService } from '../services/postService';

export const useGetPosts = () => {
    
    const { data, error, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await postService.getPosts();
            res.data.sort((a:any, b:any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            return res.data;
        },
        refetchOnWindowFocus: true,
    });

    return {
        isLoading,
        error,
        data,
    };

};