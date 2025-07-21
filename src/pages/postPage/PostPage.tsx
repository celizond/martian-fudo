import { MartianLayout } from '../../layouts/MartianLayout';
import { useLocation } from 'react-router-dom';
import { useGetOnePost } from '../../features/posts/services/queries/getOnePost';
import { useGetAllComments } from '../../features/comments/services/queries/getAllComments';
import { DetailPost, type post } from '../../features/posts';
import './PostPage.scss';
import { GoBack } from '../../components';
import { AddComment, FeedComments } from '../../features/comments/components';

export const PostPage = () => {
    const { state } = useLocation();
    const storedPost: post = state?.post;
    const { onePost } = useGetOnePost(storedPost)
    const {isLoading, error, mainComments} = useGetAllComments(storedPost.id);

    return (
        <MartianLayout>
            <>
                <GoBack />
                {<DetailPost {...onePost} />}
                <AddComment />
                <h2>Comentarios</h2>
                {<FeedComments
                    mainComments={mainComments}
                    isLoadingComments={isLoading}
                    errorComments={error}
                />}
            </>
        </MartianLayout>
    )
}