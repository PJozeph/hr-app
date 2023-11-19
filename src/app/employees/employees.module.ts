import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { IonicModule } from '@ionic/angular';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
    declarations: [EmployeeListComponent, EmployeeCreateComponent],
    imports: [CommonModule, EmployeesRoutingModule, IonicModule, ReactiveFormsModule],
})
export class EmployeesModule {}
