import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
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

  platforms = [
    'Visual Studio Code',
    'Figma',
    'Canva',
    'Adobe Illustrator',
    'Github',
    'Procreate'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}

