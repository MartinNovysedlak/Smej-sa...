import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../Services/user.service'
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.userService.isLoggedIn()) {
      request = request.clone( {
        headers: new HttpHeaders( {
          Authorization: this.userService.getToken()!
          
        })
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (this.userService.isLoggedIn() && err.status === 401 ) {
          this.userService.logout();
          this.router.navigateByUrl('/home');
        }
        throw err;
      })
    );
  }

}