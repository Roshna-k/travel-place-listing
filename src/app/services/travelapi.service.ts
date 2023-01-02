import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TravelapiService {
  search=new BehaviorSubject("")

  constructor(private api:HttpClient) { }
  //to get all place details
  allPlaceList(){
    return this.api.get('http://localhost:3000/places')
  }
  viewPlace(travelId:any){
    return this.api.get('http://localhost:3000/places/'+travelId)

  }
  bookNow()
  {
    return this.api.get('http://localhost:3000/Packages')
  }
  addPlace(travelBody:any)
  {
    return this.api.post('http://localhost:3000/places',travelBody)

  }
  login(acno:any,pswd:any){
    const body={
      acno,
      pswd
    }
    return this.api.post('http://localhost:3000/Users',body)

  }
}
