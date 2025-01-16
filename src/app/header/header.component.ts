import { Component } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TabComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentDate: Date = new Date();
  constructor(){}

}
