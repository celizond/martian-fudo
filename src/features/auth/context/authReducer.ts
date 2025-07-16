
export const authReducer = (state = {}, action: { type: string; payload: any; }) => {

    switch (action.type) {
        case '[Auth] Login':
            return {
                ...state,
                logged: true,
                user: action.payload
            }
        case '[Auth] Logout':
            return {
                logged: false,
                user: null
            }
        default:
            return state;
    }
}