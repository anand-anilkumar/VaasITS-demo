import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isMenuOpened = true;
  contentMargin = 240;
  constructor() { }

  ngOnInit(): void {
  }
  onToggle(): void{
    this.isMenuOpened = !this.isMenuOpened;
    if (!this.isMenuOpened){
      this.contentMargin = 70;
    }else {
      this.contentMargin = 240;
    }
  }

}
