import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';

@Component({
  selector: 'app-flats',
  imports: [RouterLink, PopoverModule, ModalModule],
  templateUrl: './flats.component.html',
  styleUrl: './flats.component.scss'
})
export class FlatsComponent {
  apartmentId = input<string>();
  blockId = input<string>();
  floorId = input<string>();
  flats = [
    { id: '01', name: 'Flat 01' },
    { id: '02', name: 'Flat 02' },
    { id: '03', name: 'Flat 03' },
    { id: '04', name: 'Flat 04' },
    { id: '05', name: 'Flat 05' },
    { id: '06', name: 'Flat 06' },
    { id: '07', name: 'Flat 07' },
    { id: '08', name: 'Flat 08' },
    { id: '09', name: 'Flat 09' },
    { id: '10', name: 'Flat 10' },
    { id: '21', name: 'Flat 21' },
    { id: '22', name: 'Flat 22' },
    { id: '23', name: 'Flat 23' },
    { id: '24', name: 'Flat 24' },
    { id: '25', name: 'Flat 25' },
    { id: '26', name: 'Flat 26' },
    { id: '27', name: 'Flat 27' },
    { id: '28', name: 'Flat 28' },
    { id: '29', name: 'Flat 29' },
    { id: '30', name: 'Flat 30' },
  ];
}
