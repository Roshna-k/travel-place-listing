import { Component, OnInit } from '@angular/core';
import { TravelapiService } from '../services/travelapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService:TravelapiService) { }

  ngOnInit(): void {
  }
  search(event:any){
    let searchTerm=event.target.value
    // console.log(searchTerm);
    this.apiService.search.next(searchTerm)
  }
}
