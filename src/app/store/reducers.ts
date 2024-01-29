import { Action, createReducer, on } from "@ngrx/store";
import { RegisterStateInterface } from "../register/registerState.interface";
import { registerAction, registerFailureAction, registerSuccessAction } from "./actions/register.action";
import { loginAction, loginFailureAction, loginSuccessAction } from "./actions/login.action";

export const initialState: RegisterStateInterface = {
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null
}

const registerReducer = createReducer(
    initialState, 
    on(
        registerAction, 
        (state): RegisterStateInterface => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })
    ),
    on(
        registerSuccessAction, 
        (state, action): RegisterStateInterface => ({
            ...state,
            isSubmitting: false,
            currentUser: action.currentUser,
            isLoggedIn: true,
        })
    ),
    on(
        registerFailureAction, 
        (state, action): RegisterStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })
    ),

    on(
        loginAction, 
        (state): RegisterStateInterface => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })
    ),
    on(
        loginSuccessAction, 
        (state, action): RegisterStateInterface => ({
            ...state,
            isSubmitting: false,
            currentUser: action.currentUser,
            isLoggedIn: true,
        })
    ),
    on(
        loginFailureAction, 
        (state, action): RegisterStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })
    )
)

export function reducers(state: RegisterStateInterface, action: Action) {
    return registerReducer(state, action);
}