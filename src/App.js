import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
//IMPORT UNTUK
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -7.7742906, lng: 110.374724 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -7.7742906, lng: 110.374724 }} />}
  </GoogleMap>
))


class App extends Component {
  
  render() {
    return (
      <div>
      <div className="text-center">
        <br></br>
        <h1>GOOGLE MAPS API PAKE REACT JS</h1>
        <hr></hr><br></br><br></br>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            MAPS
            <div>
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDvuCsuWZL2P7WgIV7FSpvggfMzHIMydrk&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
