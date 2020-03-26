// This file prevents non logged user from accessing some pages

import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

import { NotificationService } from '../../shared/service/notification.service';
import { NavigationService } from 'src/app/shared/service/navigation.service';

@Injectable()

export class AuthGuard implements CanLoad {
    constructor(
        private authService: AuthService,
        private navigationService: NavigationService,
        public notificationService: NotificationService
    ) { }


    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        const isAuth = this.authService.getIsAuthenticated();
        if (!isAuth) {
            this.navigationService.goAuth();
            this.notificationService.smallWarning('Log in to proceed');
        }
        return isAuth;
    }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    //     const isAuth = this.authService.getIsAuthenticated();
    //     if (!isAuth) {
    //         this.navigationService.goAuth();
    //         this.notificationService.smallWarning('Log in to proceed');
    //     }
    //     return isAuth;
    //     // this method is implemented in app routing module ts
    // }

}
