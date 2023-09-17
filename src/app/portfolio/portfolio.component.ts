import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  cards: Array<any> = [
    {
      title: 'Web design',
      num: 1,
    },
    {
      title: 'Mobile design',
      num: 2,
    },
    {
      title: 'LOGO design',
      num: 3,
    },
    {
      title: 'Web Application',
      num: 4,
    },
    {
      title: 'Mobile Application',
      num: 5,
    },
    {
      title: 'PWA Develepment',
      num: 6,
    },
  ];
}
