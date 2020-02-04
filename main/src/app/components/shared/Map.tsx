import React, { useRef, useEffect } from 'react';
import { Location } from "app/schemas/schema";

interface MapProps {
  locations: Location[]
  mapCenter: Location
}

const Map: React.FC<MapProps> = ({ mapCenter, locations }) => {
  const mapEle = React.useRef() as React.MutableRefObject<HTMLDivElement>
  const map = useRef<google.maps.Map>();
  const directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: true});
  
  useEffect(() => {

    map.current = new google.maps.Map(mapEle.current, {
      center: {
        lat: mapCenter.lat,
        lng: mapCenter.lng
      },
      zoom: 7,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    });
    directionsRenderer.setMap(map.current)

  var directionsService = new google.maps.DirectionsService();
  var directionsRequest:any = {
    origin: "Woodbridge, NJ", 
    destination: "Newark, NJ",
    waypoints: [{
      location: 'clark, NJ',
      stopover: true
    },
      {
        location: 'Kenilworth, NJ',
        stopover: true
      }],
    provideRouteAlternatives: false,
    travelMode: 'DRIVING',
    drivingOptions: {
    departureTime: new Date(),
    trafficModel: 'pessimistic'
  },
  unitSystem: google.maps.UnitSystem.IMPERIAL
  };
  directionsService.route(directionsRequest, function(response:any, status:any) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(response);
      var myRoute = response.routes[0].legs;
      for (var i = 0; i <= myRoute.length-1; i++){
        addMarkers(myRoute[i].start_location.lat(), myRoute[i].start_location.lng(), {name:'SCHNEIDER',stop:i+1});
        i === myRoute.length-1 && addMarkers(myRoute[i].end_location.lat(), myRoute[i].end_location.lng(), {name:'SCHNEIDER',stop:i+2});
      }
    }
  });

  map.current.setOptions({streetViewControl: false, mapTypeControl:false, fullscreenControl:false});
    google.maps.event.addListenerOnce(map.current, 'idle', () => {
      if (mapEle.current) {
        mapEle.current.classList.add('show-map');
      }
    });

    function addMarkers(lat:any, lng:any, content:any) {
      locations.forEach((markerData) => {
        let infoWindow = new google.maps.InfoWindow({
          content: `<h5>${content.name}</h5><div>---------------------------</div>`
        });

          var template = [
            '<?xml version="1.0"?>',
                '<svg viewBox="12 12 70 70" fill="red" version="1.1" xmlns="http://www.w3.org/2000/svg">',
                    '<ellipse xmlns="http://www.w3.org/2000/svg" cx="48.5" cy="35.1" rx="16" ry="16" fill="#fff"/><path xmlns="http://www.w3.org/2000/svg" fill="#ff6418" d="M48,13.1c-12.1,0-22,10.9-22,24.2c0,12,18,37.5,22,43.1c4-5.6,22-31.1,22-43.1C70,23.9,60.1,13.1,48,13.1z M48.5,50.1    c-8.5,0-15.5-6.7-15.5-15s7-15,15.5-15S64,26.8,64,35.1S57,50.1,48.5,50.1z" /><text x="39" style="font-size: 30px;font-weight:bold;font-family: Arial;" y="46" fill="#000">'+content.stop+'</text>',
                '</svg>'
            ].join('\n');
        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map.current,
          icon: { url: 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(template), scaledSize: new google.maps.Size(38, 38) },
          title: content.name,
          optimized: false
        });
  
        marker.addListener('click', () => {
          infoWindow.open(map.current!, marker);
        });
      });
    }

  }, [mapCenter, locations]);
  return (
    <div ref={mapEle} className="map-canvas"></div>
  );
}

export default Map;