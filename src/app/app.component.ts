import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj';
  
  selectedSize!: number;
  currentColor: string = '';
  colors: any = [];
  boxSize: number = 50;

  setValues(val:number){
      this.selectedSize = val;
  }

  generateColor() {
    for (let i = 1; i <= this.selectedSize; i++) {
      if (this.colors.length < this.selectedSize) {
        this.colors.push({
          color: this.currentColor,
        });
      }
    }
  }

  changeColor(box: any) {
    box.color = this.currentColor;
  }

  reset() {    
    this.colors = []
  }
}
