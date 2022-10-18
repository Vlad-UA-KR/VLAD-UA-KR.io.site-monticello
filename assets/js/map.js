const mapEl = document.querySelector('#map');
let position = {
	lat: 53.133674099264425,
	lng: -6.610453688842069
};
let options = {
	center: position,
	zoom: 15,
	styles: [
		{
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#f5f5f5"
				}
			]
		},
		{
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#616161"
				}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"color": "#f5f5f5"
				}
			]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#bdbdbd"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#eeeeee"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#757575"
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#e5e5e5"
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#9e9e9e"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#757575"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#dadada"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#616161"
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#9e9e9e"
				}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#e5e5e5"
				}
			]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#eeeeee"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#c9c9c9"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#9e9e9e"
				}
			]
		}
	]
};

const url = 'https://cdn0.iconfinder.com/data/icons/aami-flat-map-pins-and-navigation/64/location-06-512.png';

function initMap() {

	let map = new google.maps.Map(mapEl, options);

	let marker = new google.maps.Marker({
		position: position,
		map: map,
		icon: { url: url, scaledSize: new google.maps.Size(45, 45) },
	});

	let info = new google.maps.InfoWindow({
		content: '<h3 class="map__title">We are working</h3><p class="map__text">mon - fra : 9:00 - 18:00<br>sat : 10:00 - 16:00<br>sun : closed</p>'
	});

	marker.addListener('click', function () {
		info.open(map, marker);
	});
}









// Initialize and add the map

// function initMap() {

// 	// The location of IF

// 	const coordsIF = { lat: lat, lng: lng };

// 	// The map, centered at IF

// 	const map = new google.maps.Map(document.getElementById("map"), {
// 		zoom: 15,
// 		center: coordsIF,
// 	});

// 	// The marker, positioned at IF

// 	const marker = new google.maps.Marker({
// 		position: coordsIF,
// 		map: map,
// 	});
// }

// window.initMap = initMap;