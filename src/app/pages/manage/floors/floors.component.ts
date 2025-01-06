import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';

@Component({
  selector: 'app-floors',
  imports: [RouterLink, PopoverModule, ModalModule],
  templateUrl: './floors.component.html',
  styleUrl: './floors.component.scss',
})
export class FloorsComponent {
  apartmentId = input<string>();
  blockId = input<string>();
  floors = [
    { id: '01', name: 'Floor 01' },
    { id: '02', name: 'Floor 02' },
    { id: '03', name: 'Floor 03' },
    { id: '04', name: 'Floor 04' },
    { id: '05', name: 'Floor 05' },
    { id: '06', name: 'Floor 06' },
    { id: '07', name: 'Floor 07' },
    { id: '08', name: 'Floor 08' },
    { id: '09', name: 'Floor 09' },
    { id: '10', name: 'Floor 10' },
    { id: '21', name: 'Floor 21' },
    { id: '22', name: 'Floor 22' },
    { id: '23', name: 'Floor 23' },
    { id: '24', name: 'Floor 24' },
    { id: '25', name: 'Floor 25' },
    { id: '26', name: 'Floor 26' },
    { id: '27', name: 'Floor 27' },
    { id: '28', name: 'Floor 28' },
    { id: '29', name: 'Floor 29' },
    { id: '30', name: 'Floor 30' },
  ];
}
