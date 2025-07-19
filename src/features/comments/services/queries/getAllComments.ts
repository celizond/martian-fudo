import { useQuery } from '@tanstack/react-query';
import { commentService } from '../commentService';

export const useGetAllComments = (idPost: string) => {
    
    const { data, error, isLoading } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await commentService.getComments(idPost);
            res.data.sort((a:any, b:any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            //const filteredData = data.data.filter((comment: comment) => comment.parentId == null) 
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
