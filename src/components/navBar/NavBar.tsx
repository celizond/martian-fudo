import { ImageBox } from '../index'
import './NavBar.scss'

export const NavBar = () => {

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    return (
        <nav className='navbar'>
            <div className='application'>
                <img 
                className='photo'
                alt='application-photo'
                src='https://upload.wikimedia.org/wikipedia/commons/d/de/Color-Green.JPG'/>
                <input type='text' className='' placeholder='Buscar' />
            </div>
            <div className='profile'>
                <span className='user'>
                    {user?.name}
                </span>
                <ImageBox 
                src={user?.avatar}
                alt='profile-user-photo' />
                
            </div>
        </nav>
    )
}
