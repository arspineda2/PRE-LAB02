import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ProfileCard } from '../profile-card/profile-card';
import { Skills } from '../skills/skills';
import { Footer } from '../footer/footer';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-home',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // The Home page owns all CV data and passes it down to the children.
  fullName = 'Angel Raphaelle S. Pineda';
  location = 'City of San Fernando, Pampanga';
  email = 'arspineda8@gmail.com';
  phone = '0969 514 7202';

  profile = 'I am a student interested in web development. I enjoy learning new technologies and building useful applications. I am passionate about showcasing my skills and creativity. ';

  educ = [
    'Infant Jesus Academy, Academic Excellences Award with Honor (2021)',
    'Infant Jesus Academy, Academic Excellences Award with Honor (2022)',
    'Holy Angel University, Academic Excellences Award with Honor (2023)',
    'Holy Angel University, Academic Excellences Award with High Honor (2023)',
    'Holy Angel University, Academic Excellences Award with Honor (2023)',
    'Holy Angel University, Class Presidents League (2025-2026)',
    'Holy Angel University, Deans Lister (2025)',
    'Holy Angel University, Deans Lister (2026)',
    'Holy Angel University, Code Geeks Organization Officer for Financial Management (2026-2027)'
  ];

  skills = [
    'HTML and CSS',
    'JavaScript',
    'UI/UX',
    'Graphic Design',
    'Video Editing'
  ];

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

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
