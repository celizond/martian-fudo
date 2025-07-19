import { useMutation, useQueryClient } from '@tanstack/react-query';
import { commentService } from '../commentService';
import type { post } from '../../../posts';
import { useLocation } from 'react-router-dom';

export const useUpdateComment = (formState:any) => {
  const queryClient = useQueryClient();
  const { state } = useLocation();
    const post: post = state?.post;

  return useMutation({
    mutationFn: () => commentService.updateComment(post.id, formState),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
    onError: (error) => {
      console.error('Error updating comment:', error);
    },
  });
};