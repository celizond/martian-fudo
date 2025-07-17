import { useNavigate } from "react-router-dom";
import type { post } from "../../types/postTypes"
import './DetailPost.scss';
import { Button } from "../../../../components";
export const DetailPost = (post: post) => {

    const navigate = useNavigate();
    const onViewMore = () => {
        navigate(`/post/${post.id}`, {state: {post}})
    }

    return (
        <div className='detail-container'>
            {post.name} <br />
            {post.title} <br />
            <Button text='Continuar leyendo' onClick={onViewMore} />       
        </div>
    )
}
