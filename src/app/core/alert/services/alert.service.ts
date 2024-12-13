import { Injectable, signal } from '@angular/core';
import { Alert } from '../models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alertMessage = signal<Alert | null>(null);
  constructor() { 
  }

  setMessage(alert: Alert): void{
    this.alertMessage.set(alert);
  }

  deleteMessage():void{
    this.alertMessage.set(null);
  }
}