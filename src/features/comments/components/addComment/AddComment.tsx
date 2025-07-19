import { useContext } from 'react';
import { Button, ImageBox, SpinnerBtn, TextArea } from '../../../../components';
import { useForm } from '../../../../hooks/useForm';
import { AuthContext } from '../../../auth/context';
import { useGenerateComment } from '../../hooks/useGenerateComment';
import type { eventType } from '../../../../types/generic.types';
import type { AddCommentProps } from '../../types/commentTypes';
import './AddComment.scss';

export const AddComment = ({nested = null}: AddCommentProps) => {

    const { formState, onInputChange, onResetForm } = useForm({ content: '' })
    const { content } = formState;
    const { user } = useContext(AuthContext);
    const { name, avatar } = user;
    const { createLoading, onCreate } = useGenerateComment(nested, { content, name, avatar });

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
