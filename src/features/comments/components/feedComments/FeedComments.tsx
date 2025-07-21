import { ErrorMessage, Spinner } from '../../../../components';
import { DetailComment } from '../index';
import type { comment, FeedCommentsProps } from '../../types';

export const FeedComments = ({ mainComments, isLoadingComments, errorComments}: FeedCommentsProps) => {

    return (
        <section>
            {isLoadingComments && <Spinner />}
            {errorComments && <ErrorMessage type={'comments'}/>}
            {!isLoadingComments && !errorComments && mainComments?.map((comment: comment) => (
                <DetailComment key={comment.id} {...comment} />
            )) }
        </section>
    )
}
