import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postService } from '../postService';
import type { post } from '../../types/postTypes';

export const useCreatePost = (post: Partial<post>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postService.createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error) => {
      console.error('Error creating post:', error);
    },
  });
};