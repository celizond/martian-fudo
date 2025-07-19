import { ErrorMessage, Spinner } from '../../../../components';
import { DetailComment } from '../detailComment/DetailComment';
import type { comment } from '../../types/commentTypes';
import { useGetAllComments } from '../../services/queries/getAllComments';

export const FeedComments = ({ postId }: { postId: string }) => {

    const { mainComments, isLoading, error } = useGetAllComments(postId);

    return (
        <section>
            {isLoading && <Spinner />}
            {error && <ErrorMessage />}
            {!isLoading && !error && mainComments?.map((comment: comment) => (
                <DetailComment key={comment.id} {...comment} />
            )) }
        </section>
    )
}
