import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  type='text';
  brd='1px solid red';
  bxBkCl='white'

  whatsDate() {
return Date.now()
  }

  OnMouseEnterpsassasas(event:MouseEvent){
    console.log('Entered',event)
    this.bxBkCl=this. randomColor()
  }

  OnMouseLeave(event:MouseEvent){
    console.log('Exited',event)
    this.bxBkCl=this. randomColor();
  }

  randomColor(): string{
    let red = Math.floor((Math.random()*255))
    let green = Math.floor((Math.random()*255))
    let blue = Math.floor((Math.random()*255))
 return `rgb(${red},${green},${blue})`
  }
constructor(){}
ngOnInit(){}

}
