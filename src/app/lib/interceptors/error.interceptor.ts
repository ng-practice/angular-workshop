import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

import { Modal } from '../modal/modal';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _modal: Modal) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const withBearer = req.clone({
      headers: req.headers.set('X-My-HEADER', 'Juhuu')
    });

    return next
      .handle(withBearer)
      .pipe(
        catchError(err =>
          this._modal
            .open({
              title: 'ERROR caught by Interceptor',
              message: err.message
            })
            .pipe(mergeMap(() => throwError(err)))
        )
      );
  }
}
