import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../features/auth/context/AuthContext';
import type { reactChildrenProps } from '../types/generic.types';

export const PrivateRouter = ({ children }: reactChildrenProps) => {
  const { logged } = useContext(AuthContext);
  return (logged ? children : <Navigate to='/login' />)
}
