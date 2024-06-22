import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  private primengConfig = inject(PrimeNGConfig);
  
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
