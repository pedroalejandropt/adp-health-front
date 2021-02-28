import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input() title: string;
  @Input() header: any;
  @Input() records: any[];
  @Input() actions: any[];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  dataSource: any;
  objectKeys = Object.keys;

  filter: string = '';

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.records);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.filter.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  search = () => {
    const formField = <HTMLElement> document.getElementsByClassName('mat-form-field')[0];
    const border = <HTMLElement> document.getElementsByClassName('mat-form-field-underline')[0];
    border.style.height = '1px';
    formField['style']['width'] =  '200px';
    formField['style']['transition'] = 'all 0.3s ease-in-out 0s';
  }

  leave = async () => {
    const element = <HTMLElement> document.getElementsByClassName('mat-form-field')[0];
    const border = <HTMLElement> document.getElementsByClassName('mat-form-field-underline')[0];
    element['style']['width'] =  (this.filter) ? '200px' : '25px';
    element['style']['transition'] = 'all 0.3s ease-in-out 0s';
    setTimeout(() => border.style.height = (this.filter) ? '1px' : '0px', 300);
  }

  isDate = (data) => { if(!isNaN(Date.parse(data))) return true; else return false; }
  isMail = (data) => { if(data.includes('@')) return true; else return false; }

}

/* export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
} */

/* const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
]; */
