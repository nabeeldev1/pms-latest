import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './components/app/app.component';
import { ProjectComponent } from './components/project/project.component';
import { HttpClientModule } from '@angular/common/http';
import { materialModule } from './material-module';
import { ProjectService } from './services/project.service';
import { ProjectAddComponent } from './components/project-add/project-add.component';
import { LayoutComponent } from './components/layout/layout.component';

const appRoutes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'add-project', component: ProjectAddComponent },
      { path: 'projects', component: ProjectComponent },
      { path: '', redirectTo: 'projects', pathMatch: 'full'}      
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectAddComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    materialModule,
    HttpModule,
    ToastrModule.forRoot()
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
