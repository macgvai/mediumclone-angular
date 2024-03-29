import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class PresistanceServices {
    set(key: string, data: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(data))
        } catch (e) {
            console.error('Error saving to lockalStorsge', e)
        }
    }

    get(key: string): any {
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch (e) {
            console.error('Error getting data from lockalStorsge', e)
            return null;
        }
    }
}