import type { post } from '../../features/posts';
import { Button } from '../button/Button';
import { useActionsPost } from '../../features/posts/hooks/useActionsPost';
import './ActionButtons.scss';
import { Modal } from '../modal/Modal';
import { Spinner } from '../spinner/Spinner';
import { useContext } from 'react';
import { AuthContext } from '../../features/auth/context';

export const ActionButtons = (post: post) => {

    const { user } = useContext(AuthContext);
    const { modalMessage, loadingDelete, isOpenModal, setIsOpenModal, onDelete, onUpdate, onViewMore } = useActionsPost(post);

    return (
        <div className="my-action-buttons">
            {loadingDelete && <Spinner />}
            {user.name === post.name &&
                <>
                    <button onClick={onDelete}>
                        Eliminar
                    </button>
                    <button onClick={onUpdate}>
                        Actualizar
                    </button>
                </>
            }
            <Button text='Seguir leyendo' onClick={onViewMore} />

            <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
                {modalMessage}
            </Modal>
        </div>
    )
}
