import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {
  
  imagem: string = 'assets/vay1.webp'

  alterarImagem () {
    if (this.imagem === 'assets/vay1.webp') {
      this.imagem = 'assets/vay2.webp'
    } else {
      this.imagem = 'assets/vay1.webp'
    }
  }
}
