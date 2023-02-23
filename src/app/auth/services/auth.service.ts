import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'

import { RegisterRequestInterface } from '../types/registerRequest.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = 'https://conduit.productionready.io/api/users'
    const body = ''
    return this.http.post(url, body)
  }
}
