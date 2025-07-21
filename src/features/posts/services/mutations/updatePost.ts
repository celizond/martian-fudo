import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postService } from '../postService';

export const useUpdatePost = (formState:any, id:string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => postService.updatePost(id, formState),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['post', id] });
    },
    onError: (error) => {
      console.error('Error updating post:', error);
    },
  });
};