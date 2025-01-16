import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
  id: string;
  name: string;
  quantity: number;
  category: string;
  status: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) {}

  // Get all items
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  // Get a single item by ID
  getItemById(id: string): Observable<Item> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Item>(url);
  }

  // Add a new item
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }

  // Update an existing item
  updateItem(id: string, item: Item): Observable<Item> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Item>(url, item);
  }

  // Delete an item
  deleteItem(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}