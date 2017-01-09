import {Routes,RouterModule} from '@angular/router';
import { SearchComponent } from './Components/search/search.component';
import { AboutComponent } from './Components/about/about.component';
import { ArtistComponent } from './Components/artist/artist.component';
import { AlbumComponent } from './Components/album/album.component';

const routes : Routes = [
    {
        path:'',
        component:SearchComponent 
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'artist/:id',
        component:ArtistComponent
    },
    {
        path:'album/:id',
        component:AlbumComponent
    }
];
export const Routing = RouterModule.forRoot(routes);