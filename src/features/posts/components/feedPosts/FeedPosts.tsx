
import { ErrorMessage, Spinner } from '../../../../components';
import { NarrowPost } from '../index';
import { useGetPosts } from '../../hooks/useGetPosts';
import type { post } from '../../types/postTypes';

export const FeedPosts = () => {

    const { data, isLoading, error } = useGetPosts();
    
    return (
        <section>
            { isLoading && <Spinner /> }
            { error && <ErrorMessage /> }
            { !isLoading && !error && data?.data?.map((post: post) => (
                <NarrowPost key={post.id} {...post} />
            ))}
        </section>
    )
}
