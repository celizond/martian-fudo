import { useContext } from 'react';
import { AuthContext } from '../../features/auth/context';
import { ImageBox } from '../index';
import logo from '../../assets/martian-logo.svg';
import './NavBar.scss';

export const NavBar = () => {

    const { user } = useContext(AuthContext)

    return (
        <nav className='navbar'>
            <div className='application'>
                <ImageBox
                    src={logo}
                    alt='application-photo' />
            </div>
            <div className='profile'>
                <span className='user'>
                    {user.name}
                </span>
                <ImageBox
                    src={user.avatar}
                    alt='profile-user-photo' />
            </div>
        </nav>
    )
}
