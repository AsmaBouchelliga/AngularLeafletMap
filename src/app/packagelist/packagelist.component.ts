import { Component, OnInit } from '@angular/core';
import packagesDATA from '../packages.json';
import { icon, latLng, marker, Marker, tileLayer} from 'leaflet';
import * as L from 'leaflet';
@Component({
  selector: 'app-packagelist',
  templateUrl: './packagelist.component.html',
  styleUrls: ['./packagelist.component.scss']
})
export class PackagelistComponent implements OnInit {
  public isVisible: boolean = false;
  markerDetails = null;
  map: L.Map|undefined;
  lat = 32.879966;
  lon = 36.726909;
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }),
    ],
    zoom: 7,
    center: latLng([this.lat, this.lon]),
  };
  picArray = [
    {
        imageIcon:'assets/leaflet/Redmet ash sharqiyah.PNG'
    },
    
]

  markers: Marker[] = [];  ngOnInit(): void {
    packagesDATA.forEach(value=>{
      this.addMarker(value);
    });
  }  
  
  
  addMarker(value: any) {
    const newMarker = marker(
      [value.latitude, value.longitude],
      {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/leaflet/marker3.png',
          
        }),
      });
    
    /*newMarker.bindPopup(value.description);
    newMarker.openPopup();*/
    newMarker.on('click', (marker) => {this.showAlert(marker);});
    this.markers.push(newMarker);
  }
  
  showAlert(marker:any) : void {
     
    /*if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;*/
    const pack = packagesDATA.find(key=> key.latitude=== marker.latlng.lat && 
      key.longitude === marker.latlng.lng);
      this.markerDetails = pack;
    console.log(pack);
    // setTimeout(()=> this.isVisible = false,2500)
  }

}