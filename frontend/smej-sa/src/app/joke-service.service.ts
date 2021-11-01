import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vtipy } from './vtipy';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeServiceService {
 vtipyUrl="http://localhost:8081/Vtip"
  constructor(private http: HttpClient) { }

  getJokes():Observable<Vtipy[]>{
    return this.http.get<Vtipy[]>(this.vtipyUrl)
}
}
