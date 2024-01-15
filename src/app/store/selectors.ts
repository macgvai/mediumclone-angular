import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "../shared/types/appState.interface";
import { RegisterStateInterface } from "../register/registerState.interface";

export const RegisterFeatureSelector = (state: AppStateInterface): RegisterStateInterface => state.register

export const isSubmitingSelector = createSelector(RegisterFeatureSelector, (registerState: RegisterStateInterface) => registerState.isSubmitting)
