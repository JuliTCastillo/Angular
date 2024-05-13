import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../layouts/dashboard/pages/home/components/login-dialog/login.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('authGuard');
  const router = inject(Router);
  const authService = inject(LoginService);
  
  const isAuth = authService.verifyToken()

  return isAuth || router.createUrlTree(["dashboard/home"]);

  // return router.createUrlTree(["dashboard/home"]);
};
 