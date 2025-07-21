import { useNavigate } from 'react-router-dom';
import './GoBack.scss';

export const GoBack = () => {

    const navigate = useNavigate();
    const onNavigateBack = () => navigate(-1);

    return (
        <div className='go-back'>
            <a target="_self" rel="noopener noreferrer" onClick={onNavigateBack}>
                &#x25c0; Volver atrás
            </a>
        </div>
    )
}
