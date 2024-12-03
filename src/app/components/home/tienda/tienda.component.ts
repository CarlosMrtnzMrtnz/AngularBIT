import { Component } from '@angular/core';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {

    contador:number = 0

    restar () {
        this.contador = this.contador - 1
    }

}
