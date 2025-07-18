import { useContext } from 'react';
import { Button } from '../../../../components';
import { ImageBox } from '../../../../components/imageBox/ImageBox';
import { TextArea } from '../../../../components/textArea/TextArea';
import { useForm } from '../../../../hooks/useForm';
import { postService } from '../../services/postService';
import { AuthContext } from '../../../auth/context';
import './AddPost.scss';

export const AddPost = () => {

    const { formState, onInputChange, onResetForm } = useForm({ title: '', content: '' });
    const { title, content } = formState;
    const { user } = useContext(AuthContext);
    const { name, avatar } = user;

    const onSubmitPost = async (event: any) => {
        event.preventDefault();
        if (title.length < 1 || content.length < 1) return;
        postService.createPost({ ...formState, name, avatar });
        onResetForm();
    }

    return (
        <div className='add-post'>
            <ImageBox
                src={avatar}
                alt='profile-user-photo' />
            <form
                onSubmit={onSubmitPost}
                className='post-form' >
                <TextArea
                    name="title"
                    className='textarea-title'
                    placeholder='Título de post'
                    value={title}
                    onChange={onInputChange} />
                <TextArea
                    name="content"
                    className='textarea-content'
                    placeholder='¿Qué querés compartir con los Martianos?'
                    value={content}
                    onChange={onInputChange} />

                <Button type='submit' text='postear' onClick={onSubmitPost} />
            </form>
        </div>
    )
}
