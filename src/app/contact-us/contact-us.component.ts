import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contactUS',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  // sendMessage(){
  //   let nameRegex = `/^[a-z]{1,99}$/`;
  //   let emailRegex = `/^[a-z]{1,70}(.[a-z]{1,70}|_[a-z]{1,70})?([0-9]{1,7})?@[a-z]{1,20}.com$/`;
  //   let phoneRegex = `/^01(1|2|5|0)[0-9]{8}$/`;

  //   let name:string = $(".myForm").find("#name").val().toString();
  //   let mail:string = $(".myForm").find("#mail").val().toString();
  //   let phone:string = $(".myForm").find("#phone").val().toString();
  //   console.log(name.search(nameRegex));
  //   console.log(mail.search(emailRegex));
  //   console.log(phone.search(phoneRegex));
  //   if( name.match(nameRegex) && mail.match(emailRegex) && phone.match(phoneRegex) ){
  //     alert(`Thanks ${name} For your Message`);
  //   }
  //   else{
  //     alert("Please Check That You Entered All Fields Right")
  //   }
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
