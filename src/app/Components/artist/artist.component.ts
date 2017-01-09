import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';

@Component({
  selector: 'artist',
  templateUrl: 'artist.component.html',
})
export class ArtistComponent implements OnInit { 

    id:string;
    artist:Artist[]; 
    albums:Album[];

    constructor(private spotifyService:SpotifyService,private activatedRoute:ActivatedRoute){

    }

    ngOnInit(){
        this.activatedRoute.params
        .map(params =>params['id'])
        .subscribe((id) => {
            this.spotifyService.getArtist(id)
            .subscribe((artist) => {
                this.artist = artist;
            })

            this.spotifyService.getAlbums(id)
            .subscribe((albums) => {
                this.albums = albums.items;
            })

        });  

    }

}