import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css'],
})
export class ProductsHeaderComponent {
  private itemsChange = new EventEmitter<number>();

  onColumnsUpdated(arg0: number) {
    throw new Error('Method not implemented.');
  }

  onItemsUpdated(itemNum: number) {
    this.itemsShowCount = itemNum;
    this.itemsChange.emit(itemNum);
  }

  itemsShowCount: any;

  onSortUpdated(sortBy: string) {
    this.sort = sortBy;
    this.sortChange.emit(sortBy);
  }

  @Output() sortChange = new EventEmitter<string>();
  sort = 'desc';
}
