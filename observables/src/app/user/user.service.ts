import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {

  // Subjects are usefull to transport data between components. It's a better alternative to EventEmitter<>()
  activatedEmitter = new Subject<boolean>();

}
