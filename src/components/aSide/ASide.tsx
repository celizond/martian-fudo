import { useLocation, useNavigate } from 'react-router-dom';
import './ASide.scss';
import { useContext } from 'react';
import { AuthContext } from '../../features/auth/context';

export const ASide = () => {

  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const currentPath = location.pathname;

  const onGoHome = () => {
    navigate('/home')
  }

  return (
    <aside>
      <ul>
        {/*  <li onClick={onGoHome}>&#128100; MIS POSTS</li> */}
        <li className={currentPath === '/home' ? 'active' : ''} onClick={onGoHome}>&#127968; Feed</li>
        <li onClick={logout}>&#128162; Salir</li>
      </ul>
    </aside>
  )
}
