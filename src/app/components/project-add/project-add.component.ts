import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectsModel } from '../../models/projects.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  opened = true;
  model: ProjectsModel = new ProjectsModel();
  constructor(public toastr: ToastrService, public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.model && this.model.name) {
      this.showSuccess();
      this.router.navigate(['/']);

    } else {
      this.showError();
    }
  }

  showSuccess() {
    this.toastr.success('Success!', 'New Projected Added.');
  }

  showError() {
    this.toastr.error('Failed!','Project name is missing.')
  }
}
