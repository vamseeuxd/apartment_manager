import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-flat-details',
  imports: [RouterLink, ModalModule],
  templateUrl: './flat-details.component.html',
  styleUrl: './flat-details.component.scss',
})
export class FlatDetailsComponent {
  apartmentId = input<string>();
  blockId = input<string>();
  floorId = input<string>();
  flatId = input<string>();
}
