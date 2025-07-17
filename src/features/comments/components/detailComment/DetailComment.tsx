import { useState } from 'react';
import { Button, ImageBox } from '../../../../components';
import type { comment } from '../../types/commentTypes';
import './DetailComment.scss';
import Modal from '../../../../components/modal/Modal';
import { AddComment } from '../addComment/AddComment';

export const DetailComment = ({ name, avatar, content }: comment) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <article className='detail-comment'>
      <header>
        <ImageBox src={avatar} alt={`user-${name}`} height={27} width={27} />
        <h3 className='shorten-content'>{name}</h3>
      </header>
      <p>
        {content}
        <Button type='submit' text='Comentar' onClick={() => setIsOpenModal(true)} />
      </p>

      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <h4>Responde el comentario de {name}</h4>
        <AddComment anotherFn={() => setIsOpenModal(false)} />
      </Modal>

    </article>
  )
}
