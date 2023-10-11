import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "HTL Aim Lab";

  ChangeTitle(title:string){
    this.title = title;
  }
}
