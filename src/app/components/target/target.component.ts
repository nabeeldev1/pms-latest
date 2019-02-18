import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {

  targets: {}[] = [
    { id: 1, title: "Target 1", status: 'active', start_date: Date, end_date: Date },
    { id: 2, title: "Target 2", status: 'active', start_date: Date, end_date: Date },
    { id: 3, title: "Target 3", status: 'active', start_date: Date, end_date: Date },
    { id: 4, title: "Target 4", status: 'active', start_date: Date, end_date: Date }
  ];

  constructor(public _router: Router) {
  }

  ngOnInit() {
  }

  editTarget(record) {
    console.log(record);
    this._router.navigate(['/target/edit/' + record.id]);
  }

  removeTarget(position) {
    console.log(position);
    this.targets.splice(position, 1);
  }

}
