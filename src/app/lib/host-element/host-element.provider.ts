import { Injectable, ViewContainerRef } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

Injectable();
export class HostElementProvider {
  private _hostElement = new ReplaySubject<ViewContainerRef>();

  provide(hostElement: ViewContainerRef): void {
    this._hostElement.next(hostElement);
  }

  reference(): Observable<ViewContainerRef> {
    return this._hostElement.asObservable();
  }
}
