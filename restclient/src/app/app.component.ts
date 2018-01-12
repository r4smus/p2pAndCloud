import { Component } from '@angular/core';
import { AzureRestService } from './azure-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather forcast';
  result;

  constructor( 
    private azureRestService: AzureRestService,
   ){}

   send():void {
     this.result = this.azureRestService.getSummary();
   }



}
