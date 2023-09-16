import {TestBed} from '@angular/core/testing';

import {StoreService} from './store.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Observable} from "rxjs";

describe('StoreService', () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(StoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getAllProducts function', () => {
    expect(service.getAllProducts).toBeTruthy();
  });

  it('should have getAllCategories function', () => {
    expect(service.getAllCategories).toBeTruthy();
  });

  it('should return an Observable<Array<Product>>', () => {
    const result = service.getAllProducts();
    expect(result).toBeInstanceOf(Observable);
  });

  it('should return an Observable<Array<string>>', () => {
    const result = service.getAllCategories();
    expect(result).toBeInstanceOf(Observable);
  });

  // check number of products is more than 0
  it('should return more than 0 products', () => {
    service.getAllProducts().subscribe((products) => {
      expect(products.length).toBeGreaterThan(0);
    });
  });
});
