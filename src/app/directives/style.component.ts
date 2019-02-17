import { Component } from '@angular/core'

@Component ({
  selector: 'app-style',
  template: `
    <h2>Style Component Directive</h2>
    <p style="padding: 1rem"
      [ngStyle]="alertStyles">
      <ng-content></ng-content>
    </p>
  `
})

export class StyleComponent {
  borderStyle = '1px solid black';

  alertStyles = {
  'color': 'red',
  'font-weight': 'bold',
  'borderBottom': this.borderStyle
  };
}
