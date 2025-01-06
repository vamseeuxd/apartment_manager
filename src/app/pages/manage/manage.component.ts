import { Component, input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-manage',
  imports: [RouterOutlet],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss',
})
export class ManageComponent {
}
