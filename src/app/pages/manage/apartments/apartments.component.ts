import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import {
  ApartmentsService,
  IApartment,
  IFilters,
} from './service/apartments.service';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-apartments',
  imports: [RouterLink, PopoverModule, ModalModule, CommonModule, FormsModule],
  templateUrl: './apartments.component.html',
  styleUrl: './apartments.component.scss',
})
export class ApartmentsComponent {
  apartmentService: ApartmentsService = inject(ApartmentsService);

  apartments$ = toSignal(this.apartmentService.apartments$, {
    initialValue: [],
  });
  filters$ = toSignal(this.apartmentService.filters$, { initialValue: [] });

  onFilterChange(key: string, label: string, event: Event): void {
    const inputElement = event.target as HTMLInputElement; // Cast to HTMLInputElement
    const isChecked = inputElement.checked;

    this.apartmentService.updateFilterState(key, label, isChecked);
  }

  addApartment(addNewFormRef: NgForm, addNewModal: ModalDirective): void {
    this.apartmentService.addApartment({
      ...addNewFormRef.value,
      id: new Date().getTime().toString(),
    });
    addNewFormRef.resetForm({}); // Reset the form
    addNewModal.hide();
  }

  updateApartment(editFormRef: NgForm, addNewModal: ModalDirective): void {
    this.apartmentService.updateApartment(editFormRef.value.id, {
      ...editFormRef.value,
    });
    addNewModal.hide();
  }

  deleteApartment(id: string, deleteConfirmationModal: ModalDirective): void {
    this.apartmentService.deleteApartment(id);
    deleteConfirmationModal.hide();
  }
}
