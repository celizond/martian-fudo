import { useEffect, useState } from 'react';
import { MoreComments } from '../moreComments/MoreComments';
import './ViewMoreComments.scss';

export const ViewMoreComments = ({ id, forceOpen = false }: any) => {
    const [isOpenCommentaries, setIsOpenCommentaries] = useState(forceOpen);

    const handlerOpenMore = () => {
        setIsOpenCommentaries(!isOpenCommentaries)
    }

    useEffect(() => {
        setIsOpenCommentaries(forceOpen);
    }, [forceOpen])
    
    return (
        <div className='view-more-comments'>
            <div className='view-more-text'>
                <a target='_self' rel='noopener noreferrer' onClick={handlerOpenMore}>
                    {!isOpenCommentaries ? 'Ver más comentarios' : 'Ocultar comentarios'}
                </a>
            </div>
            <div className='nested-comment'>
                { isOpenCommentaries && <MoreComments id={id} /> }
            </div>
        </div>
    )
}
