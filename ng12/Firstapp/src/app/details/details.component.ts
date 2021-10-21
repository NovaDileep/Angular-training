import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user:any=[];
  

  constructor(private http:HttpClient, public service:ServiceService, private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("Details");
    this.http.get("https://jsonplaceholder.typicode.com/users/"+this.service.id)
    .subscribe((data)=>this.user=data);
  }
 
     
  

}
