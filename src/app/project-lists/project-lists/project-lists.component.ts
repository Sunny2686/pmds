import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-project-lists',
  templateUrl: './project-lists.component.html',
  styleUrls: ['./project-lists.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListsComponent implements OnInit {
  public projectData!: any[];
  public colorCode!: Observable<any>;
  constructor(
    private dataService: DataService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.projectData = this.dataService.users;
    this.colorCode = this.activeRoute.queryParamMap
      .pipe(
        map((params) => {
          return params.get('colorCode');
        })
      );
  }

}
