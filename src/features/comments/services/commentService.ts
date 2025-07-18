import { api } from "../../../services/api";
import type { comment } from "../types/commentTypes";

export const commentService = {

    getComment: (idComment: string) => {
        const url = `/post/2/comment/${idComment}`;
        return api.get(url);;
    },

    getComments: () => {
        const url = '/post/4/comment';
        return api.get(url);
    },

    createComment: (commentData: comment) => {
        const url = `/post/2/comment`;
        return api.post(url, commentData);
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