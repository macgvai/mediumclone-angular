import { Action, createReducer, on } from "@ngrx/store";
import { RegisterStateInterface } from "../register/registerState.interface";
import { registerAction } from "./actions/register.action";

export const initialState: RegisterStateInterface = {
    isSubmitting: false
}

const registerReducer = createReducer(initialState, on(registerAction, (state): RegisterStateInterface => ({
    ...state,
    isSubmitting: true
})))

export function reducers(state: RegisterStateInterface, action: Action) {
    console.log(state)
    return registerReducer(state, action);
}