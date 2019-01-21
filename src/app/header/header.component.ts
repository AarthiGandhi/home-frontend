import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sectionSelected = new EventEmitter<string>();
  selectedSection = 'grocery';

  constructor() { }

  ngOnInit() {
  }

  onSelect(section: string) {
    this.selectedSection = section;
    this.sectionSelected.emit(this.selectedSection);
  }

  checkSectionIsActive(section: string) {
    if ( this.selectedSection === section ) {
      return true;
    } else {
      return false;
    }
  }

}
