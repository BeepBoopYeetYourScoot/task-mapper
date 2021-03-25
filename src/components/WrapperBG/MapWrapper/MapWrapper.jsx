import m from './MapWrapper.module.css'
import { GoogleApiWrapper } from 'google-maps-react'

export const MapWrapper = (props) => {
    return (
        <div className={m.MapWrapper}>
            <GoogleApiWrapper />
        </div>
    )
}

export default GoogleApiWrapper(
    (props) => ({
        apiKey: props.apiKey,
        language: props.language
    })
)(MapWrapper)