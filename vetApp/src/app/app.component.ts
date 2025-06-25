import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogInModule } from './appModules/log-in/log-in.module';
import { HttpClient } from '@angular/common/http';
import { UserScheduleModule } from './appModules/user-schedule/user-schedule.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LogInModule,UserScheduleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vetApp';
}
