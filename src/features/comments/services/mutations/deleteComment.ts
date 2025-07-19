import { useMutation, useQueryClient } from '@tanstack/react-query';
import { commentService } from '../commentService';
import type { post } from '../../../posts';
import { useLocation } from 'react-router-dom';

export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  const { state } = useLocation();
  const post: post = state?.post;

  return useMutation({
    mutationFn: (id: string) => commentService.deleteComment(post.id, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
    onError: (error) => {
      console.error('Error deleting comment:', error);
    },
  });
};