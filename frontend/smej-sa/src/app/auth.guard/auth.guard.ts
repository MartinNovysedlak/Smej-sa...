import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../Services/user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly authService: UserService,
    private readonly router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    if (!this.authService.isLoggedIn()) {
      return this.router.navigateByUrl('/login').then(() => false);
    }
    return true;
  }
}