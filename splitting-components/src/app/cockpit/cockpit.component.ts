import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // pass data to parent component
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  serverElements = [];
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    //log the local reference of the html input element
    console.log(nameInput.value);

    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent}
      );
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    //log the local reference of the html input element
    console.log(nameInput.value);

    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent}
      );
  }

}
