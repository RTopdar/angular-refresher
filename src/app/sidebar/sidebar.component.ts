import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-sidebar',
  imports: [MatListModule, MatDivider],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {}
