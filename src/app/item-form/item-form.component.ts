import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent {
  itemForm: FormGroup;
  itemId: string | null = null;
  

  constructor(
    private fb: FormBuilder,
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.itemForm = this.fb.group({
      name: new FormControl('',[Validators.required]),
      quantity: new FormControl('',[Validators.required]),
      category: new FormControl('',[Validators.required]),
      status: new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    if (this.itemId) {
      this.itemService.getItemById(this.itemId).subscribe(item => {
        this.itemForm.patchValue(item);
      });
    }
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      if (this.itemId) {
        this.itemService.updateItem(this.itemId, this.itemForm.value).subscribe(() => {
          this.router.navigate(['/all-items']);
        });
      } else {
        this.itemService.addItem(this.itemForm.value).subscribe(() => {
          this.router.navigate(['/all-items']);
        });
      }
    }
  }
}
