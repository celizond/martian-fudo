import { useNavigate } from 'react-router-dom';
import './ASide.scss';
import { useContext } from 'react';
import { AuthContext } from '../../features/auth/context';

export const ASide = () => {

  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const onGoHome = () => {
    window.location.reload()
    navigate('/home')
  }

  return (
    <aside>
      <ul>
        {/*  <li onClick={onGoHome}>&#128100; MIS POSTS</li> */}
        <li onClick={onGoHome}>&#127968; FEED</li>
        <li onClick={logout}>&#128162; SALIR</li>
      </ul>
    </aside>
  )
}
