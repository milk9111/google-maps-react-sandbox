import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from "react";

export class MapContainer extends React.Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>Showing the map</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(MapContainer)

























/*import React, { Component } from 'react';
import GoogleApiComponent from 'google-maps-react';
import './App.css';
import * as ReactDOM from "react-dom";

const __GAPI_KEY__ = "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo";


export class Map extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
    }

    componentDidMount() {
        this.loadMap();
    }

    loadMap() {
        if (this.props && this.props.google) {
            // google is available
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let zoom = 14;
            let lat = 37.774929;
            let lng = -122.419416;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            });
            this.map = new maps.Map(node, mapConfig);
        }
    }

    render() {
        return (
            <div ref='map'>
                Loading map...
            </div>
        )
    }
}

export class Container extends Component {

    render() {
        const style ={
            width: '100vw',
            height: '100vh'
        };

        return (
            <div style={style}>
                <Map google={this.props.google}/>
            </div>
        )
    }
}

//export default Container;

export default new GoogleApiComponent({
    bootstrapURLKeys: __GAPI_KEY__
});*/
