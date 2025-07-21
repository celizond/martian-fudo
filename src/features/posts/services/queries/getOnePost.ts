import { useQuery } from '@tanstack/react-query';
import { postService } from '../postService';
import type { post } from '../../types/postTypes';

export const useGetOnePost = (storedPost: post) => {

    const postOneQuery = useQuery({
        queryKey: ['post', storedPost.id],
        queryFn: async () => {
            const res = await postService.getPost(storedPost.id);
            return res.data;
        },
        retry: 0
    });

    return {
        onePost: postOneQuery.data || storedPost,
        isLoadingPost: postOneQuery.isLoading,
        errorPost: postOneQuery.error,
    };

};