import { useMutation, useQueryClient } from '@tanstack/react-query';
import { commentService } from '../commentService';
import type { post } from '../../../posts';
import type { comment } from '../../types/commentTypes';
import { useLocation } from 'react-router-dom';

export const useCreateComment = (parentId: null | string, comment: Partial<comment>) => {
  const queryClient = useQueryClient();
  const { state } = useLocation();
  const post: post = state?.post;

  return useMutation({
    mutationFn: () => commentService.createComment(post.id, parentId, { ...comment }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
    onError: (error) => {
      console.error('Error creating comment:', error);
    },
  });
};