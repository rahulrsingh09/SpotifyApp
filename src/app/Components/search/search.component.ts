import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
})
export class SearchComponent  { 

    searchStr : string;
    searchRes :Artist[];

    constructor(private spotifyService:SpotifyService){

    }

    searchMusic(){
      this.spotifyService.searchMusic(this.searchStr).subscribe((response) => {
        this.searchRes = response.artists.items;
      })
    }

 }
