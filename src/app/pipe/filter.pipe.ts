import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(places:any[],filterString:string,propName:string){
    const result:any=[];
    if(!places ||filterString==''||propName=='')
    {
      return places
    }
    places.forEach((place:any)=>{
      if(place[propName].trim().toLowerCase().includes(filterString)){
        result.push(place)
      }
    })
    return result;
  }

}
