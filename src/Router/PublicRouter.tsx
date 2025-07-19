import { Navigate } from 'react-router-dom';
import { AuthContext } from '../features/auth/context/AuthContext';
import { useContext } from 'react';
import type { reactChildrenProps } from '../types/generic.types';

export const PublicRouter = ({ children }: reactChildrenProps) => {
    const { logged } = useContext(AuthContext);
    return (!logged ? children : <Navigate to='/' />);
}
