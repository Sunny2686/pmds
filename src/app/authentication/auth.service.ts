import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = firebase.auth();
  constructor(
    private snackbarService:SnackbarService,
    private router:Router
  ) { }


  public signup(email: string, password: string):Promise<firebase.auth.UserCredential> {
    // Authenticating email and passowrd.
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  public login(loginData: { email: string; password: string }):Promise<firebase.auth.UserCredential> {
    return firebase
      .auth()
      .signInWithEmailAndPassword(loginData.email, loginData.password);

  }
  //SENDING EMAIL VERIFICATION MESSAGE
  public sendVerification() {
    const user = firebase.auth().currentUser;
    user?.sendEmailVerification()
      .then(() => {
        // Email verification sent
        this.snackbarService.showSnackbar(
          'Email varification has been send to your mail.Verify your email to login.',
          'close',
          null
        );
      })
      .catch((error) => {
        // An error happened.
        this.snackbarService.showSnackbar(error.message, null, 2000);
      });
  }
  public logout(): void {
    const user = this.auth.currentUser;
    if (user) {
      this.auth.signOut().then(() => {
        localStorage.removeItem("isAuth");
        this.snackbarService.showSnackbar('User logout.', null, 2000);
         location.reload();
        this.router.navigate(['login']);
      });
    }
  }
}
