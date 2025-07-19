import { useState } from 'react';
import { Button, ImageBox, Modal } from '../../../../components';
import type { comment } from '../../types/commentTypes';
import { AddComment } from '../addComment/AddComment';
import { ViewMoreComments } from '../viewMoreComments/ViewMoreComments';
import './DetailComment.scss';
import { ActionCommentButtons } from '../actionCommentButtons/ActionCommentButtons';

export const DetailComment = (comment: comment) => {
  const { id, name, avatar, content } = comment;
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className='detail-comment'>
      <article className='detail-article'>
        <header>
          <ImageBox src={avatar} alt={`user-${name}`} height={27} width={27} />
          <h3 className='shorten-content'>{name}</h3>
        </header>
        <div className='comment-content'>
          <p> {content} </p>
          <ActionCommentButtons comment={comment} />
          <Button type='submit' text='Comentar' onClick={() => setIsOpenModal(true)} />
        </div>
      </article>

      <footer className='comment-actions'>
        <ViewMoreComments id={id} />
      </footer>

      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <h4>Responde el comentario de {name}</h4>
        <AddComment nested={id} /* anotherFn={() => setIsOpenModal(false)} */ />
      </Modal>

    </div>
  )
}
