import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  selectedAvatar:any;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.setForm();
    this.valueChanges();
  }

  setForm() {
    this.form = this.formBuilder.group({'username': '', 'email': '', 'password': '', 'repeatPassword': '', 'sendEmail': '', 'avatar': ''});
  }

   valueChanges() {
    this.form.get('avatar').valueChanges.subscribe(value => {
      this.selectedAvatar=value;
      console.log('value',value );
    });
  }
}
