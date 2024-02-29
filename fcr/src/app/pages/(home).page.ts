import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'fcr-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <fcr-analog-welcome/>
  `,
})
export default class HomeComponent {
}
