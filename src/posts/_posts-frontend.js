document.addEventListener( "DOMContentLoaded", function( e ) {
	document.querySelectorAll( '.wp-block-gb-block-posts .terms-filter' ).forEach( ( item ) => {
		item.addEventListener( 'change', ( e ) => { 
			const taxonomy = item.dataset.taxonomy;
			const term = e.target.selectedOptions[0].value;
			const url = window.location.href.split('?');
			window.location = url[0] + '/?gb-taxonomy=' + taxonomy + '&gb-term=' + term; 
		} );
	} );
} );