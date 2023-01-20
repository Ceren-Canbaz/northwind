import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //hangi html'in datalarını kontrol edeceksin
  styleUrls: ['./app.component.css']  //hangi cssi kullanacaksın
})
export class AppComponent {
  title = 'Furniture World';
  
  //title:string = 'northwind'; aynı şey. tip güvenlikli olmasını sağlıyorsun 
}
