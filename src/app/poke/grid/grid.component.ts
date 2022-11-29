import { PokeService } from './../../services/poke.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  pokeList: Array<any> = [];
  page: number = 0;
  constructor(private pokeService: PokeService){
    pokeService.getList().subscribe((res:any)=>{
      this.pokeList = res.results;
    });
  }

  nextPage(){
    this.page += 8;
    this.pokeService.getList(this.page).subscribe((res:any)=>{
      this.pokeList = res.results;
    });
  }
  prevPage(){
    this.page -= 8;
    this.pokeService.getList(this.page).subscribe((res:any)=>{
      this.pokeList = res.results;
    });
  }
}
