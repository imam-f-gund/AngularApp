import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CountryService} from '../../shared/country.service';
import {Country} from '../../country';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent implements OnInit {

  private country:Country;
  constructor(private countryService:CountryService, private router:Router) { }

  ngOnInit() {
    this.country=this.countryService.getter();
  }

  createrOrUpdate(){
    if(this.country._id == undefined){

    this.countryService.createCountry(this.country).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/']);
      },
      error=>{
        console.log(error);
      }
    )
  }else{
    this.countryService.updateCountry(this.country).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/']);
      },
      error=>{
        console.log(error);
      }
    )
}
}
}
