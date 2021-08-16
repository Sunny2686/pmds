import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';

export interface UserData {
  serialNumber:number,
  projectName:string,
  cost:string,
}

@Component({
  selector: 'app-dashboard-table-widget',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['S.No.', 'Project Name', 'Cost', 'Action'];
  dataSource:  MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dataService:DataService) {
    const users = this.dataService.users;
    this.dataSource = new MatTableDataSource(users);
   }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}// END OF CLASS


