import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [TabsModule, RouterOutlet, ButtonsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {


  activePage = 0;

  ngOnInit(): void {
    this.setViewportHeight();
  }

  @HostListener('window:resize')
  onResize() {
    this.setViewportHeight();
  }

  private setViewportHeight(): void {
    const viewportHeight = window.innerHeight;
    document.documentElement.style.setProperty(
      '--vh',
      `${viewportHeight * 0.01}px`
    );
  }
}
