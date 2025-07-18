import { api } from "../../../services/api";
import type { post } from "../types/postTypes";

export const postService = {

    getPost: (idPost: string) => {
        const url = `/post/${idPost}`;
        return api.get(url);;
    },

    getPosts: async() => {
        
    await new Promise( resolve => setTimeout(resolve, 15500) );
        const url = '/post';
        return api.get(url);
    },

    createPost: (postData: post) => {
        const url = `/post`;
        return api.post(url, postData);
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