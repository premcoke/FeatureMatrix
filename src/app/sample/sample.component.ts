import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareRouting } from '../app.service';

class User {
  constructor(
    public time: Date,
    public datetime: Date,
    public date: Date,
    public range: Date,
  ) {}
}

@Component({
  selector: 'sample',
  styleUrls: ['./sample.component.css'],
  templateUrl:'./sample.component.html' 
})

export class SampleComponent {
    
   user: User;
  ngOnInit() {
    this.user = new User(null,null,null,null);
  }

  onSubmit(userForm) {
    if(userForm.valid){
      alert("submitted")
    }
    else alert ("form is invalid")
  }
}