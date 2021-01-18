import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

import { PhoneDirectoryService } from './phone-directory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	names: any[] = [];
	searchDictionary: any[] = [];
	
	constructor(private phoneDirService: PhoneDirectoryService) { }
	
	ngOnInit() {
    this.phoneDirService.getDirectoryList().subscribe(
		val => {Object.assign(this.searchDictionary, val);
			console.log('Output value is: ' + val);
		});
	}
	
	searchValue(event : any) {
		let input = event.target.value;
		console.log('Event Target Value is: ' + input);
		if (input.length == 1) {
			this.names = this.searchFromDictionaryAndMatch(this.searchDictionary, input);
		}
	}  

	searchFromDictionaryAndMatch(arr: any[], inputVal: any) {
		let namesDictonary = [], i;
		for (i = 0; i < arr.length; i++) {
			if (arr[i].match(inputVal)) {
				namesDictonary.push(arr[i]);
			}
		}
		return namesDictonary;
	};

}
