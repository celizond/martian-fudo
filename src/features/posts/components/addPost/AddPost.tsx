import { useContext } from 'react';
import { AuthContext } from '../../../auth/context';
import { useForm } from '../../../../hooks/useForm';
import { useGeneratePost } from '../../hooks/useGeneratePost';
import { Button, ErrorMessage, ImageBox, Spinner, TextArea } from '../../../../components';
import type { eventType } from '../../../../types/generic.types';
import './AddPost.scss';

export const AddPost = () => {

    const { formState, onInputChange, onResetForm } = useForm({ title: '', content: '' });
    const { title, content } = formState;
    const { user } = useContext(AuthContext);
    const { name, avatar } = user;

    const { createLoading, createError, onCreate } = useGeneratePost({ title, content, name, avatar });

    const onSubmitPost = async (event: eventType) => {
        event.preventDefault();
        await onCreate();
        onResetForm();
    }

    return (
        <>
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

                    <Button type='submit' text='Postear' disabled={(title.length < 1 && content.length < 1)} onClick={onSubmitPost} />
                </form>
            </div>
            {createLoading && <Spinner />}
            {createError && <ErrorMessage type='generic' />}
        </>
    )
}
