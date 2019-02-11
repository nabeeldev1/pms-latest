import { Component, OnInit } from '@angular/core';
import { ProjectsModel } from '../../models/projects.model';
import { ProjectService } from '../../services/project.service';

const ELEMENT_DATA: ProjectsModel[] = [
  { id: 1, business_office_id: 1, business: 'Sample', client: 'Shane', client_id: 2, name: 'ABC', number: 111, 
    cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Online', run_level_name: '1',
    created_at: new Date(), created_by: 'James', deleted_at: new Date(), end_date: new Date(), 
    estimated_delivery_date: new Date()
  },
  { id: 2, business_office_id: 1, business: 'Sample', client: 'Shane', client_id: 2, name: 'ABC', number: 111, 
    cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Online', run_level_name: '1',
    created_at: new Date(), created_by: 'James', deleted_at: new Date(), end_date: new Date(), 
    estimated_delivery_date: new Date()
  },
  { id: 3, business_office_id: 1, business: 'Sample', client: 'Shane', client_id: 2, name: 'ABC', number: 111, 
    cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Online', run_level_name: '1',
    created_at: new Date(), created_by: 'James', deleted_at: new Date(), end_date: new Date(), 
    estimated_delivery_date: new Date()
  },
  { id: 4, business_office_id: 1, business: 'Sample', client: 'Shane', client_id: 2, name: 'ABC', number: 111, 
    cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Online', run_level_name: '1',
    created_at: new Date(), created_by: 'James', deleted_at: new Date(), end_date: new Date(), 
    estimated_delivery_date: new Date()
  },
  { id: 5, business_office_id: 1, business: 'Sample', client: 'Shane', client_id: 2, name: 'ABC', number: 111, 
    cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Online', run_level_name: '1',
    created_at: new Date(), created_by: 'James', deleted_at: new Date(), end_date: new Date(), 
    estimated_delivery_date: new Date()
  },
  { id: 6, business_office_id: 1, business: 'Sample', client: 'Shane', client_id: 2, name: 'ABC', number: 111, 
    cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Online', run_level_name: '1',
    created_at: new Date(), created_by: 'James', deleted_at: new Date(), end_date: new Date(), 
    estimated_delivery_date: new Date()
  }
];

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'business', 'client', 'cost', 'payment_mode', 'start_date', 'estimated_delivery_date'];
  dataSource = ELEMENT_DATA;

  opened = false;

  constructor(projectService: ProjectService) { 
    // let data = projectService.getJSON();
    // console.log('Data: ', data);
  }

  ngOnInit() {
  }

}
