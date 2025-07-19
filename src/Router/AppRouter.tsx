import { Route, Routes } from 'react-router-dom';
import { MartianRouter, PrivateRouter, PublicRouter } from './index';
import { LoginPage } from '../pages';

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
