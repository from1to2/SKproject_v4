import React from 'react';
const { kakao } = window;

const Map = () => {
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    function showPosition(position) {
        setTimeout(() => {
            let container = document.getElementById('map');
            let options = {
                center: new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude),
                level: 3
            };
            let map = new kakao.maps.Map(container, options);
            let markerPosition = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);
            let marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
        }, 500)
    }

    getLocation();

    return (
        <>
            <div id="map" style={{ width: '500px', height: '400px' }}></div>
        </>
    )
};

export default Map;