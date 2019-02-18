import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';

import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { materialModule } from './material-module';
import { 
  AppComponent, 
  LayoutComponent, 
  ProjectComponent, 
  ProjectAddComponent, 
  TargetComponent, 
  TargetAddComponent 
} from './components/index';
import { ProjectService } from './services/project.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectAddComponent,
    LayoutComponent,
    TargetComponent,
    TargetAddComponent,
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
