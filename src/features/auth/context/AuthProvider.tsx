import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import type { reactChildrenProps } from "../../../types/generic.types";

const init = () => {
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;
    return { logged: !!user, user };
}

export const AuthProvider = ({ children }: reactChildrenProps) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name:string, avatar: string) => {
        const user = { name: name.trim(), avatar: avatar };
        const action = {
            type: '[Auth] Login',
            payload: user,
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user')
        const action = {
            type: '[Auth] Logout',
            payload: {
                name: null,
            }
        }
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{...authState, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
