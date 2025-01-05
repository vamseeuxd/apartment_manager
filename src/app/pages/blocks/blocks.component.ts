import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';

@Component({
  selector: 'app-blocks',
  imports: [RouterLink, PopoverModule, ModalModule],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.scss',
})
export class BlocksComponent {
  apartmentId = input<string>();
  blocks = [
    { id: '01', name: 'Block 01' },
    { id: '02', name: 'Block 02' },
    { id: '03', name: 'Block 03' },
    { id: '04', name: 'Block 04' },
    { id: '05', name: 'Block 05' },
    { id: '06', name: 'Block 06' },
    { id: '07', name: 'Block 07' },
    { id: '08', name: 'Block 08' },
    { id: '09', name: 'Block 09' },
    { id: '10', name: 'Block 10' },
    { id: '21', name: 'Block 21' },
    { id: '22', name: 'Block 22' },
    { id: '23', name: 'Block 23' },
    { id: '24', name: 'Block 24' },
    { id: '25', name: 'Block 25' },
    { id: '26', name: 'Block 26' },
    { id: '27', name: 'Block 27' },
    { id: '28', name: 'Block 28' },
    { id: '29', name: 'Block 29' },
    { id: '30', name: 'Block 30' },
  ];
}
