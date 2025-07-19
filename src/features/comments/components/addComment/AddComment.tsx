import { Button } from '../../../../components';
import { ImageBox } from '../../../../components/imageBox/ImageBox';
import { TextArea } from '../../../../components/textArea/TextArea';
import { useForm } from '../../../../hooks/useForm';
import './AddComment.scss';

export const AddComment = ({idPost, anotherFn}: any) => {

    const { formState, onInputChange, onResetForm } = useForm({
        comment: ''
    })
    const { comment } = formState;

    const onSubmitComment = async (event: any) => {
        event.preventDefault();
        if (comment.length < 1) return;
        console.log('envio de info de comment a back: ',idPost, comment.trim());
        //Obtener del context el usuario que manda+
        onResetForm();
        anotherFn && anotherFn()
    }

    return (
        <div className='add-comment'>
            <ImageBox
                src='https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg'
                alt='profile-user-photo' />
            <form
                onSubmit={onSubmitComment}
                className='comment-form' >
                <TextArea
                    name="comment"
                    placeholder={`Comenta tu respuesta`}
                    value={comment}
                    onChange={onInputChange} />

                <Button type='submit' text='Enviar' onClick={onSubmitComment} />
            </form>
        </div>
    )
}
