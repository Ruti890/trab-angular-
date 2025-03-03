import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      identificacion: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(10)]],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      pais: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
      alert('Formulario enviado exitosamente');
    }
  }
}