import { api } from "../../../services/api";
import type { comment } from "../types/commentTypes";

export const commentService = {

    getComment: (idComment: string) => {
        const url = `/post/2/comment/${idComment}`;
        return api.get(url);;
    },

    getComments: (idPost: string) => {
        const url = `/post/${idPost}/comment`;
        return api.get(url);
    },

    createComment: (parentId: null | string, postId:string, content: Partial<comment>) => {
        const currentDate = new Date();
        const updateDate = new Date(currentDate.getTime() - 3 * 60 * 60 * 1000);
        const createdAt = updateDate.toISOString();
        const url = `/post/${postId}/comment`;
        const comment = { ...content, createdAt: createdAt, parentId: parentId };
        return api.post(url, comment);
    },

    updateComments: (idComment: string) => {
        const url = `/post/2/comment/${idComment}`;
        return api.put(url);
    },

    deleteComments: (idComment: string) => {
        const url = `/post/2/comment/${idComment}`;
        return api.delete(url);
    },

}