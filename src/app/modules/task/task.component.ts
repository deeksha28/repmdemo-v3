import { Component, OnInit, ViewChild } from '@angular/core';
import { Task, Representative } from '../../shared/components/interfaces/task';
import { TaskServiceService } from '../../shared/services/task-service.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: Task[];
  

  selectedTasks: Task[];

  representatives: Representative[];

  statuses: any[];

  loading: boolean = true;
  first = 0;

  @ViewChild('dt') table: Table;

  constructor(private taskServiceService: TaskServiceService) { }

  ngOnInit() {
      this.taskServiceService.getTasks().then(tasks => {
          this.tasks = tasks;
          this.loading = false;
      });

      this.representatives = [
          {name: "Amy Elsner" },
          {name: "Anna Fali"},
          {name: "Asiya Javayant"},
          {name: "Bernardo Dominic"},
          {name: "Elwin Sharvill"},
          {name: "Ioni Bowcher"},
          {name: "Ivan Magalhaes"},
          {name: "Onyama Limba"},
          {name: "Stephen Shaw"},
          {name: "XuXue Feng"}
      ];

      this.statuses = [
          {label: 'Unqualified', value: 'unqualified'},
          {label: 'Qualified', value: 'qualified'},
          {label: 'New', value: 'new'},
          {label: 'Negotiation', value: 'negotiation'},
          {label: 'Renewal', value: 'renewal'},
          {label: 'Proposal', value: 'proposal'}
      ]
  }

  onActivityChange(event) {
      const value = event.target.value;
      if (value && value.trim().length) {
          const activity = parseInt(value);

          if (!isNaN(activity)) {
              this.table.filter(activity, 'activity', 'gte');
          }
      }
  }

  onDateSelect(value) {
      this.table.filter(this.formatDate(value), 'date', 'equals')
  }

  formatDate(date) {
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (month < 10) {
          month = '0' + month;
      }

      if (day < 10) {
          day = '0' + day;
      }

      return date.getFullYear() + '-' + month + '-' + day;
  }

  onRepresentativeChange(event) {
      this.table.filter(event.value, 'representative', 'in')
  }

}


interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}
