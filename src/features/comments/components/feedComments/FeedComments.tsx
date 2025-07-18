import { DetailComment } from '../detailComment/DetailComment';
import { useGetComments } from '../../hooks/useGetComments';
import type { comment } from '../../types/commentTypes';
import { Spinner } from '../../../../components/spinner/Spinner';

export const FeedComments = () => {

    const { data, isLoading, error } = useGetComments();

    if (isLoading) {
        return <Spinner />;
    }
    
    if (error) {
        return <> Error </>;
    }

    return (
        <section>
            { data &&
                data?.data.map((comment: comment) => (
                    <DetailComment
                        key={comment.id}
                        {...comment} />
                ))
            }
        </section>
    )
}
