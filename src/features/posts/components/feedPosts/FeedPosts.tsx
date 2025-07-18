import { NarrowPost } from "../index";
import { useGetPosts } from "../../hooks/useGetPosts";
import type { post } from "../../types/postTypes";

export const FeedPosts = () => {

    const { data, isLoading, error } = useGetPosts();

    return (
        <section>
            {isLoading === false &&

                data?.data.map((post: post) => (
                    <NarrowPost
                        key={post.id}
                        {...post} />
                ))
            }
        </section>
    )
}
