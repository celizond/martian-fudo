import { Route, Routes } from 'react-router-dom';
import { PrivateRouter } from './PrivateRouter';
import { LoginPage } from '../pages/LoginPage';
import { PublicRouter } from './PublicRouter';
import { MartianRouter } from './MartianRouter';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={
          <PublicRouter>
            <LoginPage />
          </PublicRouter>}
        />
        <Route path='/*' element={
          <PrivateRouter>
            <MartianRouter />
          </PrivateRouter>}
        />
      </Routes>
    </>
  )
}
