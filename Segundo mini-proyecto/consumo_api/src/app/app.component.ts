import { CommonModule} from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card/card.component';
import { ServiceService } from './services/service.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  apiUrl = 'http://localhost:3000/categories';
  title = 'consumo_api';
  categories: any[] = [];
  category: any;

  name = new FormControl('');
  image = new FormControl('');

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getCategories().subscribe(data => {
      this.categories = data;
      data.map((item: any) => {

        let imageStringify = JSON.stringify(item.images); // convertimos el array de imagenes a string
        
        let imageNoGarbage = imageStringify
        
        .substring(2, imageStringify.length - 2)
        
        .replaceAll('\\', ' ')
        
        .replaceAll('""', '"')
        
        .replaceAll('" "', '"')
        
        .replaceAll(' ', '');
        
        
        try {
        item.images = JSON.parse(imageNoGarbage);
        
        item.imagesActual = item.images[0];
        
        } catch (e) {}
        
        });
    });
  }

  onSummit() {
      const newCategory = {
        name: this.name.value,
        image: this.image.value
      }
      this.serviceService.createCategory(newCategory).subscribe((data: any) => {
        console.log(data);
        this.categories.push(data);
      })
  }
}

