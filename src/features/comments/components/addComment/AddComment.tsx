import { useContext } from 'react';
import { AuthContext } from '../../../auth/context';
import { useForm } from '../../../../hooks/useForm';
import { useGenerateComment } from '../../hooks/useGenerateComment';
import { Button, ErrorMessage, ImageBox, Spinner, TextArea } from '../../../../components';
import type { eventType } from '../../../../types/generic.types';
import type { AddCommentProps } from '../../types';
import './AddComment.scss';

export const AddComment = ({ nested = null, anotherFn }: AddCommentProps) => {

    const { formState, onInputChange, onResetForm } = useForm({ content: '' })
    const { content } = formState;
    const { user } = useContext(AuthContext);
    const { name, avatar } = user;
    const { createLoading, createError, onCreate } = useGenerateComment(nested, { content, name, avatar });

    const onSubmitComment = async (event: eventType) => {
        event.preventDefault();
        await onCreate();
        anotherFn && anotherFn();
        onResetForm();
    }

    return (
        <>
            <div className='add-comment'>
                <ImageBox
                    src={avatar}
                    alt='profile-user-photo' />
                <form
                    onSubmit={onSubmitComment}
                    className='comment-form' >
                    <TextArea
                        name='content'
                        placeholder='Comenta tu respuesta'
                        value={content}
                        onChange={onInputChange} />

                    <Button type='submit' text='Enviar' disabled={content.length < 1} onClick={onSubmitComment} />
                </form>
            </div>
            {createLoading && <Spinner />}
            {(!createLoading && createError) && <ErrorMessage type='generic' />}

        </>
    )
}
