import { useState } from 'react';
import { Button, ImageBox, Modal } from '../../../../components';
import type { comment } from '../../types/commentTypes';
import { AddComment } from '../addComment/AddComment';
import { ViewMoreComments } from '../viewMoreComments/ViewMoreComments';
import './DetailComment.scss';

export const DetailComment = ({ name, avatar, content }: comment) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className='detail-comment'>
      <article className='detail-article'>
        <header>
          <ImageBox src={avatar} alt={`user-${name}`} height={27} width={27} />
          <h3 className='shorten-content'>{name}</h3>
        </header>
        <div>
          <p> {content} </p>
          <Button type='submit' text='Comentar' onClick={() => setIsOpenModal(true)} />
        </div>
      </article>

      <footer className='comment-actions'>
        <ViewMoreComments />
      </footer>

      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <h4>Responde el comentario de {name}</h4>
        <AddComment anotherFn={() => setIsOpenModal(false)} />
      </Modal>

    </div>
  )
}
