import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  downloadCV() {
    // Implement CV download logic here
    console.log('Downloading CV...');
  }

  getInTouch() {
    // Implement contact logic here
    console.log('Getting in touch...');
  }

  navigateToSection(section: string) {
    // Implement navigation logic here
    console.log(`Navigating to ${section}`);
  }
}
