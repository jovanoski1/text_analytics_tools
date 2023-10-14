import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {
  token: string;

  constructor(private configService: ConfigService, private router: Router) {
    this.token = this.configService.getToken();
    localStorage.removeItem('token');
  }

  public setToken(): void {
    this.configService.setToken(this.token);
    localStorage.setItem('token', this.token);
    // this.router.navigate(['/'])
  }
}
