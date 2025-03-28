import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [NgIf, NavbarComponent, ReactiveFormsModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Message envoyé :', this.contactForm.value);
      alert('Votre message a bien été envoyé !');
      this.contactForm.reset();
    }
  }
}
