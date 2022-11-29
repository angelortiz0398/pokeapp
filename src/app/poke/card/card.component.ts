import { PokeService } from './../../services/poke.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  info: any;
  url: string = "";
  constructor(private pokeService: PokeService) {
  }
  ngOnInit(): void{
    this.pokeService.getPokeData(this.info.name).subscribe((res: any)=>{
      this.url= res.sprites.front_default;
    });
  }
}
