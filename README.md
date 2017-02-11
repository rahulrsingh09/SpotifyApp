<h2>Spotify Music Search using Spotify APi and angular2</h2>

This Repo is Made from Angular 2 Webpack starter pack as the base https://github.com/AngularClass/angular2-webpack-starter.
Please folow the link if you want a quickstart guide to develop Angular 2 Applications.

This App Searches the Spotify Database for the Artists and then their music you can preview the music but you cannot listen as spotify is not available in india.

clone our repo

git clone --depth 1 https://github.com/rahulrsingh09/SpotifyApp

change directory to our repo

cd SpotifyApp

install the repo with npm

npm install

start the server

npm start

server

development

npm run server

production

npm run build:prod npm run server:prod Other commands

build files

development

npm run build:dev

production (jit)

npm run build:prod

AoT

npm run build:aot

AoT Don'ts

The following are some things that will make AoT compile fail.

Don’t use require statements for your templates or styles, use styleUrls and templateUrls, the angular2-template-loader plugin will change it to require at build time. Don’t use default exports. Don’t use form.controls.controlName, use form.get(‘controlName’) Don’t use control.errors?.someError, use control.hasError(‘someError’) Don’t use functions in your providers, routes or declarations, export a function and then reference that function name @Inputs, @Outputs, View or Content Child(ren), Hostbindings, and any field you use from the template or annotate for Angular should be public



