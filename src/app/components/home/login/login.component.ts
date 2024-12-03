import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    formLogin!: FormGroup

    // private formBuilder = inject(FormBuilder)

    constructor(private fb : FormBuilder){
        this.formLogin = fb.group({
            email:['', [Validators.required, Validators.email]],
            password:['', [Validators.minLength(4)]]
        })
    }

    login() {
        if (this.formLogin.valid) {
            console.log(this.formLogin.value);
        }
    }


}
