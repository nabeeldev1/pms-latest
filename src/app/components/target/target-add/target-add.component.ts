import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-target-add',
  templateUrl: './target-add.component.html',
  styleUrls: ['./target-add.component.css']
})
export class TargetAddComponent implements OnInit {

  constructor(public _location:Location) { }

  ngOnInit() {
  }

  onSubmit() {

  }

  cancel() {
    this._location.back();
  }

}
