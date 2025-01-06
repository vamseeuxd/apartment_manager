import { Component, HostListener, inject } from '@angular/core';
import { Location } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  imports: [
    TabsModule,
    RouterOutlet,
    ButtonsModule,
    FormsModule,
    RouterLinkActive,
    RouterLink,
    ModalModule,
  ],
  providers: [BsModalService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  activePage = 0;

  isModalOpen = false;
  location: Location = inject(Location);
  router: Router = inject(Router);
  modalService: BsModalService = inject(BsModalService);

  ngOnInit(): void {
    this.setViewportHeight();
    this.router.events.subscribe(() => {
      if (this.isModalOpen) {
        this.closeModal();
      }
    });
    this.modalService.onShown.subscribe(() => {
      this.openModal();
    });
    this.modalService.onHidden.subscribe(() => {
      this.closeModal();
    });
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

  openModal() {
    this.isModalOpen = true;
    this.location.go('/modal');
  }

  closeModal() {
    this.isModalOpen = false;
    this.location.back();
  }
}
