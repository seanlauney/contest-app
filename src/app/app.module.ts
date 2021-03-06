import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/users.service';
import {
	MatListModule,
	MatCardModule,
	MatDatepickerModule,
	MatGridListModule,
	MatToolbarModule,
	MatButtonModule,
	MatMenuModule
	} from '@angular/material';
@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		MatListModule,
		MatCardModule,
		MatDatepickerModule,
		MatGridListModule,
		MatToolbarModule,
		MatButtonModule,
		MatMenuModule,
		BrowserAnimationsModule
	],
	providers: [UserService],
	bootstrap: [AppComponent],
	exports: [
		MatListModule,
		MatCardModule,
		MatDatepickerModule,
		MatGridListModule,
		MatToolbarModule,
		MatButtonModule,
		MatMenuModule,
		BrowserAnimationsModule
	],
})
export class AppModule { }
