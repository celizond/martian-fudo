import { useContext } from 'react';
import { Button, Spinner } from '../../../../components';
import { ImageBox } from '../../../../components/imageBox/ImageBox';
import { TextArea } from '../../../../components/textArea/TextArea';
import { useForm } from '../../../../hooks/useForm';
import { AuthContext } from '../../../auth/context';
import './AddPost.scss';
import { useCreatePost } from '../../hooks/useCreatePost';
import { SpinnerBtn } from '../../../../components/spinnerBtn/SpinnerBtn';

export const AddPost = () => {

    const { formState, onInputChange, onResetForm } = useForm({ title: '', content: '' });
    const { title, content } = formState;
    const { user } = useContext(AuthContext);
    const { name, avatar } = user;
    const { loadingCreate, onPost } = useCreatePost({ title, content, name, avatar });

    const onSubmitPost = async (event: any) => {
        event.preventDefault();
        await onPost();
        onResetForm()
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
                    placeholder='Título de post'
                    value={title}
                    onChange={onInputChange} />
                <TextArea
                    name="content"
                    placeholder='¿Qué querés compartir con los Martianos?'
                    value={content}
                    onChange={onInputChange} />

                {loadingCreate && <SpinnerBtn />}

                <Button type='submit' text='Postear' disabled={(title.length < 1 && content.length < 1)} onClick={onSubmitPost} />
            </form>
        </div>
    )
}
