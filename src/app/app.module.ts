import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routing} from './app.route';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';
import { SearchComponent } from './Components/search/search.component';
import { ArtistComponent } from './Components/artist/artist.component';
import { AlbumComponent } from './Components/album/album.component';
import { SpotifyService } from './services/spotify.service';

@NgModule({
  imports:      [ BrowserModule,Routing,FormsModule,HttpModule ],
  declarations: [ AppComponent,NavbarComponent,AboutComponent,SearchComponent,ArtistComponent,AlbumComponent],
  bootstrap:    [ AppComponent ],
  providers : [SpotifyService]
})
export class AppModule { }