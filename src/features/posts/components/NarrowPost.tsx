import { useNavigate } from "react-router-dom";
import type { post } from "../../../types/postTypes"

export const NarrowPost = (post: post) => {

    const navigate = useNavigate();
    const viewMore = () => {
        navigate(`/post/${post.id}`, {state: {post}})
    }

    return (
        <div>
            {post.name}
            <hr />
            {post.title}
            <button onClick={viewMore}>Ver más</button>
        </div>
    )
}
