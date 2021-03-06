document.addEventListener( "DOMContentLoaded", function( e ) {
	document.querySelectorAll( '.wp-block-gb-block-posts .terms-filter' ).forEach( ( item ) => {
		item.addEventListener( 'change', ( e ) => { 
			const taxonomy = item.dataset.taxonomy;
			const term = e.target.selectedOptions[0].value;
			const url = window.location.href.split('?');
			if( term.length == 0 ) {
				// Reload without any parameters
				window.location = url[0];
			}
			else {
				// Go to that term
				window.location = url[0] + '/?gb-taxonomy=' + taxonomy + '&gb-term=' + term; 
			}
		} );
	} );
} );