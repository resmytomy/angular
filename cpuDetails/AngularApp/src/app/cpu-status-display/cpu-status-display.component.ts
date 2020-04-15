import { Component, OnInit } from '@angular/core';
import { cpuContent } from './cpuContents';
import {cpuDataService} from './cpuDataService';

@Component({
  selector: 'app-cpu-status-display',
  templateUrl: './cpu-status-display.component.html',
  styleUrls: ['./cpu-status-display.component.scss']
})
export class CpuStatusDisplayComponent implements OnInit {

  constructor(private cpuDataService: cpuDataService) {}
  contents;
  i:number=0;
cpuContentList :cpuContent[]=[]; 
 
  loading: boolean = false;
  errorMessage
  ngOnInit(): void {
    console.log("Start")
    this.getcpuDetails();
    console.log('this.getfile') 
   }
  public getcpuDetails() {
    console.log('inside this')
    this.errorMessage = "";
    this.cpuDataService.getCpuDetails()
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received'+response)
        
          console.log(response);
          this.formatContent(response);
          this.contents=[{content:response}]
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        )
  }

  public formatContent(responses){

    for (let key in responses) {
      const  content:cpuContent={name :key,
        value:responses[key]}
        this.cpuContentList.push(content);
  }
  
}
}
