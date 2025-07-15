import { ImageBox } from './ImageBox'
import './NavBar.scss'

export const NavBar = () => {
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
                    Kassandra
                </span>
                <ImageBox 
                src='https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg'
                alt='profile-user-photo' />
                
            </div>
        </nav>
    )
}
