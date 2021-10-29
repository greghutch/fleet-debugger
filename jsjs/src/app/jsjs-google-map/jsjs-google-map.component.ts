import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps'
import { JSJSConfig } from '../../JSJSConfig';

@Component({
  selector: 'jsjs-google-map',
  template: '<div class="map-container"></div><ng-content></ng-content>',
})
export class JsJsMapComponent extends GoogleMap {
  createMap(element: HTMLElement, options:google.maps.MapOptions) {
      const cfg = new JSJSConfig();
      // @ts-ignore
      function authTokenFetcher(option) {
         console.log('authTokenFetcher called', cfg.jwt, option);
         return {
            token: cfg.jwt,
            expiresInSeconds: 3300,
         };
      }

      // @ts-ignore
      const locationProvider = new google.maps.journeySharing.FleetEngineTripLocationProvider({
         projectId: cfg.projectId,
         authTokenFetcher: authTokenFetcher,
         tripId: cfg.tripId,
      });
      // @ts-ignore
      locationProvider.addListener('update', e => {
         console.log('Trip Update', e.trip);
      });
      // @ts-ignore
      locationProvider.addListener('error', e => {
         console.log('error', e);
      });

    // @ts-ignore
    const js = new google.maps.journeySharing.JourneySharingMapView({element:element, locationProvider});
    this.googleMap = js.map;

    // Provide default zoom & center so at least the map loads if trip id is bad or old
    // @ts-ignore
    this.googleMap.setCenter({ lat: -34.397, lng: 150.644 });
    // @ts-ignore
    this.googleMap.setZoom(5);
  }
}
