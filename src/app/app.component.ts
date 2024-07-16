import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CatalogComponent } from "./catalog/catalog.component";


@Component({
  selector: 'bot-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CatalogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'robot-shop';
}

//source -  https://github.com/jmcooper/joes-robot-shop
