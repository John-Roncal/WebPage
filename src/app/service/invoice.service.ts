import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  readonly baseUrl = environment.api;
  readonly Auhorization = environment.Authorization;
  constructor(
    private httpService:HttpClient
  ) { }

  private getHeaders(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Authorization': this.Auhorization,
        'Content-Type': 'application/json'
      })
    };
  }

  getCdr(data: any) {
    return this.httpService.post(this.baseUrl + '/kallpa/webPage/cdr', data, this.getHeaders());
  }

  getXml(data: any) {
    return this.httpService.post(this.baseUrl + '/kallpa/webPage/xml', data, this.getHeaders());
  }

  getPdf(data: any) {
    console.log(data);
    return this.httpService.post(this.baseUrl + '/kallpa/webPage/pdf', data, this.getHeaders());
  }

  consultarDocumentoXmlCdr(data: any) {
    return this.httpService.post(this.baseUrl + '/kallpa/webPage/verificar/documento', data, this.getHeaders());
  }

}
