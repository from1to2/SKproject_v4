import React, { useState, useEffect } from 'react';
const { kakao } = window;
const Map = () => {
  const [location, setLocation] = useState({
    getLatitude: 0,
    getLongitude: 0,
  });
  navigator.geolocation.getCurrentPosition(getCurrentPS, getError);
  function getCurrentPS(position) {
    let Latitude = position.coords.latitude;
    let Longitude = position.coords.longitude;
    setLocation({ getLatitude: Latitude, getLongitude: Longitude });
  }
  function getError() {
    console.log("Error!");
  }
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(
        location.getLatitude,
        location.getLongitude
      ),
      level: 2,
    };
    const map = new kakao.maps.Map(container, options);
    let markerPosition = new kakao.maps.LatLng(
      location.getLatitude,
      location.getLongitude
    );
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, [location.getLatitude, location.getLongitude]);
  return (
    <div>
      <div id="map" style={{
        width: "350px",
        height: "350px",
        padding: "5px"
      }
      }></div>
    </div>
  );
};

export default Map;