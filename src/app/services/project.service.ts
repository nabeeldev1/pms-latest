import { Injectable } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: Http) {
  }

  getProjects() {
    const ELEMENT_DATA = [
      { id: 1, business_office_id: 1, business: 'Import', client: 'Shane', client_id: 2, name: 'Import Links', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Credit Card', run_level_name: '1',
        created_at: new Date(), created_by: 'James', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 2, business_office_id: 1, business: 'Export', client: 'Watson', client_id: 2, name: 'Exportify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Stripe', run_level_name: '1',
        created_at: new Date(), created_by: 'Nick', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 3, business_office_id: 1, business: 'IT Solutions', client: 'William', client_id: 2, name: 'Nextbridge', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Paypal', run_level_name: '1',
        created_at: new Date(), created_by: 'John Wayne', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 4, business_office_id: 1, business: 'Travel Agency', client: 'Mark', client_id: 2, name: 'Fly Now', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cheque', run_level_name: '1',
        created_at: new Date(), created_by: 'Robert', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 5, business_office_id: 1, business: 'Recruiting Agency', client: 'Ricky', client_id: 2, name: 'Hire Me', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Credit Card', run_level_name: '1',
        created_at: new Date(), created_by: 'Tom ', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 6, business_office_id: 1, business: 'Distant Education', client: 'Shane', client_id: 2, name: 'Distify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cash', run_level_name: '1',
        created_at: new Date(), created_by: 'Martin', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 7, business_office_id: 1, business: 'Distant Education', client: 'Shane', client_id: 2, name: 'Distify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cash', run_level_name: '1',
        created_at: new Date(), created_by: 'Martin', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 8, business_office_id: 1, business: 'Distant Education', client: 'Shane', client_id: 2, name: 'Distify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cash', run_level_name: '1',
        created_at: new Date(), created_by: 'Martin', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 9, business_office_id: 1, business: 'Distant Education', client: 'Shane', client_id: 2, name: 'Distify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cash', run_level_name: '1',
        created_at: new Date(), created_by: 'Martin', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 10, business_office_id: 1, business: 'Distant Education', client: 'Shane', client_id: 2, name: 'Distify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cash', run_level_name: '1',
        created_at: new Date(), created_by: 'Martin', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 11, business_office_id: 1, business: 'Distant Education', client: 'Shane', client_id: 2, name: 'Distify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cash', run_level_name: '1',
        created_at: new Date(), created_by: 'Martin', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 12, business_office_id: 1, business: 'Distant Education', client: 'Shane', client_id: 2, name: 'Distify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cash', run_level_name: '1',
        created_at: new Date(), created_by: 'Martin', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 13, business_office_id: 1, business: 'Distant Education', client: 'Shane', client_id: 2, name: 'Distify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cash', run_level_name: '1',
        created_at: new Date(), created_by: 'Martin', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 14, business_office_id: 1, business: 'Distant Education', client: 'Shane', client_id: 2, name: 'Distify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cash', run_level_name: '1',
        created_at: new Date(), created_by: 'Martin', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 15, business_office_id: 1, business: 'Distant Education', client: 'Shane', client_id: 2, name: 'Distify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cash', run_level_name: '1',
        created_at: new Date(), created_by: 'Martin', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 16, business_office_id: 1, business: 'Distant Education', client: 'Shane', client_id: 2, name: 'Distify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cash', run_level_name: '1',
        created_at: new Date(), created_by: 'Martin', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 17, business_office_id: 1, business: 'Distant Education', client: 'Shane', client_id: 2, name: 'Distify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cash', run_level_name: '1',
        created_at: new Date(), created_by: 'Martin', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 18, business_office_id: 1, business: 'Distant Education', client: 'Shane', client_id: 2, name: 'Distify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cash', run_level_name: '1',
        created_at: new Date(), created_by: 'Martin', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 19, business_office_id: 1, business: 'Distant Education', client: 'Shane', client_id: 2, name: 'Distify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cash', run_level_name: '1',
        created_at: new Date(), created_by: 'Martin', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      },
      { id: 20, business_office_id: 1, business: 'Distant Education', client: 'Shane', client_id: 2, name: 'Distify', number: 111, 
        cost: 2350, start_date: new Date(), updated_at: new Date(), payment_mode: 'Cash', run_level_name: '1',
        created_at: new Date(), created_by: 'Martin', deleted_at: new Date(), end_date: new Date(), 
        estimated_delivery_date: new Date(), attachment_date: new Date()
      }
    ];

    return ELEMENT_DATA;

  }
}
