import { useLocation, useNavigate } from 'react-router-dom';
import { MartianLayout } from '../../layouts/MartianLayout';
import { Button } from '../../components';
import { DetailPost } from '../../features/posts/components';
import { AddComment } from '../../features/comments/components/addComment/AddComment';
import { FeedComments } from '../../features/comments/components/feedComments/FeedComments';
import './PostPage.scss'

export const PostPage = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const post = state?.post;

    const onNavigateBack = () => navigate(-1);

    return (
        <MartianLayout>
            <>
                <Button text='&#x25c0; Go back' onClick={onNavigateBack} />
                <DetailPost {...post} />
                <AddComment />
                <h2>Comentarios</h2>
                <FeedComments />
            </>
        </MartianLayout>
    )
}
