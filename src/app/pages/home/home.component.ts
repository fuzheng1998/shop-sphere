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
  count = '12';
  cols = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  sort = 'desc';
  onItemCountChange(itemCount: number): void {
    this.count = itemCount.toString();
    console.log(`count in home compoent by ${this.count}`);
  }
  onColumnsCountChange(columnsCount: number): void {
    this.cols = columnsCount;
    this.rowHeight = ROWS_HEIGHT[this.cols];
    console.log(`cols in home compoent by ${this.cols}`);
  }

}
