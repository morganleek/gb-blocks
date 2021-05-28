function initMap() {
	if( document.querySelector('.gb-map') ) {
		const map = document.querySelector('.gb-map');
		if( map.dataset.key ) {
			const data = map.dataset;
			// console.log( data );
			const center = { lat: parseFloat( data.lat ), lng: parseFloat( data.lng ) };
			googleMap = new google.maps.Map( map, {
				center: center,
				zoom: parseInt( data.zoom )
			});

			new google.maps.Marker({
				position: center,
				googleMap,
				label: "LABEL"
			});
		}
	}
}

document.addEventListener( "DOMContentLoaded", function( e ) {
	if( document.querySelector('.gb-map') ) {
		const map = document.querySelector('.gb-map');
		if( map.dataset.key ) {
			let maps = document.createElement( 'script' );
			maps.async = true;
			maps.src = "https://maps.googleapis.com/maps/api/js?key=" + map.dataset['key'] + "&callback=initMap&libraries=&v=weekly";
			document.head.appendChild( maps );
		}
	}
});

