
import type { comment } from '../../types/commentTypes';
import { ErrorMessage, Spinner } from '../../../../components';
import { DetailComment } from '../detailComment/DetailComment';
import './MoreComments.scss';
import { useGetAllComments } from '../../services/queries/getAllComments';
import { useLocation } from 'react-router-dom';
import type { post } from '../../../posts';

export const MoreComments = ({ id }: any) => {

    const { state } = useLocation();
    const post: post = state?.post;
    const { nestedCommentsById, isLoading, error } = useGetAllComments(post.id);

    const commentsForComment = nestedCommentsById(id);

    return (
        <section className='nested-sub-comments'>
            {isLoading && <Spinner />}
            {error && <ErrorMessage />}
            {!isLoading && !error && commentsForComment?.map((comment: comment) => (
                <DetailComment key={comment.id} {...comment} />
            ))}
        </section>
    )
}


