import { useContext, useEffect } from 'react';
import { Button, Modal, Spinner, SpinnerBtn, TextArea } from '../../../../components/index';
import { AuthContext } from '../../../auth/context';
import { useForm } from '../../../../hooks/useForm';
import { useActionsPost } from '../../hooks/useActionsPost';
import type { post } from '../../types/postTypes';
import './ActionPostButtons.scss';
import { useModalActions } from '../../../../hooks/useModalActions';

export type ActionPostButtonsProps = {
    post: post;
}

export const ActionPostButtons = ({ post}: ActionPostButtonsProps) => {

    const { user } = useContext(AuthContext);
    const {
        formState,
        onInputChange,
    } = useForm({ title: post.title, content: post.content });
    const {
        deleteLoading, updateLoading, deleteError, updateError, deleteSuccess, updateSuccess,
        onDelete, onUpdate,
    } = useActionsPost(post, formState);
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
        <div className="action-post-buttons">

            <div className="action-buttons">
                {deleteLoading && <Spinner />}
                {user.name === post.name &&
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
                                <h4>Edita tu post</h4>
                                <TextArea name='title' value={formState.title} onChange={onInputChange} />
                                <TextArea name='content' value={formState.content} onChange={onInputChange} />

                                <Button text='Postear' onClick={e => handlerSubmitAction(e, () => onUpdate())} />
                            </form>
                    }
                </div>
            </Modal>
        </div>
    )
}
