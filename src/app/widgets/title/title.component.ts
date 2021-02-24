import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent implements OnInit {
  @Input() title: string;
  @Input() dark = false;
  @Input() main = false;
  color: string;
  divider: string;

  constructor() {}

  ngOnInit(): void {
    if (this.dark) {
      this.color = 'text-secondary';
      this.divider = '';
    } else {
      this.color = 'text-white';
      this.divider = 'divider-light';
    }
  }
}
