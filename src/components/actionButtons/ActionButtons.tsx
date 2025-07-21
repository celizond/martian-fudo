import { useContext, useEffect } from 'react';
import { AuthContext } from '../../features/auth/context';
import { useForm, useModalActions } from '../../hooks';
import { Button, Modal, Spinner, TextArea } from '../index';
import type { ActionButtonsProps } from '../../types/commonComponents.types';
import './ActionButtons.scss';

export const ActionButtons = ({ text, data, elementsEdits, useActions }: ActionButtonsProps) => {
    const { user } = useContext(AuthContext);
    const { formState, onInputChange } = useForm(elementsEdits);
    const {
        deleteLoading, updateLoading, deleteError, updateError, deleteSuccess, updateSuccess,
        onDelete, onUpdate,
    } = useActions(data, formState);
    const {
        modalMessage, isOpenModal, isUpdating,
        handlerQuitModal, handlerUpdate, handlerSubmitAction, handlerSuccessModal, handlerErrorModal,
    } = useModalActions();

    useEffect(() => {
        (deleteSuccess || updateSuccess) && handlerSuccessModal();
    }, [deleteSuccess, updateSuccess]);

    useEffect(() => {
        (deleteError || updateError) && handlerErrorModal();
    }, [deleteError, updateError]);

    return (
        <div className='action-buttons'>

            <div className='action-btns'>
                {(deleteLoading || updateLoading) && <Spinner />}
                {user.name === data.name &&
                    <div className='two-buttons'>
                        <Button style='btn-delete' text='Eliminar' onClick={onDelete} />
                        <Button style='btn-update' text='Editar' onClick={handlerUpdate} />
                    </div>
                }
            </div>

            <Modal isOpen={isOpenModal} onClose={handlerQuitModal}>
                <div className='modal-content'>
                    {modalMessage ?
                        <div className='modal-message'>{modalMessage}</div> :
                        isUpdating &&
                        <form
                            onSubmit={e => handlerSubmitAction(e, () => onUpdate())}
                            className='update-form' >
                            <h4>Edita tu {text}</h4>
                            {
                                Object.entries(elementsEdits).map(([key]) => (
                                    <TextArea key={`ta-${key}`} name={key} value={formState[key]} onChange={onInputChange} />
                                ))
                            }
                            <Button text='Enviar' onClick={e => handlerSubmitAction(e, () => onUpdate())} />
                        </form>
                    }
                </div>
            </Modal>
        </div>
    )
}
