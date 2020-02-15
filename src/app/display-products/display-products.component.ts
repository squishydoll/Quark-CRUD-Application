import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  headersArray: string[] = ['name', 'description', 'price', 'delete', 'update'];
  productsList = [];
  constructor(private dataService: DataService) {
    this.productsList = [];
  }

  ngOnInit(): void {
    this.dataService.getProductData().subscribe(data => {
      this.productsList = data;
    });
    this.dataService.dataSubject.subscribe(data => {
      this.productsList = data;
    });
  }

  deleteData(productId) {
    this.dataService
      .deleteProductDataById(productId)
      .subscribe(el => (this.productsList = el));
  }
}
