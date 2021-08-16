import { AuthService } from './../auth.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import firebase from 'firebase/app';
import 'firebase/auth';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public windowRef: any;
  public phoneNumber = new FormControl('', [Validators.required]);
  public optNumber = new FormControl('', [Validators.required]);

  public cancelConfirm$$ = new BehaviorSubject<boolean>(false);
  public sendingUID$$ = new BehaviorSubject<string>('');
  private auth = firebase.auth();
  public spinner = new BehaviorSubject<boolean>(false);
  public loginForm!: FormGroup;
  public isError = new BehaviorSubject<boolean>(false);
  public errorMessage = new BehaviorSubject<string>('');

  constructor(
    private afAuth: AngularFireAuth,
    private route: Router,
    private snackbarService: SnackbarService,
    private authService: AuthService,
  ) {}

  public ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  public login() {
    this.spinner.next(true);
    // Authenticating phone number.
    this.authService
      .login(this.loginForm.value)
      .then((result: any) => {
        this.ifAuthenticated(result);
        this.spinner.next(false);
        this.cancelConfirm$$.next(true);
      })
      .catch(() => {
        this.spinner.next(false);
        this.isError.next(true);
      });
    this.phoneNumber.reset();
  }

  public verifyCode() {}

  public onCancel() {
    this.loginForm.reset();
    this.route.navigate(['']);
  }

  public ifAuthenticated(user: any) {
    // const newUser = user.additionalUserInfo.isNewUser;
    const emailVerified = user.user.emailVerified;
    if (emailVerified) {
      this.route.navigate(['/dashboard']);
    } else {
      this.snackbarService.showSnackbar(
        'Verify your email first',
        'close',
        null
      );
      this.route.navigate(['/table']);
    }
    this.loginForm.reset();
  }
} // End of class
