import { PokeList } from './../poke/interfaces/pokeList.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokeData } from '../poke/interfaces/pokeData.interface';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}

  getList(page: number = 0) {
    return this.http.get<PokeList>(`${this.baseUrl}`,{
      params: {
        "offset": page,
        "limit": 8
      },
    });
    //return this.http.get(this.baseUrl + '?limit=8&offset=0');
  }
  getPokeData(name: string) {
    return this.http.get<PokeData>(this.baseUrl + name);
  }
}
