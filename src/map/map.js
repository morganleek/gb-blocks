import './editor.scss';
import './style.scss';

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
				{ blockRender }
			</div>
		);
	}
} );