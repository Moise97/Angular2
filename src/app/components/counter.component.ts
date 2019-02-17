import { Component } from '@angular/core';

@Component ({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent {
  num = 0;

  increment(){
    this.num++;
  }

  decrement(){
      this.num--;
    }

  reset(){
    this.num = 0;
  }
}
