import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components';
import type { post } from '../../types/postTypes';
import './NarrowPost.scss';

export const NarrowPost = (post: post) => {
    const { id, name, title, content } = post;
    const navigate = useNavigate();

    const onViewMore = () => {
        navigate(`/post/${id}`, {state: {post}})
    }

    return (
        <div className='narrow-post'>
            <span className='name'> {name} </span>
            <hr />
            <span className='title shorten-content'> {title} </span>
            <p className='shorten-content'> {content} </p>
            <Button text='Continuar leyendo' onClick={onViewMore} />
        </div>
    )
}
