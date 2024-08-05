import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {
  formulario = new FormGroup({ // Criação do formulario
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]), // Criação da field do formulario
    idade: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]), // Validators é um compilado de validadores para o campo em questão (min, max, minLength)
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)]) 
  })

  btnCadastrar: boolean = true

  vetor: Pessoa[] = []

  cadastrar () {
    this.vetor.push(this.formulario.value as Pessoa)
    this.formulario.reset()
  }
}
