import { ImageBox } from '../../../components/ImageBox';
import { useForm } from '../../../hooks/useForm';
import './AddPost.scss';

export const AddPost = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        post: ''
    })
    const { post } = formState;

    const onSubmitPost = async (event: any) => {
        event.preventDefault();
        if (post.length < 1) return;

        console.log('envio de info de post a back: ', post.trim());
        //Obtener del context el usuario que manda+
        onResetForm();

    }

    return (
        <div className='add-post'>
            <ImageBox
                src='https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg'
                alt='profile-user-photo' />
            <form
                onSubmit={onSubmitPost}
                className='post-form' >
                <input
                    type='text'
                    name='post'
                    className='input-post'
                    placeholder='¿Qué querés compartir con los Martianos?'
                    value={post}
                    onChange={onInputChange} >
                </input>
                <button type='submit'>
                    Postear
                </button>
            </form>
        </div>
    )
}
