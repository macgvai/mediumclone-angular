import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "../shared/types/appState.interface";
import { RegisterStateInterface } from "../register/registerState.interface";

export const RegisterFeatureSelector = (state: AppStateInterface): RegisterStateInterface => state.register

export const isSubmitingSelector = createSelector(
    RegisterFeatureSelector, 
    (registerState: RegisterStateInterface) => registerState.isSubmitting
)
export const validationErrorsSelector = createSelector(
    RegisterFeatureSelector, 
    (registerState: RegisterStateInterface) => registerState.validationErrors
)


export const isLoggedInSelector = createSelector(
    RegisterFeatureSelector, 
    (registerState: RegisterStateInterface) => registerState.isLoggedIn
)

export const isAnonymousSelector = createSelector(
    RegisterFeatureSelector, 
    (registerState: RegisterStateInterface) => registerState.isLoggedIn === false
)

export const currentUserSelector = createSelector(
    RegisterFeatureSelector, 
    (registerState: RegisterStateInterface) => registerState.currentUser
)