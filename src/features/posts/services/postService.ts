import { api } from "../../../services/api";
import type { post } from "../types/postTypes";

export const postService = {

    getPost: (idPost: string) => {
        const url = `/post/${idPost}`;
        return api.get(url);;
    },

    getPosts: async () => {
        const url = '/post';
        return api.get(url);
    },

    createPost: (content: Partial<post>) => {
        const url = `/post`;
        const post = { ...content }
        return api.post(url, post);
    },

    updatePosts: (idPost: string) => {
        const url = `/post/${idPost}`;
        return api.put(url);
    },

    deletePosts: (idPost: string) => {
        const url = `/post/${idPost}`;
        return api.delete(url);
    },

}