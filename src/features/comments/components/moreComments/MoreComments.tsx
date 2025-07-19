
import type { comment, MoreCommentsProps } from '../../types/commentTypes';
import { ErrorMessage, Spinner } from '../../../../components';
import { DetailComment } from '../detailComment/DetailComment';
import { useGetAllComments } from '../../services/queries/getAllComments';
import { useLocation } from 'react-router-dom';
import type { post } from '../../../posts';
import './MoreComments.scss';

export const MoreComments = ({ id }: MoreCommentsProps) => {

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


