import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoveltyService } from 'src/app/services/novelty.service';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.scss']
})
export class AppointmentDetailComponent implements OnInit {

  @Input() record: any;
  @Output() close = new EventEmitter<any>();

  title: string = 'List of Novelties';
  header: any = {'actions': 'Actions', 'description': 'Description' }

  actions: Action[] = []

  novelties: any[] = [];
  novelty: any;

  loading: boolean = true;

  constructor(private _service: NoveltyService) { }

  ngOnInit() { 
    this.actions = [
      { icon: 'edit', tooltip: 'Edit Novelty', action: (record) => this.show(record) }]

      this.fetchNovelties();
  }

  fetchNovelties = () => this._service.fetchNoveltiesById(this.record.id).then((res:any) => {
    this.novelties = res;
    this.loading = false
  })

  show = (record=null) => this.novelty = (record) ? record : { description: '', appointment: this.record.id}
  hide = () => { this.loading = true; this.novelty = null; this.fetchNovelties(); }

  action = () => (this.novelty.id) ? this._service.editNovelty(this.novelty.id, this.novelty).then(() => this.hide()) : this._service.addNovelty(this.novelty).then(() => this.hide());

}

export interface Action {
  icon: string;
  tooltip: string;
  action: Function;
}
