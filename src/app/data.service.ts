import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataSubject: Subject<any>;

  constructor() {
    this.dataSubject = new Subject();
  }

  addingData(value) {
    value['id'] = Math.floor(Math.random() * 100) + 1;
    let data = this.getLocalStorage() || [];
    if (data) {
      data.push(value);
      this.setLocalStorage('productData', JSON.stringify(data));
      this.dataSubject.next(JSON.parse(localStorage.getItem('productData')));
      return of(true);
    }
    return of(false);
  }

  getProductData() {
    let data = this.getLocalStorage();

    if (!data) of([]);
    return of(data);
  }

  deleteProductDataById(id) {
    let data: [] = this.getLocalStorage();
    let index = data.findIndex(el => el['id'] == id);
    data.splice(index, 1);
    this.setLocalStorage('productData', JSON.stringify(data));
    console.log(data);
    return of(data);
  }

  getProductDataById(id) {
    let data: [] = this.getLocalStorage();
    let product = data.filter(el => el['id'] == id);
    if (!product) return of({});
    return of(product[0]);
  }

  updateProductById(id, updatedValue) {
    let data: Array<any> = this.getLocalStorage();
    let index = data.findIndex(el => el['id'] == id);
    updatedValue['id'] = id;
    data.splice(index, 1, updatedValue);
    this.setLocalStorage('productData', JSON.stringify(data));
    return of(data);
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem('productData'));
  }

  setLocalStorage(keyName, value) {
    localStorage.setItem(keyName, value);
  }
}
