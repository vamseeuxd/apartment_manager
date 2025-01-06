import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ModalModule } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-apartments',
  imports: [RouterLink, PopoverModule, ModalModule],
  templateUrl: './apartments.component.html',
  styleUrl: './apartments.component.scss'
})
export class ApartmentsComponent {
  apartments = [
    { id: '01', name: 'Apartment 01' },
    { id: '02', name: 'Apartment 02' },
    { id: '03', name: 'Apartment 03' },
    { id: '04', name: 'Apartment 04' },
    { id: '05', name: 'Apartment 05' },
    { id: '06', name: 'Apartment 06' },
    { id: '07', name: 'Apartment 07' },
    { id: '08', name: 'Apartment 08' },
    { id: '09', name: 'Apartment 09' },
    { id: '10', name: 'Apartment 10' },
    { id: '21', name: 'Apartment 21' },
    { id: '22', name: 'Apartment 22' },
    { id: '23', name: 'Apartment 23' },
    { id: '24', name: 'Apartment 24' },
    { id: '25', name: 'Apartment 25' },
    { id: '26', name: 'Apartment 26' },
    { id: '27', name: 'Apartment 27' },
    { id: '28', name: 'Apartment 28' },
    { id: '29', name: 'Apartment 29' },
    { id: '30', name: 'Apartment 30' },
  ];
}
