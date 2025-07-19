import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, PostPage } from "../pages";

export const MartianRouter = () => {
  return (
    <Routes>
        <Route path='/martian-fudo/home' element={<HomePage />} />
        <Route path='/martian-fudo/post/:id' element={<PostPage />} />
        
        <Route path='/*' element={<Navigate to='/martian-fudo/home'/>} />
    </Routes>
  )
}
