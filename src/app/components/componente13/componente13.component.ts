import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Products } from '../../models/Products';
import { ProductsService } from '../../services/products/products.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {
  registration: boolean = true
  products: Products[] = []
  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    value: new FormControl(null, Validators.required)
  })

  constructor (private service: ProductsService) {}

  ngOnInit () {
    this.handleProducts()
  }

  handleProducts () {
    this.service.selecionar().subscribe(res => this.products = res);
  }

  handleInsert () {
    this.service.cadastrar({ name: this.form.value.name, value: this.form.value.value })
      .subscribe(res => {
        this.products.push(res)
        this.form.reset()
      })
  }

  handleSelectProduct (index: number) {
    this.form.setValue({
      id: this.products[index].id,
      name: this.products[index].name,
      value: this.products[index].value
    })
    this.registration = false
  }

  handleUpdate () {
    this.service.alterar(this.form.value as Products)
      .subscribe(res => {
        const index = this.products.findIndex(i => i.id === this.form.value.id)
        this.products[index] = res
        this.form.reset()
        this.registration = true
      })
  }

  handleRemove () {
    this.service.remover(this.form.value.id)
      .subscribe(() => {
        const index = this.products.findIndex(i => i.id === this.form.value.id)
        this.products.splice(index, 1)
        this.form.reset()
        this.registration = true
      })
  }
}
