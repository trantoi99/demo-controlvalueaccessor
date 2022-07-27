import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ControlValueAccessor';
  text: string = '';
  error = '';

  click(f: any){
    console.log(f)
    this.error = f.status;
  }
}
