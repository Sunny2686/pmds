import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) { }

  public showSnackbar(message:any, action:any, duration: any){
    this.snackbar.open(message, action,{
      duration: duration
    })
  }
}
