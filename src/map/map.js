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
				title: attributes.title
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
					<Panel>
						<PanelBody title="Map Settings" icon={ more } initialOpen={ true }>
							<PanelRow>
								<TextControl
									label="Key"
									value={ attributes.key }
									onChange={ ( newKey ) => setAttributes( { key: newKey } ) }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label="Zoom"
									value={ attributes.zoom }
									onChange={ ( newZoom ) => setAttributes( { zoom: newZoom } ) }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label="Lat"
									value={ attributes.lat }
									onChange={ ( newLat ) => setAttributes( { lat: newLat } ) }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label="Lng"
									value={ attributes.lng }
									onChange={ ( newLng ) => setAttributes( { lng: newLng } ) }
								/>
							</PanelRow>
							<PanelRow>
								<TextControl
									label="Title"
									value={ attributes.title }
									onChange={ ( newtitle ) => setAttributes( { title: newtitle } ) }
								/>
							</PanelRow>
						</PanelBody>
					</Panel>
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
				<div class="gb-map" data-key={ attributes.key } data-lat={ attributes.lat } data-lng={ attributes.lng } data-zoom={ attributes.zoom } data-title={ attributes.title } ></div>
			</div>
		);
	}
} );