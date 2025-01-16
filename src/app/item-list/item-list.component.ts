import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService,  Item } from '../item.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  items: Item[] = [];
  filterStatus: string | null = null;
  showAddForm: boolean = false; 
  currentItem: Item | null = null; 

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.filterStatus = data['status'] || null;
      this.getItems();
    });
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => {
      if (this.filterStatus) {
        this.items = items.filter(item => item.status === this.filterStatus);
      } else {
        this.items = items;
      }
    });
  }

  editItem(id: string): void {
    this.router.navigate(['/edit-item', id]);
  }

  navigateToAddItem(): void {
    this.router.navigate(['/add-item']);
  }

  deleteItem(id: string): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.itemService.deleteItem(id).subscribe(() => {
        this.getItems(); 
      });
    }
  }

}
