import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      <h2>Child Component</h2>
      {{ childContent }}
      <ng-content></ng-content>
    </div>
  `
})
export class ChildComponent {
  childContent = "Default content";
}
