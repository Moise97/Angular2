import { Component } from '@angular/core';
import { NgForm }   from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

  formValue = JSON.stringify({});

  onSubmit (form:NgForm) {
      this.formValue = JSON.stringify(form.value);
  }
}
