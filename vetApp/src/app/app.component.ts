import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogInModule } from './appModules/log-in/log-in.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LogInModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vetApp';
}
