import type { post } from '../../types/postTypes';
import { ActionButtons } from '../../../../components/actionButtons/ActionButtons';
import './NarrowPost.scss';

export const NarrowPost = (post: post) => {
    const { name, title, content } = post;
    
    return (
        <article className='narrow-post'>
            <span className='name'> {name} </span> 
            <hr />
            <span className='title shorten-content'> {title} </span>
            <p className='shorten-content'> {content} </p>
            <ActionButtons {...post} />
        </article>
    )
}
