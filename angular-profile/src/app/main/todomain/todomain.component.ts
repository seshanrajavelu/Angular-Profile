import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ITask } from '../model/task';

@Component({
  selector: 'app-todomain',
  templateUrl: './todomain.component.html',
  styleUrls: ['./todomain.component.scss']
})
export class TodomainComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }

  tasks: ITask[] = [];
  inprogress: ITask[] = [];
  completed: ITask[] = [];
  updateID!: any;
  isEdit: boolean = false;

  taskform = new FormGroup({ addtask: new FormControl("") });
  back(){
    history.back()
  }
  addtask() {
    this.tasks.push({
      description: this.taskform.value.addtask,
      done: false,
    });
    this.taskform.reset();
  }

  update() {
    if (this.updateID !== undefined && this.taskform.value.addtask !== null) {
      this.tasks[this.updateID].description = this.taskform.value.addtask;
      this.taskform.reset();
      this.isEdit = false;
    }
  }

  edit(data: ITask, i: number) {
    this.taskform.controls['addtask'].setValue(data.description);
    this.updateID = i;
    this.isEdit = true;
  }

  remove(i: number) {
    this.tasks.splice(i, 1);
  }

  removeprogress(i: number) {
    this.inprogress.splice(i, 1);
  }

  removedone(i: number) {
    this.completed.splice(i, 1);
  }

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
