import { Component, OnInit } from '@angular/core';
import {
  faPencilAlt,
  faBook,
  faTrashAlt,
  faEdit
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faPencilAlt = faPencilAlt;
  faBook = faBook;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  constructor() {}

  ngOnInit(): void {}
}
