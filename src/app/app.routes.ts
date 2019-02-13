import { Routes } from '@angular/router';
import { LayoutComponent, ProjectAddComponent, ProjectComponent } from './components/index';

export const appRoutes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'add-project', component: ProjectAddComponent },
            { path: 'projects', component: ProjectComponent },
            { path: '', redirectTo: 'projects', pathMatch: 'full' }
        ]
    }
];