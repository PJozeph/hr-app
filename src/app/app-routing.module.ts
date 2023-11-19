import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabComponent } from './components/tab/tab.component';

const routes: Routes = [
    {
        path: '',
        component: TabComponent,
        children: [
            {
                path: 'employees',
                loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
