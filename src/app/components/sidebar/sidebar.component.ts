import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  width: number = 0;
  pxMeasure: number = 70;

  user: any = JSON.parse(localStorage.getItem('user'))

  constructor() { }

  @HostListener("window:resize", [])
  onResize() {
    this.width = window.innerWidth;
    this.pxMeasure = (this.width < 800) ? 70 : 240;
  }

  ngOnInit() {
    this.screenSize();
  }

  onToolbarMenuToggle = () =>
    this.pxMeasure = (this.pxMeasure == 240) ? 70 : 240;

  screenSize = () => {
    this.width = window.innerWidth;
    this.pxMeasure = (this.width < 800) ? 70 : 240;
  }

}
