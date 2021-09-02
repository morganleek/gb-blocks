import './editor.scss';
import './style.scss';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 
const { useBlockProps, InspectorControls } = wp.blockEditor;
const { TextControl } = wp.components;
const { serverSideRender: ServerSideRender } = wp;
const { Panel, PanelBody, PanelRow } = wp.components;

const { more } = '@wordpress/icons';

registerBlockType( 'gb/block-map', {
	apiVersion: 2,
	title: __( 'Map' ), 
	icon: 'admin-site-alt2', 
	category: 'common', 
	keywords: [
		__( 'Map' ),
		__( 'Appearance' ),
	],
	attributes: {
		key: {
			type: 'string',
			default: "Key" 
		},
		zoom: {
			type: 'string',
			default: "12"
		},
		lat: {
			type: 'string',
			default: "-31.0"
		},
		lng: {
			type: 'string',
			default: "128.0"
		},
		title: {
			type: 'string',
			default: ''
		},
		mediaType: {
			type: 'string',
		},
		mediaUrl: {
			type: 'string',
		},
		iconWidth: {
			type: 'string',
			default: "32"
		},
		iconHeight: {
			type: 'string',
			default: "32"
		}
	},

	edit: ( props ) => {
		const { attributes, setAttributes } = props;

		const blockProps = useBlockProps();

		// let blockRender;
		// if( attributes.key ) {
		const blockRender = <ServerSideRender
			block="gb/block-map"
			attributes={ { 
				key: attributes.key,
				zoom: attributes.zoom,
				lat: attributes.lat,
				lng: attributes.lng,
				title: attributes.title,
				mediaUrl: attributes.mediaUrl,
				iconWidth: attributes.iconWidth,
				iconHeight: attributes.iconHeight
			} }
		/>
		// }
		// else {
		// 	blockRender = <p>Enter a key, zoom, lat and lng.</p>
		// }

		const center = {
			lat: ( attributes.lat ) ? parseFloat( attributes.lat ) : 0,
			lng: ( attributes.lng ) ? parseFloat( attributes.lng ) : 0,
		}
		const marker = <Marker position={ center } label={ attributes.label } />
		let map = ( attributes.key ) ?
			<div class="map-wrapper">
				<LoadScript
					googleMapsApiKey={ attributes.key }
				>
					<GoogleMap
						center={ center }
						zoom={ ( attributes.zoom ) ? parseFloat( attributes.zoom ) : 12 }
					>
						{ marker }
					</GoogleMap>
				</LoadScript> 
			</div> :
			<p>Enter a valid API key</p>;

		return (
			<div { ... blockProps }>
				<InspectorControls>
					<PanelBody title="Map Settings" icon={ more } initialOpen={ true }>
						<TextControl
							label="Key"
							value={ attributes.key }
							onChange={ ( newKey ) => setAttributes( { key: newKey } ) }
						/>
						<TextControl
							label="Zoom"
							value={ attributes.zoom }
							onChange={ ( newZoom ) => setAttributes( { zoom: newZoom } ) }
						/>
						<TextControl
							label="Lat"
							value={ attributes.lat }
							onChange={ ( newLat ) => setAttributes( { lat: newLat } ) }
						/>
						<TextControl
							label="Lng"
							value={ attributes.lng }
							onChange={ ( newLng ) => setAttributes( { lng: newLng } ) }
						/>
						<TextControl
							label="Title"
							value={ attributes.title }
							onChange={ ( newtitle ) => setAttributes( { title: newtitle } ) }
						/>
						<TextControl
							label="Icon URL"
							value={ attributes.mediaUrl }
							onChange={ ( newUrl ) => setAttributes( { mediaUrl: newUrl } ) }
						/>
						<TextControl
							label="Icon Width"
							value={ attributes.iconWidth }
							onChange={ ( newWidth ) => setAttributes( { iconWidth: newWidth } ) }
						/>
						<TextControl
							label="Icon Height"
							value={ attributes.iconHeight }
							onChange={ ( newHeight ) => setAttributes( { iconHeight: newHeight } ) }
						/>
					</PanelBody>
				</InspectorControls>
				{ map }
			</div>
		);
	},
	save: ( props ) => {
		const { attributes } = props;
		const blockProps = useBlockProps.save();

		const center = {
			lat: ( attributes.lat ) ? parseFloat( attributes.lat ) : 0,
			lng: ( attributes.lng ) ? parseFloat( attributes.lng ) : 0,
		}
		const marker = <Marker position={ center } label={ attributes.label } />
		let map = ( attributes.key ) ?
			<div class="map-wrapper">
				<p>Hello</p>
			</div> :
			<p>Enter a valid API key</p>;

		return (
			<div { ... blockProps }>
				<div class="gb-map" 
					data-key={ attributes.key } 
					data-lat={ attributes.lat } 
					data-lng={ attributes.lng } 
					data-zoom={ attributes.zoom } 
					data-title={ attributes.title } 
					data-media-url={ attributes.mediaUrl }
					data-icon-width={ attributes.iconWidth }
					data-icon-height={ attributes.iconHeight }
				></div>
			</div>
		);
	}
} );