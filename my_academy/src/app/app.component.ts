import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReviewComponent } from './pages/review/review.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_academy';
}
