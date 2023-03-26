import { AppBar, Container, Box, Toolbar, Typography, IconButton, Icon } from '@mui/material';
import { ArrowBack, LocationOnOutlined } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const { kakao } = window;
const Map = () => {
  const [location, setLocation] = useState({
    getLatitude: 0,
    getLongitude: 0,
  });
  const navigate = useNavigate();
  navigator.geolocation.getCurrentPosition(getCurrentPS, getError);
  function getCurrentPS(position) {
    const Latitude = position.coords.latitude;
    const Longitude = position.coords.longitude;
    setLocation({ getLatitude: Latitude, getLongitude: Longitude });
  }
  function getError() {
    console.log("Error!");
  }
  const goToHome = () => {
    navigate('/');
  }
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(
        location.getLatitude,
        location.getLongitude
      ),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(
      location.getLatitude,
      location.getLongitude
    );
    let marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);

    // let iwContent = `<div>${location.getLatitude, location.getLongitude}</div>`,
    // const infowindow = new kakao.maps.InfoWindow({
    //   map: map,
    //   position: markerPosition,
    //   content: 'infoWindow'
    // })
    // infowindow.open(map, marker);
  }, [location.getLatitude, location.getLongitude]);
  return (
    <Container
      component="main"
      maxWidth="xs">
      <Box
        sx={{
          flexDirection: 'column',
          display: "flex",
          alignItems: 'center'
        }}>
        <AppBar
          sx={{ bgcolor: "#FFCC33" }}>
          <Toolbar>
            <IconButton
              size='large'
              color='inherit'
              edge='start'
              onClick={goToHome}>
              <ArrowBack />
            </IconButton>
            <Box
              //중앙 정렬
              display="block"
              margin='auto'>
              <Icon
                sx={{ mr: 1 }}><LocationOnOutlined /></Icon>
              <Typography
                variant='h6'
                component="span"
                sx={{
                  flexGrow: 1,
                  textAlign: 'center',
                  mr: '1.2em'
                }}>
                주변 시장 확인하기
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Box>
          <div>
            <div id="map"
              style={{
                border: '1em',
                marginTop: '3.5em',
                width: "26em",
                height: "20em",
              }}></div>
          </div>
        </Box>
      </Box>
    </Container>

  );
};

export default Map;