import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Router } from '@angular/router';
import { NewCategoryDialogComponent } from '../new-category-dialog/new-category-dialog.component';
import { Task, STATUS } from '../shared/task';
import { TaskService } from '../shared/task.service';
import { SnackBarHelperService } from '../shared/snackbar-helper.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  statuses: string[] = [STATUS.completed, STATUS.notCompleted];
  taskDetails: Task;
  taskId: number;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    this.taskId = Number(this.route.snapshot.paramMap.get('id'));
    this.taskDetails = this.taskService.getTaskById(this.taskId);
  }

  onSubmit(value) {
    this.taskService.updateTask(this.taskId, value);
    this.router.navigateByUrl('/tasks');
  }
}
