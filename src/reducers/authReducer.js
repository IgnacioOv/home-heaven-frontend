import { LOGIN_SUCCESS, LOGOUT } from '../actions/authActions';

const initialState = {
    token: localStorage.getItem('accesToken') || null,
    isAuthenticated: !!localStorage.getItem('accesToken'),
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('accessToken', action.payload);
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true
            };
        case LOGOUT:
            localStorage.removeItem('accessToken');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default authReducer;
