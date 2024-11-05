import { Component } from '@angular/core';
import { LmsHeaderComponent } from './lms-header/lms-header.component';
import { LmsSidenavComponent } from './lms-sidenav/lms-sidenav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [LmsHeaderComponent,LmsSidenavComponent,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
