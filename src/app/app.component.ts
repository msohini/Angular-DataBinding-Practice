import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ name: 'TestServer', type: 'server', content: 'Just a Test server!' }];
  onServerAdded(serverdata: { servername: string, severcontent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverdata.servername,
      content: serverdata.severcontent
    });
  }

  onBlueprintAdded(Blueprintdata: { Blueprintname: string, Blueprintcontent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: Blueprintdata.Blueprintname,
      content: Blueprintdata.Blueprintcontent
    });
  }
  
  
}
