import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import {Icon} from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import "leaflet/dist/leaflet.css";

function Localisation() {
    const position = [45.8765557, 4.8395051];
    return (
        <div className="Localisation d-flex container-fluid">
            <div className="info">
                <h1 className="titreinfo">Ou nous trouver ?</h1>
                <p className="texteinfo">Lorem ipsum dolor sit amet, consectetur llamco laboris nisi it esse cillum dolore eu fugiat nul epteur sint occaecat cupidatat non proid orem ipsum dolor sit amet, consectetur llamco laboris nisi it esse cillum dolore eu fugiat nul epteur sint occaecat cupidatat non proid </p>
                <p className="textehoraire">
                    Horaires : <br /><br /> lundi: 06h00-23h00 <br /> mardi 06h00–23h00 <br /> mercredi 06h00–23h00 <br /> jeudi 06h00–23h00 <br /> vendredi: 06h00–23h00 <br /> samedi: 06h00–23h00 <br /> dimanche: 09h00–16h00
                </p>
            </div>
            <div className="map">
                <MapContainer className="map"
                    center={position}
                    zoom={15}
                    style={{ height: 500, width: "100%" }}
                >
                    <Marker position={[45.876131966872485, 4.839662551411741]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        </div>
    );
}

export default Localisation;