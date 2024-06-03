import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('authGuard');
  const router = inject(Router);
  const authService = inject(LoginService);
  
  const isAuth = authService.verifyToken()

  return isAuth || router.createUrlTree(["dashboard/home"]);

  // return router.createUrlTree(["dashboard/home"]);
};
 