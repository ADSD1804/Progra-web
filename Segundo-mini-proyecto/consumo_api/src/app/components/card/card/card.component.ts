import { Component, Input } from '@angular/core';
import { ServiceService } from '../../../services/service.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  category: any;

  name = new FormControl('');
  image = new FormControl('');

  editForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  });

  constructor(private serviceService: ServiceService) {}

  deleteCategory(id: number) {
    console.log('Deleting', this.category.id);

    this.serviceService.deleteC(this.category.id).subscribe((res) => {
      console.log('Category ', this.category.id, ' was deleted.' ,res);
    }, (err) => {
      console.log('Category ', this.category.id, ' was not deleted.' ,err);
    })
  }

  openEditModal() {
    this.editForm.setValue({
      name: this.category.name,
      image: this.category.image
    });
    const modal = document.getElementById('editModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeEditModal() {
    const modal = document.getElementById('editModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  editCategory() {
    const updatedProduct = {
      ...this.category,
      ...this.editForm.value
    };

    this.serviceService.updateCategory(this.category.id, updatedProduct).subscribe(response => {
      console.log('Producto actualizado:', response);
      Object.assign(this.category, updatedProduct);
      this.closeEditModal();
    }, error => {
      console.error('Error al actualizar el producto:', error);
    });
  }

}
