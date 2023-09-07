import { Component } from '@angular/core';
const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  onSortChange(newSort: string): void {
    this.sort = newSort;
    console.log(`sort in home compoent by ${this.sort}`);
  }
  cols = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  sort = 'desc';
}
