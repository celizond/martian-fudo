import { api } from "../../../services/api";
import type { comment } from "../types/commentTypes";

export const commentService = {

    getComment: (idPost: string, idComment: string) => {
        const url = `/post/${idPost}/comment/${idComment}`;
        return api.get(url);;
    },

    getComments: (idPost: string) => {
        const url = `/post/${idPost}/comment`;
        return api.get(url);
    },

    createComment: (idPost:string, parentId: null | string, content: Partial<comment>) => {
        const currentDate = new Date();
        const updateDate = new Date(currentDate.getTime() - 3 * 60 * 60 * 1000);
        const createdAt = updateDate.toISOString();
        const url = `/post/${idPost}/comment`;
        const comment = { ...content, createdAt: createdAt, parentId: parentId };
        console.log('Creating comment:', comment, ' - ', content);
        return api.post(url, comment);
    },

    updateComment: (idPost: string, idComment: string, comment: Partial<comment>) => {
        const url = `/post/${idPost}/comment/${idComment}`;
        return api.put(url, comment);
    },

    deleteComment: (idPost: string, idComment: string) => {
        const url = `/post/${idPost}/comment/${idComment}`;
        return api.delete(url);
    },

}