import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
   const auth=inject(AuthService);
   const router=inject(Router);
  if(auth.getToken()!=undefined){
     return true;
  }
  else{
    router.navigateByUrl("/");
    return false;
  }
};
