import React from "react";
import { Parser } from "html-to-react";

const Page2 = () => {
  const rawHtml = `
    <html>
    <head>
      <title>Shortest Path</title>
      <style>#map {
          height: 400px;
          width: 100%;
      }</style>
    </head>
    <body>
     <div>
      <div id="map"></div>
      <script>
        function initMap() {
          var lineSymbol = {
          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
          fillOpacity: 1,
          scale: 2
      };
     var polylineDotted = {
          strokeColor: '#9966ff',
          strokeOpacity: 0,
          fillOpacity: 0,
          icons: [{
              icon: lineSymbol,
              offset: '0',
              repeat: '10px'
          }],
      };
         var directionsService = new google.maps.DirectionsService();
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
           // center: {lat: 41.85, lng: -87.65}
          });
          var locations = [
          // {lat: 13.0569467, lng: 80.2424690}, // Ambathur Branch
          {lat: 12.6819372, lng: 79.98884129999999}, // Chengalpattu
           // {lat:  12.9249308, lng: 80.1000026}, // Tambaram
            {lat:  12.6207821, lng: 80.1944915}, // Mahalingapuram
            {lat: 12.74111, lng: 80.1261093}, // Ammapettai, Tamil Nadu 603108
          
            {lat: 12.674585, lng: 80.0380188}, // Pulleri  
         
          ];
          var waypoints = [];
          for (var i = 0; i < locations.length; i++) {
            waypoints.push({
              location: locations[i],
              stopover: true
            });
          }
          directionsService.route({
            origin:       {lat: 13.0569467, lng: 80.2424690}, 
            destination:      {lat:  12.9249308, lng: 80.1000026}, 
            waypoints: waypoints,
            optimizeWaypoints: true,
            travelMode: 'DRIVING'
          }, function(response, status) {
            if (status === 'OK') {
              console.log('Response: ', response);
              var directionsRenderer = new google.maps.DirectionsRenderer({
                map: map,
                directions: response,
                suppressMarkers: false,
          polylineOptions: polylineDotted,
                dragable: true,
              });
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
        }
     </script>
      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAoTPbmVab1XaHKYrcd6BHZQeZtOHKZMqU&callback=initMap">
      </script>
     </div>
    </body>
  </html>
    `;
  return (
    <div style={{ backgroundColor: "whitesmoke", color: "black" }}>
      {/* hi{Parser().parse(rawHtml)} */}
      <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
    </div>
  );
};

export default Page2;
