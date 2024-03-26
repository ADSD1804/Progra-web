import { Component, OnInit } from '@angular/core';
import { FakeApiService } from '../fake-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private fakeApiService: FakeApiService) { }

  ngOnInit(): void {
    this.fakeApiService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

}
