import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vtipy } from '../Module/vtipy';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokeServiceService {
 vtipyUrl="http://localhost:8081/getVtip"
 postUrl="http://localhost:8081/Vtip";
 deleteUrl=""
 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  constructor(private http: HttpClient) { }

  getJokes():Observable<Vtipy[]>{
    return this.http.get<Vtipy[]>(this.vtipyUrl)
}

addJoke(vtip:Vtipy):Observable<Vtipy>{
  return this.http.post<Vtipy>(this.postUrl, vtip, this.httpOptions)
}

deleteJoke(vtip:Vtipy |number):Observable<any>{
  const id = typeof vtip === 'number' ? vtip:vtip.id
  const url = `${this.deleteUrl}/${id}`;
}
}
