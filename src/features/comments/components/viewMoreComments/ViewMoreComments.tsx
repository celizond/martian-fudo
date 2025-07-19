import { useState } from 'react';
//import { MoreComments } from '../moreComments/MoreComments';
import './ViewMoreComments.scss';
import { MoreComments } from '../moreComments/MoreComments';

export const ViewMoreComments = ({id}:any) => {

    const [isOpenCommentaries, setIsOpenCommentaries] = useState(false);
    
    return (
        <div className='view-more-comments'>
            <a target='_self' rel='noopener noreferrer' onClick={() => setIsOpenCommentaries(!isOpenCommentaries)}>
                Ver más comentarios
            </a>
            <div className='nested-comment'>
                {
                    isOpenCommentaries &&
                    <MoreComments id={id}/>
                }
            </div>
        </div>
    )
}
