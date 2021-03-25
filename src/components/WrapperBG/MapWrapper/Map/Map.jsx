import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function Map() {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{
            lat: 55.784199,
            lng: 49.118984
        }}/>
    );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map))
