import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { ProjectComponent } from './components/project/project.component';
import { HttpClientModule } from '@angular/common/http';
import { materialModule } from './material-module';
import { ProjectService } from './services/project.service';
import { ProjectAddComponent } from './components/project-add/project-add.component';
import { LayoutComponent } from './components/layout/layout.component';

const appRoutes: Routes = [
  { path: '', component: ProjectComponent },
  { path: 'add-project', component: ProjectAddComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectAddComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    materialModule,
    HttpModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
