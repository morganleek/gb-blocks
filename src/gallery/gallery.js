import './editor.scss';
import './style.scss';

// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 
const { useBlockProps, InnerBlocks } = wp.blockEditor; // InspectorControls
// const { TextControl } = wp.components;
// const { serverSideRender: ServerSideRender } = wp;
// const { Panel, PanelBody, PanelRow } = wp.components;

const { more } = '@wordpress/icons';

const ALLOWED_BLOCKS = [ 'core/cover' ];

registerBlockType( 'gb/block-gallery', {
	apiVersion: 2,
	title: __( 'Gallery Slider' ), 
	icon: 'format-gallery', 
	category: 'common', 
	keywords: [
		__( 'Gallery' ),
		__( 'Slider' ),
	],
	attributes: {},

	edit: () => {
		const blockProps = useBlockProps();

		return (
			<div { ...blockProps }>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
			</div>
		);
	},

	save: () => {
		const blockProps = useBlockProps.save();

		return (
			<div { ...blockProps }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );