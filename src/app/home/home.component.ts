import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  residences = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', status: 'Disponible' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', status: 'Disponible' },
    { id: 3, name: 'El Arij', address: 'Rades', status: 'Vendu' },
  ];
}
