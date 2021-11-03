import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Ironman', 'Hulk', 'Thor', 'Spiderman', 'Wonderwoman', 'Superman'];
  heroeBorrado: string = '';

  constructor() { }

  eliminarHeroe(): void{
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
