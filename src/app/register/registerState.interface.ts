import { BackendErrorsInterface } from "../shared/types/backenErrors.interface";
import { CurrentUserInterface } from "../shared/types/currentUser.interface";

export interface RegisterStateInterface {
    isSubmitting: boolean,
    currentUser: CurrentUserInterface | null,
    isLoggedIn: boolean | null,
    validationErrors: BackendErrorsInterface | null
}