import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  title = '01-first-steps';
  name = "Juan Acosta";
  imgRoute = "emisionsCO2.jpeg"
  disabled = false
  handleClick() {
    console.log(`Hola ${this.name}`)
  }
  increment() {
    this.count++
  }
  decrement() {
    this.count--
  }
  nombreCompleto = ""
  count = 0

}
