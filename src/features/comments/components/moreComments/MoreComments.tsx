
import { ErrorMessage, Spinner } from '../../../../components';
import { DetailComment } from '../detailComment/DetailComment';
import { useGetAllComments } from '../../services/queries/getAllComments';
import { useLocation } from 'react-router-dom';
import type { post } from '../../../posts';
import './MoreComments.scss';
import type { comment, MoreCommentsProps } from '../../types';

export const MoreComments = ({ id }: MoreCommentsProps) => {

    const { state } = useLocation();
    const post: post = state?.post;
    const { nestedCommentsById, isLoading, error } = useGetAllComments(post.id);

    const commentsForComment = nestedCommentsById(id);

    return (
        <section className='nested-sub-comments'>
            {isLoading && <Spinner />}
            {(error || ( !isLoading && commentsForComment.length === 0) ) && <ErrorMessage type='comments' />}
            {!isLoading && !error && commentsForComment?.map((comment: comment) => (
                <DetailComment key={comment.id} {...comment} />
            ))}
        </section>
    )
}


