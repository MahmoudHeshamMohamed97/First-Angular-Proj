import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aboutUS',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  goToPortfolio(){
    window.open("https://heshaportfolio.netlify.app/","blank")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
