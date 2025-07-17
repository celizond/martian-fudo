import { useState } from 'react';
import { Spinner } from '../../../../components/spinner/Spinner';
import './ViewMoreComments.scss';
import { FeedComments } from '../feedComments/FeedComments';

export const ViewMoreComments = () => {

    const [isOpenCommentaries, setIsOpenCommentaries] = useState(false);
    //llamo al customhook para ver si está cargando y eso

    return (
        <div className='view-more-comments'>
            <a target='_self' rel='noopener noreferrer' onClick={() => setIsOpenCommentaries(!isOpenCommentaries)}>
                Ver más comentarios
            </a>
            <div className='nested-comment'>
                {
                    isOpenCommentaries &&
                        false ?
                        <Spinner />
                        :
                        <FeedComments />
                }
            </div>

        </div>
    )
}
