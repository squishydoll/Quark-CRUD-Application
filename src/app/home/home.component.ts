import { Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addDataForm: FormGroup;

  constructor(private dataService: DataService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.addDataForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
    });
  }

  addData() {
    this.dataService.addingData(this.addDataForm.value).subscribe(el => {
      if (el) {
        this.snackBar.open('Product Added', '', {
          duration: 2000
        });
      } else {
        this.snackBar.open('Some Issue in adding the product', '', {
          duration: 2000
        });
      }
    });
  }

  get name() {
    return this.addDataForm.controls['name'];
  }
  get description() {
    return this.addDataForm.controls['description'];
  }
  get price() {
    return this.addDataForm.controls['price'];
  }
}
