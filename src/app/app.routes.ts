import { Routes } from '@angular/router';
import { LayoutComponent, ProjectAddComponent, ProjectComponent, TargetComponent, TargetAddComponent } from './components/index';

export const appRoutes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'project/add', component: ProjectAddComponent },
            { path: 'project/edit/:id', component: ProjectAddComponent },
            { path: 'projects', component: ProjectComponent },
            { path: 'targets', component: TargetComponent },
            { path: 'target-add', component: TargetAddComponent },
            { path: 'target/edit/:id', component: TargetAddComponent },
            { path: '', redirectTo: 'projects', pathMatch: 'full' }
        ]
    }
];