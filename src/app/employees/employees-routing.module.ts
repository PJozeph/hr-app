import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeListComponent,
    },
    {
        path: 'create',
        component: EmployeeCreateComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmployeesRoutingModule {}
