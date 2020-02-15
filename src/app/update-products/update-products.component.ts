import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {
  productDetails: Object;
  id;
  updateForm: FormGroup;
  constructor(
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
    });

    this.activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.dataService.getProductDataById(this.id).subscribe(data => {
        this.updateForm.patchValue({
          id: data['id'],
          name: data['name'],
          description: data['description'],
          price: data['price']
        });
      });
    });
  }

  updateProduct() {
    this.dataService.updateProductById(this.id, this.updateForm.value).subscribe(el => {
      this.snackBar.open('Product Updated', '', {
        duration: 2000
      });
      setTimeout(() => {
        this.goToHome();
      }, 1000);
    });
  }

  goToHome() {
    this.router.navigate(['/']);
  }
  get name() {
    return this.updateForm.controls['name'];
  }

  get description() {
    return this.updateForm.controls['description'];
  }

  get price() {
    return this.updateForm.controls['price'];
  }
}
