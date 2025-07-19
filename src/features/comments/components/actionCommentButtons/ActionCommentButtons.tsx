import { useContext } from 'react';
import { Button, Modal, Spinner, SpinnerBtn, TextArea } from '../../../../components/index';
import { AuthContext } from '../../../auth/context';
import { useForm } from '../../../../hooks/useForm';
import type { comment } from '../../types/commentTypes';
import './ActionCommentButtons.scss';
import { useModalActions } from '../../../../hooks/useModalActions';
import { useActionsComment } from '../../hooks/useActionsComment';

export type ActionCommentButtonsProps = {
    comment: comment;
    threeButtons?: boolean;
}

export const ActionCommentButtons = ({ comment }: ActionCommentButtonsProps) => {

    const { user } = useContext(AuthContext);
    const { 
        formState, 
        onInputChange, 
    } = useForm({ content: comment.content });
    const {
        deleteLoading, updateLoading,
        onDelete, onUpdate,
    } = useActionsComment(comment.id, formState);
    const {
        modalMessage, isOpenModal, isUpdating,
        handlerQuitModal, handlerUpdate, handlerSubmitAction,
    } = useModalActions();

    return (
        <div className="action-comment-buttons">

            <div className="action-buttons">
                {deleteLoading && <Spinner />}
                {user.name === comment.name &&
                    <>
                        <Button style='btn-delete' text='Eliminar' onClick={onDelete} />
                        <Button style='btn-update' text='Modificar' onClick={handlerUpdate} />
                    </>
                }
            </div>

            <Modal isOpen={isOpenModal} onClose={handlerQuitModal}>
                <div className='modal-content'>
                    {modalMessage ?
                        <div className='modal-message'>{modalMessage}</div> :
                        updateLoading ?
                            <SpinnerBtn /> :
                            isUpdating &&
                            <form
                                onSubmit={e => handlerSubmitAction(e, () => onUpdate())}
                                className='update-form' >
                                <TextArea name='title' value={formState.title} onChange={onInputChange} />
                                <TextArea name='content' value={formState.content} onChange={onInputChange} />

                                <Button text='Comentar' onClick={e => handlerSubmitAction(e, () => onUpdate())} />
                            </form>
                    }
                </div>
            </Modal>
        </div>
    )
}
