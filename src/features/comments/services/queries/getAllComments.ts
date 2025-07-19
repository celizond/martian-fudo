import { useQuery } from '@tanstack/react-query';
import { commentService } from '../commentService';
import type { comment } from '../../types/commentTypes';

export const useGetAllComments = (idPost: string) => {
    
    const { data, error, isLoading } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await commentService.getComments(idPost);
            res.data.sort((a:any, b:any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            return res.data;
        },
        refetchOnWindowFocus: true,
    });

    const mainComments = data?.filter((comment: comment) => comment.parentId === null);
    const nestedCommentsById = (idComment:string) => data?.filter((comment: comment) => comment.parentId === idComment);

    return {
        isLoading,
        error,
        data,
        mainComments,
        nestedCommentsById,
    };

};
