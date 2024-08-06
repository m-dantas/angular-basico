import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../../pipe/media.pipe";

@Component({
  selector: 'app-componente12',
  standalone: true,
  imports: [CommonModule, MediaPipe],
  templateUrl: './componente12.component.html',
  styleUrl: './componente12.component.css'
})
export class Componente12Component {
  nome: string = 'Mauricio'
  obj: any = {
    nome: 'Mauricio',
    idade: 24
  }
  alunos:any = [
    { nome:'Ana',     nota1:8, nota2:9},
    { nome:'Julio',   nota1:7, nota2:8},
    { nome:'Letícia', nota1:3, nota2:2},
    { nome:'Ricardo', nota1:7, nota2:7}
  ];
}
