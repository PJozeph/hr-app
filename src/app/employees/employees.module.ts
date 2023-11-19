import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { IonicModule } from '@ionic/angular';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [EmployeeListComponent, EmployeeCreateComponent],
    imports: [CommonModule, EmployeesRoutingModule, IonicModule, ReactiveFormsModule],
})
export class EmployeesModule {}
