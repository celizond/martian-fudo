import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, PostPage } from '../pages';

export const MartianRouter = () => {
  return (
    <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/post/:id' element={<PostPage />} />
        
        <Route path='/*' element={<Navigate to='/home'/>} />
    </Routes>
  )
}
