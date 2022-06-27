import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CountryService} from '../../shared/country.service';
import {Country} from '../../country';

@Component({
  selector: 'app-navbar', //selector
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private countryService:CountryService) { } //add private router:Router

  ngOnInit() {
  }

  newCountry(event:any){    //fungsi new  click  navbar.html
    event.preventDefault();
    this.countryService.setter(new Country());
    this.router.navigate(['/createUpdate']); //move createUpdate
  }

}
