import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestComponent } from './components/test/test.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AboutComponent,HomeComponent,GalleryComponent,TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myFirstAngularProj';
}
