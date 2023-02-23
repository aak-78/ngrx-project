import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { registerAction } from '../../store/actions'
import { isSubmittingSelector } from '../../store/selectors'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  //Auth state Object
  isSubmitted$: Observable<boolean>

  constructor(private fb: FormBuilder, private store: Store) {
    this.isSubmitted$ = this.store.pipe(select(isSubmittingSelector))
  }
  initialazeValues() {}

  ngOnInit(): void {
    console.log(this.isSubmitted$)
  }

  onSubmit() {
    const formValue: RegisterRequestInterface = {
      username: String(this.form.value.username),
      email: String(this.form.value.email),
      password: String(this.form.value.password),
    }

    console.log(this.form.value)
    this.store.dispatch(registerAction(formValue))
  }
}
