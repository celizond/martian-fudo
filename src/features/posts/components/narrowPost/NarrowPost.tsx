import type { post } from '../../types/postTypes';
import { ActionPostButtons } from '../actionPostButtons/ActionPostButtons';
import './NarrowPost.scss';

export const NarrowPost = (post: post) => {
    const { name, title, content } = post;

    return (
        <article className='narrow-post'>
            <header>
                <span className='name'> {name} </span>
                <span> &#128198; {post.createdAt.substring(0, 10)}</span>
                
            </header>
            <hr />
            <span className='title shorten-content'> {title} </span>
            <p className='shorten-content'> {content} </p>
            <ActionPostButtons post={post} threeButtons={true}/>
        </article>
    )
}
