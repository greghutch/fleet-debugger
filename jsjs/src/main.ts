import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Loader } from '@googlemaps/js-api-loader';
import { JSJSConfig } from './JSJSConfig';


if (environment.production) {
  enableProdMode();
}

const cfg = new JSJSConfig();
const loader = new Loader({
  apiKey: cfg.apikey,
  version: "beta",
  // @ts-ignore
  libraries: ["journeySharing"]
});

// @angular/google-maps v12.x uses an older version maps typescript that
// conflicts.  Needed to add "skipLibCheck":true, to the compilerOptions
// section of tsconfig.json to work around

loader
  .load()
  .then((google) => {
      platformBrowserDynamic().bootstrapModule(AppModule)
        .catch(err => console.error(err));
  })
  .catch(e => {
    console.log('failed to load google maps', e);
  });

