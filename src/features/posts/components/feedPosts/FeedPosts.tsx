
import { ErrorMessage, Spinner } from '../../../../components';
import { NarrowPost } from '../index';
import type { post } from '../../types/postTypes';
import { useGetAllPosts } from '../../services/queries/getAllPosts';

export const FeedPosts = () => {

    const { data, isLoading, error } = useGetAllPosts();
    
    return (
        <section>
            { isLoading && <Spinner /> }
            { error && <ErrorMessage /> }
            { !isLoading && !error && data?.map((post: post) => (
                <NarrowPost key={post.id} {...post} />
            ))}
        </section>
    )
}
