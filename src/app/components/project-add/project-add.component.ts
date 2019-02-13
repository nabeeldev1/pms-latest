import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectsModel } from '../../models/projects.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  opened = true;
  selectedManagers: {}[] = [];
  model: ProjectsModel = new ProjectsModel();
  constructor(public toastr: ToastrService, public router: Router) { }

  ngOnInit() {
    if (!this.model.id) {
      this.model.attachment_date = new Date();
      this.attachMore();
    }
  }

  onSubmit() {
    if (this.model && this.model.name) {
      this.showSuccess();
      this.router.navigate(['/']);

    } else {
      this.showError();
    }
  }

  attachMore() {
    this.selectedManagers.push({
      id: '',
      name: '',
      date: new Date()
    });
  }

  removeAttachment(position) {
    this.selectedManagers.splice(position, 1)
  }

  showSuccess() {
    this.toastr.success('Success!', 'New Projected Added.');
  }

  showError() {
    this.toastr.error('Failed!', 'Project name is missing.')
  }
}
