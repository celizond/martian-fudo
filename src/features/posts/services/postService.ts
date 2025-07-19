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
        const currentDate = new Date();
        const updateDate = new Date(currentDate.getTime() - 3 * 60 * 60 * 1000);
        const createdAt = updateDate.toISOString();
        const url = `/post`;
        const post = { ...content, createdAt: createdAt };
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