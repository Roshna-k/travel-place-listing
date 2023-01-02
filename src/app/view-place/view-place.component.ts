import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelapiService } from '../services/travelapi.service';

@Component({
  selector: 'app-view-place',
  templateUrl: './view-place.component.html',
  styleUrls: ['./view-place.component.css']
})
export class ViewPlaceComponent implements OnInit {
  travelId:any
  travelBody:any
  constructor(private activatedRoute:ActivatedRoute,private travelService:TravelapiService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
    this.travelId =data['id']
    console.log(this.travelId );

    })
    this.travelService.viewPlace(this.travelId)
    .subscribe((result)=>{
this.travelBody=result
console.log(this.travelBody);
      
    })
  }

}
