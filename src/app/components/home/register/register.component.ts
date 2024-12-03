import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    formRegister!: FormGroup

    constructor(private fb : FormBuilder) {
        this.formRegister = fb.group({
            email: ['', [Validators.email, Validators.required]],
            nombre: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required,Validators.minLength(4)]]
        })
    }

    register() {
        console.log(this.formRegister.valid);
    }
}
