import { useLocation } from "react-router-dom";
import { MartianLayout } from "../layouts/MartianLayout"
import './HomePage.scss';

export const PostPage = () => {
    const { state } = useLocation();
    const post = state?.post;

    return (
        <MartianLayout>
            {post.content}
        </MartianLayout>
    )
}
