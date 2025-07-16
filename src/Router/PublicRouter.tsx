import { Navigate } from 'react-router-dom';
import { AuthContext } from '../features/auth/context/AuthContext';
import { useContext } from 'react';

export const PublicRouter = ({children}:any) => {

    const { logged } = useContext(AuthContext)
    console.log(logged)
    return (!logged ? children : <Navigate to='/' />)
}
