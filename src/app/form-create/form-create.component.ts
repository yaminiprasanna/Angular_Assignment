import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';

import { NewCategoryDialogComponent } from '../new-category-dialog/new-category-dialog.component';
import { TaskService } from '../shared/task.service';
import { Router } from '@angular/router';
import { STATUS } from '../shared/task';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  statuses: string[] = [STATUS.completed, STATUS.notCompleted];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private taskService: TaskService,
    private location: Location) {}

  ngOnInit() {
   
  }

  onSubmit(value) {
    this.taskService.storeTask(value);
    this.router.navigateByUrl('/tasks');
  }

  


}
