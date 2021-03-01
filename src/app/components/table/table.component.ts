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

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
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

  isDate = (data) => { if(String(data).includes('T') && String(data).includes('-') && String(data).includes('Z')) return true; else return false; }
  isMail = (data) => { if(String(data).includes('@')) return true; else return false; }

}
