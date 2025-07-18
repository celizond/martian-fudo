import { useLocation } from 'react-router-dom';
import { MartianLayout } from '../../layouts/MartianLayout';
import { DetailPost } from '../../features/posts/components';
import { AddComment } from '../../features/comments/components/addComment/AddComment';
import { FeedComments } from '../../features/comments/components/feedComments/FeedComments';
import { GoBack } from '../../components/goBack/GoBack';
import './PostPage.scss'
import type { post } from '../../features/posts';

export const PostPage = () => {

    const { state } = useLocation();
    const post: post = state?.post;

    return (
        <MartianLayout>
            <>
                <GoBack />
                <DetailPost {...post} />
                <AddComment />
                <h2>Comentarios</h2>
                <FeedComments postId={post.id}/>
            </>
        </MartianLayout>
    )
}
