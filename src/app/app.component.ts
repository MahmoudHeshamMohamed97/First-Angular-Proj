import { Component } from '@angular/core';

@Component({
  selector: 'welcomePage',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class WelcomeComponent {
  title = 'TestApp';


}

// $(window).scroll(function(){
//   if( $(window).scrollTop() > 100 ){
//     $(".navbar").css({ transition: "0.5s all", backgroundColor: "rgba(0,80,80,0.5)"}) ;
//   }
//   else{
//     $(".navbar").css({ transition: "0.5s all", backgroundColor: "teal"}) ;
//   }
// });