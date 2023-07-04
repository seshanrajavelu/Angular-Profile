import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProfile(): void {
    this.router.navigate(['/main/profile']);
  }
}
