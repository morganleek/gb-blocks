function initMap() {
	document.querySelectorAll('.gb-map').forEach( ( wrapper, k ) => {
		// const map = document.querySelector('.gb-map');
		if( wrapper.dataset.key ) {
			const { lat, lng, zoom, title, mediaUrl, iconWidth, iconHeight } = wrapper.dataset;
			const center = { lat: parseFloat( lat ), lng: parseFloat( lng ) };
			const map = new google.maps.Map( wrapper, {
				center: center,
				zoom: parseInt( zoom )
			});

			if( mediaUrl && iconWidth && iconHeight ) {
				// Create icon
				const image = {
					url: mediaUrl,
					scaledSize: new google.maps.Size( iconWidth, iconHeight )
				};
				// Add to map
				new google.maps.Marker({
					position: center,
					map,
					icon: image,
					title: title,
				});
			}
			else {
				// Add to map generic marker
				new google.maps.Marker({
					position: center,
					map,
					title: title,
				});
			}
		}
	} ); 
}

document.addEventListener( "DOMContentLoaded", function( e ) {
	if( document.querySelector('.gb-map') ) {
		// First Map Key
		const map = document.querySelector('.gb-map');
		if( map.dataset.key ) {
			let maps = document.createElement( 'script' );
			maps.async = true;
			maps.src = "https://maps.googleapis.com/maps/api/js?key=" + map.dataset['key'] + "&callback=initMap&libraries=&v=weekly";
			document.head.appendChild( maps );
		}
	}
});

