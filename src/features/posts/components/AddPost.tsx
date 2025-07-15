import { useForm } from '../../../hooks/useForm';
import './AddPost.scss';

export const AddPost = () => {

    const { onInputChange } = useForm({
        post: ''
    })

    const onSubmitPost = async (event: any) => {
        event.preventDefault();
        console.log('mandó')
    }

    return (
        <div className='add-post'>
            <div>
                foto
            </div>
            <div>
                <form onSubmit={onSubmitPost}>
                    <input
                        type='text'
                        name='input-post'
                        className='input-post'
                        placeholder='¿Qué querés compartir con los Martianos?'
                        value={'value input'}
                        onChange={onInputChange}
                    >
                    </input>
                    <button type='submit'>
                        Postear
                    </button>
                </form>
            </div>

        </div>
    )
}
