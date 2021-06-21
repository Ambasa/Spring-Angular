import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Ambasa", "Aklilu", "meambas@gmail.com", 10000),
    new SalesPerson("John", "Doe", "john@gmail.com", 30000)
  ];



  constructor() { }

  ngOnInit(): void {  
  }

}
