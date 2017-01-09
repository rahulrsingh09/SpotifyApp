import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';

@Component({
  selector: 'album',
  templateUrl: 'album.component.html',
})
export class AlbumComponent implements OnInit { 

    id:string;
    album:Album[];

    constructor(private spotifyService:SpotifyService,private activatedRoute:ActivatedRoute){

    }

    ngOnInit(){
        this.activatedRoute.params
        .map(params =>params['id'])
        .subscribe((id) => {
            this.spotifyService.getAlbum(id)
            .subscribe((album) => {
                this.album = album ;
            })

        });  

    }

 }
