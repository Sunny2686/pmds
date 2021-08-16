import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private usersData: any[] = [
    { serialNumber: 1, projectName: 'Healthcare Technology Innovation Centre (HTIC)-Phase II- BT/PR14471/MED/32/149/2010', cost: '10.25', status:'40' },
    { serialNumber: 2, projectName: 'Biodesign-Bioengineering Initiative (Phase-II) BT/PR13926/MED31/97/2010', cost: '14.25', status:'20%' },
    { serialNumber: 3, projectName: 'Centre For Advanced Research in Low Back Pain and Degenerative Disc Disease BT/PR35631/MED/30/2186/2019', cost: '20.25', status:'80' },
    { serialNumber: 4, projectName: 'Healthcare Technology Innovation Centre (HTIC)-Phase II- BT/PR14471/MED/32/149/2010', cost: '11.25', status:'20' },
    { serialNumber: 5, projectName: 'Expansion of School of International� Biodesign (SIB) programme for medical devices and implants as Phase - IV -BT/PR9367/MED/32/09/2007', cost: '100.25', status:'60' },
    { serialNumber: 6, projectName: 'Healthcare Technology Innovation Centre (HTIC)-Phase II- BT/PR14471/MED/32/149/2010', cost: '20.25', status:'0' },
    { serialNumber: 7, projectName: 'Healthcare Technology Innovation Centre (HTIC)-Phase II- BT/PR14471/MED/32/149/2010', cost: '40.25', status:'20' },
    { serialNumber: 8, projectName: 'Healthcare Technology Innovation Centre (HTIC)-Phase II- BT/PR14471/MED/32/149/2010', cost: '150.25', status:'23' },
    { serialNumber: 9, projectName: 'Healthcare Technology Innovation Centre (HTIC)-Phase II- BT/PR14471/MED/32/149/2010', cost: '10.25' , status:'4'}
  ]

  constructor() { }
  public get users() {
    return this.usersData;
  }
}
