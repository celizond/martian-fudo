import { useLocation, useNavigate } from 'react-router-dom';
import { MartianLayout } from '../../layouts/MartianLayout';
import { Button, ImageBox } from '../../components';


export const PostPage = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { createdAt , name, avatar} = state?.post;

    const onNavigateBack = () => navigate(-1);

    return (
        <MartianLayout>
            <Button text='&#x25c0; Go back' onClick={onNavigateBack} /> 
            <hr />
            {createdAt}
            <ImageBox src={'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg'} alt={name} />
            {name}
        </MartianLayout>
    )
}
