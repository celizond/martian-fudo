import { useNavigate } from "react-router-dom";
import './NarrowPost.scss';
import { Button } from "../../../../components";
import type { post } from "../../types/postTypes";
export const NarrowPost = (post: post) => {

    const navigate = useNavigate();
    const onViewMore = () => {
        navigate(`/post/${post.id}`, {state: {post}})
    }

    return (
        <div className='narrow-container'>
            {post.name} <br />
            {post.title} <br />
            <Button text='Continuar leyendo' onClick={onViewMore} />
        </div>
    )
}
