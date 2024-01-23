import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorsInterface } from "../shared/types/backenErrors.interface";
import { NgForOf, NgIf } from "@angular/common";

@Component({
    selector: 'mc-backend-error-massages',
    standalone: true,
    templateUrl: '/src/app/backendErrorMassages/backendErrorMassages.component.html',
    imports: [NgIf, NgForOf]
})
export class BackendErrorMassagesComponent implements OnInit {
    @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;
    
    errorMassages: string[]

    ngOnInit(): void {
        this.errorMassages = Object.keys(this.backendErrorsProps).map((name: string) => {
            const massages = this.backendErrorsProps[name].join(', ')

            return `${name} ${massages}`
        })
    }
}