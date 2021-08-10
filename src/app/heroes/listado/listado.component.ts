import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroeBorrado: string = "";
  heroes: string[] = ['Spiderman', 'Ironman', 'Thor','Hulk','Capitan America'];

  borrarHeroe(){
     const heroetmp = this.heroes.shift() || "" ;
       this.heroeBorrado = heroetmp;
  }
}
