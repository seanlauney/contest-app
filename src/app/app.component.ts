import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/users.service';
import { MatListModule, MatCardModule, MatDatepickerModule,
	 MatGridListModule, MatToolbarModule, MatButtonModule, MatMenuModule } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	votes: any;
	results: any;
	winners: any;
	constructor(
		private userService: UserService,
	) { }

	contestants = [
		{firstName: 'Sean', lastName: 'Launey', photo: '#', costume: 'Papa Legba'},
		{ firstName: 'Diane', lastName: 'Bostwick', photo: '#', costume: 'Voodoo Doll' },
		{ firstName: 'Percy', lastName: 'Launey', photo: '#', costume: '3D Zombee' },
		{ firstName: 'Sean', lastName: 'Launey', photo: '#', costume: 'Papa Legba' },
		{ firstName: 'Sean', lastName: 'Launey', photo: '#', costume: 'Papa Legba' },
		{ firstName: 'Sean', lastName: 'Launey', photo: '#', costume: 'Papa Legba' },
		{ firstName: 'Sean', lastName: 'Launey', photo: '#', costume: 'Papa Legba' },
		{ firstName: 'Sean', lastName: 'Launey', photo: '#', costume: 'Papa Legba' },
		{ firstName: 'Sean', lastName: 'Launey', photo: '#', costume: 'Papa Legba' },
		{ firstName: 'Sean', lastName: 'Launey', photo: '#', costume: 'Papa Legba' },
		{ firstName: 'Sean', lastName: 'Launey', photo: '#', costume: 'Papa Legba' },
		{ firstName: 'Sean', lastName: 'Launey', photo: '#', costume: 'Papa Legba' },
		{ firstName: 'Sean', lastName: 'Launey', photo: '#', costume: 'Papa Legba' },
		{ firstName: 'Sean', lastName: 'Launey', photo: '#', costume: 'Papa Legba' },
		{ firstName: 'Sean', lastName: 'Launey', photo: '#', costume: 'Papa Legba' },
		{ firstName: 'Sean', lastName: 'Launey', photo: '#', costume: 'Papa Legba' },
	];
	categories = ['Best Overall', 'Scariest', 'Best Makeup'];
	getVotes(): any {
		const votes = {};
		for (let i = 0; i < this.categories.length; i++) {
			votes[this.categories[i]] = [];
		}
		return votes;
	}
	addVotes(contestant, category) {
		this.votes[category].push(contestant);
		this.load();
	}
	getSummary(collection) {
		const counts = {};
		for (let i = 0; i < collection.length; i++) {
			const contestant = collection[i].costume;
			counts[contestant] = counts[contestant] ? counts[contestant] + 1 : 1;
		}
		const keys = Object.keys(counts);
		const summary = [];
		for (let i = 0; i < keys.length; i++) {
			summary.push({ key: keys[i], value: counts[keys[i]]});
		}

		return summary;
	}
	getCount() {
		const summary = {};
		const categories = Object.keys(this.votes);
		for (let i = 0; i < this.categories.length; i++) {
			summary[categories[i]] = [];
			summary[categories[i]].push(this.getSummary(this.votes[categories[i]]));
		}
		return summary;
	}
	objectKeys(obj: any) {
		return Object.keys(obj);
	}
	getWinners() {
		const keys = Object.keys(this.results);
		const summary = {};
		const winners = {};
		for (let i = 0; i < keys.length; i++) {
			const comparrison = [];
			const indexArray = [];
			const contestant = this.results[keys[i]][0];
			for (let g = 0; g < contestant.length; g++) {
				comparrison.push(contestant[g]);
				indexArray.push(contestant[g].value);
			}
			let max = 0;
			if (indexArray.length) {
				max = indexArray.reduce(function (a, b) {
					return Math.max(a, b);
				});
			}
			winners[keys[i]] = comparrison.filter(function (el) {
				return 	el.value === max;
			});
		}
		return winners;
	}
	load() {
		this.results = this.getCount();
		this.winners = this.getWinners();
	}
	ngOnInit() {
		this.votes = this.getVotes();
		console.log(this.userService.getUsers());
	}
}