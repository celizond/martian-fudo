import { useContext } from 'react';
import { Button, Modal, Spinner, TextArea } from '../../../../components/index';
import { AuthContext } from '../../../auth/context';
import { SpinnerBtn } from '../../../../components/spinnerBtn/SpinnerBtn';
import { useForm } from '../../../../hooks/useForm';
import { useActionsPost } from '../../hooks/useActionsPost';
import type { post } from '../../types/postTypes';
import './ActionPostButtons.scss';

export type ActionPostButtonsProps = {
    post: post;
    threeButtons?: boolean;
}

export const ActionPostButtons = ({post, threeButtons = false}: ActionPostButtonsProps) => {

    const { user } = useContext(AuthContext);
    const { formState, onInputChange } = useForm({ title: post.title, content: post.content });
    const { modalMessage, loadingDelete, loadingUpdate, isOpenModal, isEditing,
        handlerQuitModal, handlerViewMore, handlerUpdate, handlerSubmitUpdate, onDelete } = useActionsPost(post);

    return (
        <div className="action-post-buttons">

            <div className="action-buttons">
                {loadingDelete && <Spinner />}
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
                        loadingUpdate ?
                            <SpinnerBtn /> :
                            isEditing &&
                            <form
                                onSubmit={e => handlerSubmitUpdate(e, formState)}
                                className='update-form' >
                                <TextArea name='title' value={formState.title} onChange={onInputChange} />
                                <TextArea name='content' value={formState.content} onChange={onInputChange} />

                                <Button text='Postear' onClick={e => handlerSubmitUpdate(e, formState)} />
                            </form>
                    }
                </div>
            </Modal>
        </div>
    )
}
