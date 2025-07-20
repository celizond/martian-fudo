

import { useNavigate } from "react-router-dom";
import { Button, ImageBox } from "../../../../components";
import type { post } from "../../types/postTypes"
import { ActionPostButtons } from "../actionPostButtons/ActionPostButtons";
import './DetailPost.scss';

export const DetailPost = (post: post) => {
    const { avatar, name, createdAt, id, title, content } = post;
    const navigate = useNavigate();

    const handlerViewMore = () => {
        navigate(`/post/${post.id}`, { state: { post } })
    }
    return (
        <article className='detail-post'>
            <header>
                <ImageBox src={avatar} alt={`user-${name}`} />
                <span className='name'> {name} </span>
                <h1 className='title '> {title} </h1>

            </header>
            <p className='content'> {content} </p>
            <ActionPostButtons post={post} />
            <Button text='Seguir leyendo' onClick={handlerViewMore} />
            <footer>
                <div>
                    <strong>Post</strong> #{id}
                </div>
                <div>
                    <strong>Fecha de publicación</strong> {createdAt.substring(0, 10)}
                </div>
            </footer>
        </article>
    )
}
