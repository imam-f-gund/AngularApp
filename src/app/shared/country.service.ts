import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';//---
import {Country} from '../country';//--


@Injectable({
  providedIn: 'root'
})

export class CountryService {
  private country:Country;
private baseUri:string="http://localhost:2020";//-- conect node js
private headers = new HttpHeaders().set('Content-Type','application/json');//--

  constructor(private http:HttpClient) { }//--

createCountry(country:Country){
  return this.http.post(this.baseUri+'/create',country,{headers:this.headers}); //baseUri+'/create' terhubung node js

}
readCountries(){
  return this.http.get(this.baseUri+'/read',{headers:this.headers});

}
updateCountry(country:Country){
  return this.http.put(this.baseUri+'/update',country,{headers:this.headers});

}
deleteCountry(id:string){
  return this.http.delete(this.baseUri+'/delete/'+id,{ headers:this.headers});

}

setter(country:Country){
this.country=country;
}
getter(){
return this.country;
}
}
