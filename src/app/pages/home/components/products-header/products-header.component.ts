import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
onColumnsUpdated(arg0: number) {
throw new Error('Method not implemented.');
}
onItemsUpdated(arg0: number) {
throw new Error('Method not implemented.');
}
itemsShowCount: any;
onSortUpdated(sortBy: string) {
  this.sort = sortBy
  this.sortChange.emit(sortBy)
}
@Output() sortChange = new EventEmitter<string>();
sort: string= 'desc';

}
