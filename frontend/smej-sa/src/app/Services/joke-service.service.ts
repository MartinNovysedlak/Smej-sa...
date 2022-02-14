import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vtip } from '../Module/vtipy';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { REST_API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JokeServiceService {
 vtipyUrl="http://localhost:8081/getVtip"
 postUrl="http://localhost:8081/Vtip";
 deleteUrl="http://localhost:8081/deleteVtip"
 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  constructor(private http: HttpClient) { }

  getJokes():Observable<Vtip[]>{
    return this.http.get<Vtip[]>(this.vtipyUrl)
}

addJoke(vtip:Vtip):Observable<Vtip>{
  return this.http.post<Vtip>(this.postUrl, vtip, this.httpOptions);
  console.log(vtip);
}

deleteJoke(vtip:Vtip |number):Observable<any>{
  const id = typeof vtip === 'number' ? vtip:vtip.id
  const url = `${this.deleteUrl}/${id}`;
  return this.http.delete<Vtip>(url, this.httpOptions);
}
}
