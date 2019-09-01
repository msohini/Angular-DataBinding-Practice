import { Component, OnInit, EventEmitter ,Output, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() ServerCreated = new EventEmitter<{ servername: string, severcontent: string }>();
  @Output() BlueprintCreated = new EventEmitter<{ Blueprintname: string, Blueprintcontent: string }>();
  @ViewChild('servercontentinput', { static: false }) serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameInput:HTMLInputElement) {
    console.log(nameInput.value);
    this.ServerCreated.emit({ servername: nameInput.value, severcontent: this.serverContentInput.nativeElement.value });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.BlueprintCreated.emit({ Blueprintname: nameInput.value, Blueprintcontent: this.serverContentInput.nativeElement.value  });
  }
}
