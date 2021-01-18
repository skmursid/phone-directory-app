import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneDirectoryService {

  constructor(private http: HttpClient) { }

	getDirectoryList() {
        return this.http.get('./assets/Contacts/names.json');
  }
}
