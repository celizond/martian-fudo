import { useContext, useEffect } from 'react';
import { Button, Modal, Spinner, SpinnerBtn, TextArea } from '../../../../components/index';
import { AuthContext } from '../../../auth/context';
import { useForm } from '../../../../hooks/useForm';
import { useModalActions } from '../../../../hooks/useModalActions';
import { useActionsComment } from '../../hooks/useActionsComment';
import type { ActionCommentButtonsProps } from '../../types/commentTypes';
import './ActionCommentButtons.scss';

export const ActionCommentButtons = ({ comment }: ActionCommentButtonsProps) => {

    const { user } = useContext(AuthContext);
    const {
        formState,
        onInputChange,
    } = useForm({ content: comment.content });
    const {
        deleteLoading, updateLoading, deleteError, updateError, deleteSuccess, updateSuccess,
        onDelete, onUpdate,
    } = useActionsComment(comment, formState);
    const {
        modalMessage, isOpenModal, isUpdating,
        handlerQuitModal, handlerUpdate, handlerSubmitAction, handlerSuccessModal, handlerErrorModal,
    } = useModalActions();

    useEffect(() => {
        if (deleteSuccess || updateSuccess) {
            handlerSuccessModal();
        }
    }, [deleteSuccess, updateSuccess]);

    useEffect(() => {
        if (deleteError || updateError) {
            handlerErrorModal();
        }
    }, [deleteError, updateError]);

    return (
        <div className="action-comment-buttons">

            <div className="action-buttons">
                {deleteLoading && <Spinner />}
                {user.name === comment.name &&
                    <>
                        <Button style='btn-delete' text='Eliminar' onClick={onDelete} />
                        <Button style='btn-update' text='Editar' onClick={handlerUpdate} />
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
                                <h4>Edita tu comentario</h4>
                                <TextArea name='content' value={formState.content} onChange={onInputChange} />

                                <Button text='Enviar' onClick={e => handlerSubmitAction(e, () => onUpdate())} />
                            </form>
                    }
                </div>
            </Modal>
        </div>
    )
}
