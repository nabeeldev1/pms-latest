import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsModel } from '../../models/projects.model';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';

import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: any;
  opened: boolean = true;
  displayedColumns: string[] = ['id', 'name', 'business', 'client', 'cost', 'payment_mode', 'start_date', 'estimated_delivery_date', 'actions'];


  constructor(public projectService: ProjectService, public _router: Router) {
    this.dataSource = new MatTableDataSource(this.projectService.getProjects());
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editProject(record) {
    this._router.navigate(['/project/edit/' + record.id]);
  }

  removeProject(record) {
    let filteredArray = this.dataSource.data.filter((item) => {
      return item.id !== record.id;
    });
    this.dataSource.data = filteredArray;
  }

}
