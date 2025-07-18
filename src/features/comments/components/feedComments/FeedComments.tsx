import { ErrorMessage, Spinner } from '../../../../components';
import { DetailComment } from '../detailComment/DetailComment';
import { useGetComments } from '../../hooks/useGetComments';
import type { comment } from '../../types/commentTypes';

export const FeedComments = ({ postId }: { postId: string }) => {

    const { data, isLoading, error } = useGetComments(postId);

    return (
        <section>
            {isLoading && <Spinner />}
            {error && <ErrorMessage />}
            {!isLoading && !error && data?.data?.map((comment: comment) => (
                <DetailComment key={comment.id} {...comment} />
            )) }
        </section>
    )
}
