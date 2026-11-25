import { Component, input } from '@angular/core';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  fullName = input.required<string>();
  proficiencies = input.required<Proficiency[]>();

  year = new Date().getFullYear();
}



//import { Component } from '@angular/core';

//@Component({
//  imports: [],
//  selector: 'app-footer',
//  styleUrl: './footer.css',
//  templateUrl: './footer.html',
//})
//export class Footer {}
