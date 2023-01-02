import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelapiService } from '../services/travelapi.service';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {

  list:any
  constructor(private api:TravelapiService,private router:Router) { }

  ngOnInit(): void {
    this.api.bookNow()
  .subscribe((data)=>{
    console.log(data);
    this.list = data
    })
    
    
  }
  booking()
    {
      alert("Booking SuccessFull")
      
      
    }
    
}
