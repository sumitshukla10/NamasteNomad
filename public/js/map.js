mapboxgl.accessToken =mapToken;
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v12', 
center: listing.geometry.coordinates, 
zoom: 9
});

const marker1 = new mapboxgl.Marker({color:"red"})
.setLngLat(listing.geometry.coordinates)//Listing.geometry.coordinates
.setPopup(new mapboxgl.Popup({offset: 25})
.setHTML(`<h4>${listing.title}</h4>
<p>welcome to NamasteNomad,exact location will be provided after booking</p>`))
.addTo(map);