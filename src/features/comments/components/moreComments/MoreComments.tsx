import { useGetNestedComments } from '../../hooks/useGetNestedComments';
import type { comment } from '../../types/commentTypes';
import { ErrorMessage, Spinner } from '../../../../components';
import { DetailComment } from '../detailComment/DetailComment';
import './MoreComments.scss';

export const MoreComments = ({ id }: any) => {

    const { isLoading, error, data } = useGetNestedComments('1', id)

    return (
        <section className='nested-sub-comments'>
            {isLoading && <Spinner />}
            {error && <ErrorMessage />}
            {!isLoading && !error && data?.map((comment: comment) => (
                <DetailComment key={comment.id} {...comment} />
            ))}
        </section>
    )
}


