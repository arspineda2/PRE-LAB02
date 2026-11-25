import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  // @if
  showProjects = true;

  // @for
  projects = [
    { name: 'Personal CV Website', tech: 'Angular' },
    { name: 'Aureji Claws', tech: 'HTML, CSS, and JavaScript' },
    { name: 'Portfolio Landing Page', tech: 'CMS' }
  ];

  // @switch
  selectedLevel = 'All';
  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Figma', level: 'Advanced' },
    { tool: 'Canva', level: 'Advanced' },
    { tool: 'Wix', level: 'Advanced' },
    { tool: 'CapCut', level: 'Advanced' },
    { tool: 'Procreate', level: 'Intermediate' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'MongoDB', level: 'Intermediate' },
    { tool: 'Vercel', level: 'Intermediate' },
    { tool: 'Xampp', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Beginner' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  toggleProjects() {
    this.showProjects = !this.showProjects;
  }

  filteredProficiencies() {
    if (this.selectedLevel === 'All') {
      return this.proficiencies;
    }
    return this.proficiencies.filter(item => item.level === this.selectedLevel);
  }
}
