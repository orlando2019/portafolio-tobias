import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  private email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  private phone = /^[7|6|5|3]\d{9}$/;
  private name = /^[a-zA-ZÀ-ÿ\s]{1,20}$/;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {}

  /* -- Metod donde le colacamos los datos del formulario del HTML */
  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(this.name)]],
      email: ['', [Validators.required, Validators.pattern(this.email)]],
      movil: ['', [Validators.required, Validators.pattern(this.phone)]],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(100),
        ],
      ],
    });
  }

  /* Funcion de Guardar */
  onSave(): void {
    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;
      //console.log(formValue);
      Swal.fire({
        icon: 'success',
        title: 'Mensaje Enviado!!',
        text: 'Mensaje enviado satifactoriamente',
        timer: 1500,
      });
      this.contactForm.reset();
    } else {
      //console.log('No Valid');
      Swal.fire({
        icon: 'error',
        title: 'Oops... ¡Algo salió mal!',
        text: 'Debes Llenar todos los campos',
        timer: 2500,
      });
    }
  }

  /* Metodo Donde Lo Aplicamos en los Input con Bootstrap */
  isValidField(field: string): string {
    const validateField = this.contactForm.get(field);
    return !validateField.valid && validateField.touched
      ? 'is-invalid'
      : validateField.touched
      ? 'is-valid'
      : '';
  }

  /* GETTERS */
  get nameField() {
    return this.contactForm.get('name');
  }

  get emailField() {
    return this.contactForm.get('email');
  }

  get movilField() {
    return this.contactForm.get('movil');
  }

  get messageField() {
    return this.contactForm.get('message');
  }
}
