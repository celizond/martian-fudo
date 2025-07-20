import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components';
import type { post } from '../../types/postTypes';
import { ActionPostButtons } from '../actionPostButtons/ActionPostButtons';
import './NarrowPost.scss';

export const NarrowPost = (post: post) => {
    const { name, title, content } = post;
    const navigate = useNavigate();

    const handlerViewMore = () => {
        navigate(`/post/${post.id}`, { state: { post } })
    }
    return (
        <article className='narrow-post'>
            <header>
                <span className='name'> {name} </span>
                <span> &#128198; {post.createdAt.substring(0, 10)}</span>

            </header>
            <hr />
            <span className='title shorten-content'> {title} </span>
            <p className='shorten-content'> {content} </p>
            <ActionPostButtons post={post} />
            <Button text='Seguir leyendo' onClick={handlerViewMore} />
        </article>
    )
}
