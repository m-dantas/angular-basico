// Importar o Injectable para prover a injeção de dependência
import { Injectable } from '@angular/core';

// Importar o HttpClient
import { HttpClient } from '@angular/common/http';

// Importar o modelo de produto
import { Products } from '../../models/Products';

// Importar o RxJS
import { Observable } from 'rxjs';

// Configuração do @Injectable
@Injectable({
  providedIn: 'root'
})

// Classe
export class ProductsService {

  // URL da API
  url:string = 'http://localhost:3000/products';

  // Primeiro método a ser executado quando referenciada a classe de serviço
  constructor(private http:HttpClient) { }

  // Método para selecionar produtos
  selecionar():Observable<Products[]>{
    return this.http.get<Products[]>(this.url);
  }

  // Método para cadastrar produtos
  cadastrar(obj: Pick<Products, 'name'|'value'>):Observable<Products>{
    return this.http.post<Products>(this.url, obj);
  }

  // Método para alterar produtos
  alterar(obj:Products):Observable<Products>{
    return this.http.put<Products>(`${this.url}/${obj.id}`, obj);
  }

  // Método para remover produtos
  remover(id:string):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}