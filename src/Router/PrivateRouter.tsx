import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../features/auth/context/AuthContext";

export const PrivateRouter = ({ children }:any) => {
  const { logged } = useContext(AuthContext);
  return (logged ? children : <Navigate to='martian-fudo/login' />)
}
