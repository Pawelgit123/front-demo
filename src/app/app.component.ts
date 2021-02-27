import {Component, OnInit} from '@angular/core';
import {Localisation} from './model/localisation';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Moje lokalizacje:';
  localisations: Localisation[];
  constructor(private httpclient: HttpClient) {
  }
  ngOnInit(): void {
    this.httpclient.get<Localisation[]>('http://localhost:8080/localisation')
      .subscribe(response => this.localisations = response);
  }

}

