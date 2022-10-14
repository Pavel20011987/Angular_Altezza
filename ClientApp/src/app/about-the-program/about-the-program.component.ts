import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input, Self, Inject } from '@angular/core';
import { FormGroup, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators'; 

@Component({
  selector: 'app-about-the-program',
  templateUrl: './about-the-program.component.html'
})
export class AboutTheProgramComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private formBuilder: FormBuilder, private router: Router) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
}
/// Пересчетать
///
///
  public recalculate() {

  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}



