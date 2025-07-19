import { useContext } from 'react';
import { Button, Modal, Spinner, SpinnerBtn, TextArea } from '../../../../components/index';
import { AuthContext } from '../../../auth/context';
import { useForm } from '../../../../hooks/useForm';
import { useActionsPost } from '../../hooks/useActionsPost';
import type { post } from '../../types/postTypes';
import './ActionPostButtons.scss';
import { useModalActions } from '../../../../hooks/useModalActions';

export type ActionPostButtonsProps = {
    post: post;
    threeButtons?: boolean;
}

export const ActionPostButtons = ({ post, threeButtons = false }: ActionPostButtonsProps) => {

    const { user } = useContext(AuthContext);
    const { 
        formState, 
        onInputChange, 
    } = useForm({ title: post.title, content: post.content });
    const {
        deleteLoading,
        updateLoading,
        handlerViewMore, onDelete, onUpdate,
    } = useActionsPost(post, formState);
    const {
        modalMessage, isOpenModal, isUpdating,
        handlerQuitModal, handlerUpdate, handlerSubmitAction,
    } = useModalActions();

    return (
        <div className="action-post-buttons">

            <div className="action-buttons">
                {deleteLoading && <Spinner />}
                {user.name === post.name &&
                    <>
                        <Button style='btn-delete' text='Eliminar' onClick={onDelete} />
                        <Button style='btn-update' text='Modificar' onClick={handlerUpdate} />
                    </>
                }
            </div>
            {threeButtons && <Button text='Seguir leyendo' onClick={handlerViewMore} />}

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

                                <Button text='Postear' onClick={e => handlerSubmitAction(e, () => onUpdate())} />
                            </form>
                    }
                </div>
            </Modal>
        </div>
    )
}
