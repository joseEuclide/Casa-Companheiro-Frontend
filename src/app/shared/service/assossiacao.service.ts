import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assossiacao } from '../model/assossiacao';

@Injectable({
  providedIn: 'root'
})
export class AssossiacaoService {

  // Url da API
  apiUrl = "https://casacompanheira.herokuapp.com/";
  

  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>},
    reportProgress?: boolean,
    responseType?: 'json',
    withCredentials?: boolean,
  }

  // Indicacao de que os dados enviados sao do tipo JSON 
  httpOptions = {
    headers : new Headers({
      'content-type':'application/json'
    })
  }

  // Construtor do Service
  constructor(private httpClient : HttpClient) { }

  // Metodo Responsável Em Fazer O Usuario Entrar No Sistema
  public entrarNoSistema(associacao : any):Observable<Assossiacao>{
    return this.httpClient.post<any>(this.apiUrl+"entrar",associacao)
  }

  // Metodo Responsável Em Cadastrar Novo Usuario No Sistema
  public cadastrarNovoUsuario(associacao : any):Observable<Assossiacao>{
    return this.httpClient.post<any>(this.apiUrl+"cadastrar",associacao)
  }
}
