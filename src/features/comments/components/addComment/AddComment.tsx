import { useContext } from 'react';
import { Button, ImageBox, SpinnerBtn, TextArea } from '../../../../components';
import { useForm } from '../../../../hooks/useForm';
import { AuthContext } from '../../../auth/context';
import { useGenerateComment } from '../../hooks/useGenerateComment';
import './AddComment.scss';
import type { eventType } from '../../../../types/commonComponents.types';

export const AddComment = () => {//aca va a ir parentId y anotherFn

    const { formState, onInputChange, onResetForm } = useForm({ content: '' })
    const { content } = formState;
    const { user } = useContext(AuthContext);
    const { name, avatar } = user;
    const { createLoading, onCreate } = useGenerateComment(null, { content, name, avatar });

    const onSubmitComment = async (event: eventType) => {
        event.preventDefault();
        await onCreate();
        onResetForm();
    }

    return (
        <div className='add-comment'>
            <ImageBox
                src={avatar}
                alt='profile-user-photo' />
            <form
                onSubmit={onSubmitComment}
                className='comment-form' >
                <TextArea
                    name='content'
                    placeholder={`Comenta tu respuesta`}
                    value={content}
                    onChange={onInputChange} />

                {createLoading && <SpinnerBtn />}

                <Button type='submit' text='Enviar' onClick={onSubmitComment} />
            </form>
        </div>
    )
}
