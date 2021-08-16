import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import firebase from 'firebase/app';
import 'firebase/auth';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {
  private auth = firebase.auth();
  private user = this.auth.currentUser;
  public spinner: boolean = false;
  public signupForm!: FormGroup;
  public next: boolean = false;

  constructor(
    private route: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }
  public signup() {


    //ADDING DATA TO USER DATABASE.
    this.spinner = true;
    const email = this.signupForm.get('email')?.value;
    const password = this.signupForm.get('password')?.value;
    this.authService.signup(email, password)
      .then(() => {
        this.spinner = false;
        this.authService.sendVerification();
        this.signupForm.reset();
        this.route.navigate(['/login']);
      })
      .catch((error) => console.log(error.message));

  }//END OF SIGNUP
  public onNext() {
    this.next = true;
  }

  public onCancel() {
    this.signupForm.reset();
    this.route.navigate(['/login']);
  }
}//END OF CLASS
