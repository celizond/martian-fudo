import { useEffect, useState } from 'react'
import { api } from '../../../../services/api';
import type { comment } from '../../types/commentTypes';
import { DetailComment } from '../detailComment/DetailComment';

export const FeedComments = () => {
    const [first, setfirst] = useState<any>()

    const checkData = async () => {
        try {
            const response = await api.get('/post/1/comment');
            setfirst(response.data)
            console.log('Res ', response)
        } catch (error) {
            return;
        }
    };
    useEffect(() => {
        checkData()
    }, [])


    return (
        <section>
            {first !== undefined &&
                first.map((comment: comment) => (
                    <DetailComment
                        key={comment.id}
                        {...comment} />
                ))
            }
        </section>
    )
}
