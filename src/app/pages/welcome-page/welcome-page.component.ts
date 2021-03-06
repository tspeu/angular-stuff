import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { CountryService } from 'src/app/services/country.service';
import { Affiliate } from 'src/app/models/affiliate';
import { GeoCountry } from 'src/app/models/geo-country';
import { SharePersonalData } from 'src/app/models/share-personal-data';
import { MatStepper } from '@angular/material';



@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {


  affiliate: Affiliate;
  countries: GeoCountry[] = [];
  showCheckPersonalData = true;
  showPrivacyPolicy = true;
  sendPersonalData: SharePersonalData;
  isActiveStepper = false;
  isLinear = true;
  reload = false;


  constructor(private userService: UserService<Affiliate>,
              private countryService: CountryService) { }

  ngOnInit() {

    this.affiliate = this.userService.getUserValue();
    this.reload = this.affiliate ? true : false;
    this.countries = this.countryService.getCountriesValue();

    if (!this.affiliate) {
      this.userService.getUserData()
        .subscribe(res => {
          this.affiliate = res;
          this.reload = true;
        });
    }

    if (this.countries.length === 0) {

      // setTimeout( () => {
      //   this.countries = this.countryService.getGeoCountries();
      // }, 2000);

      if (this.countries.length === 0) {
        this.countryService.getCountries()
        .pipe(map(res => {
            this.countries = res.response;
          })).subscribe();
      }
    }
  }


  getPersonalData(personalData: SharePersonalData) {
    this.sendPersonalData = personalData;
  }


  goForwardStepper(stepper: MatStepper) {
    stepper.next();
  }

  activatedStepper(isActivate: boolean) {
    this.isActiveStepper = isActivate;
  }

}
