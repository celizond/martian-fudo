import { NarrowPost } from '../index';
import { ErrorMessage, Spinner } from '../../../../components';
import { useGetPosts } from '../../hooks/useGetPosts';
import type { post } from '../../types/postTypes';

export const FeedPosts = () => {

    const { data, isLoading, error } = useGetPosts();

    return (
        <section className='feed-posts'>
            {
                isLoading ?
                    <Spinner /> :
                    error ?
                        <ErrorMessage /> :
                        data?.data.map((post: post) => (
                            <NarrowPost key={post.id} {...post} />
                        ))
            }
        </section>
    )
}
