import { Component, OnInit } from '@angular/core';
import { TravelapiService } from '../services/travelapi.service';

@Component({
  selector: 'app-placelist',
  templateUrl: './placelist.component.html',
  styleUrls: ['./placelist.component.css']
})
export class PlacelistComponent implements OnInit {

  placeLists:any
  filterString:any=''
  constructor(private placeApi:TravelapiService) { }

  ngOnInit(): void {
    this.placeApi.allPlaceList()
    .subscribe((data)=>{
    console.log(data);
    this.placeLists = data
    })
    this.placeApi.search.subscribe((data)=>{
      this.filterString = data
      console.log( this.filterString);
      
    })

  }

}
