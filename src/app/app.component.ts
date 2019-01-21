import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedSection = 'grocery';

  onNavigate(section: string) {
    this.loadedSection = section;
  }

  checkLoadedSection(section: string) {
    if ( this.loadedSection === section ) {
      return true;
    } else {
      return false;
    }
  }
}
