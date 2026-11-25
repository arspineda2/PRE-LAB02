import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  // Input: the list of skills comes from the parent.
  skills = input.required<string[]>();

  // Output: an event this component sends up to the parent.
  skillSelected = output<string>();

  selectSkill(skill: string) {
    this.skillSelected.emit(skill);
  }
}



//import { Component } from '@angular/core';

//@Component({
//  imports: [],
//  selector: 'app-skills',
//  styleUrl: './skills.css',
//  templateUrl: './skills.html',
//})
//export class Skills {}
