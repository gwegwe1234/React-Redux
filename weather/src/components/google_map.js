import React from 'react';
import { GoodgleMapLoader, GoogleMap, GoogleMapLoader} from 'react-google-maps';

export default (props) => {
    return(
        <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}} /> }
            googleMapElement={
                <GoogleMap defaultZoon={12} defaultCenter={{lat: props.lat, lng:props.lon}} />
            }
        />
    );
}