import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
    selector: 'app-employee-create',
    templateUrl: './employee-create.component.html',
    styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent implements OnInit {
    public createEmployeeFormGroup = this.formBuilder.group({
        fullName: [''],
        position: [''],
        employeeStatus: [''],
        department: [''],
        gender: [''],
        dateOfBirth: [''],
        startDateOfEmployee: [''],
        phoneNumber: [''],
        email: [''],
        remainingAnnualLeave: new FormControl<number | null>(null),
    });

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {}

    public handleEmployeeStatusChange(event: any): void {
        this.createEmployeeFormGroup.patchValue({ employeeStatus: event.detail.value });
    }

    public handleGenderChange(event: any): void {
        this.createEmployeeFormGroup.patchValue({ gender: event.detail.value });
    }

    public handleDepartmentChange(event: any): void {
        this.createEmployeeFormGroup.patchValue({ department: event.detail.value });
    }

    public handleDateOfBirthChange(event: any): void {
        const formattedDate = moment(event.detail.value).format('yyyy-MM-DD');
        this.createEmployeeFormGroup.patchValue({ dateOfBirth: formattedDate });
    }

    public handleStartDateChange(event: any): void {
        const formattedDate = moment(event.detail.value).format('yyyy-MM-DD');
        this.createEmployeeFormGroup.patchValue({ startDateOfEmployee: formattedDate });
    }

    public onSaveClick(): void {
        console.log(this.createEmployeeFormGroup.value);
    }
}
