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

const attributes = {};
const supports = {
	align: true
}

registerBlockType( 'gb/block-gallery', {
	apiVersion: 2,
	title: __( 'Gallery Slider' ), 
	icon: 'format-gallery', 
	category: 'common', 
	keywords: [
		__( 'Gallery' ),
		__( 'Slider' ),
	],
	attributes,
	supports,

	edit: () => {
		const blockProps = useBlockProps();

		return (
			<div { ...blockProps }>
				<div class="slides-wrapper">
					<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
				</div>
			</div>
		);
	},

	save: ( props ) => {
		const blockProps = useBlockProps.save();
		// console.log( blockProps );
		// console.log( props );

		return (
			<div { ...blockProps }>
				<div class="slides-wrapper">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},

	deprecated: [
		{
			attributes,
			migrate( attributes, innerBlocks ) {
				return (
					<div class="slides-wrapper">
						{ innerBlocks }
					</div>
				);
			},
			save( props ) {
				const blockProps = useBlockProps.save();
				return (
					<div { ...blockProps }>
						<InnerBlocks.Content />
					</div>
				);
			},
		},
	],

	// depricated: [
	// 	{
	// 		attributes,
	// 		supports,

	// 		save: ( props ) => {
	// 			console.log( 'running' );
	// 			const blockProps = useBlockProps.save();

	// 			return (
	// 				<div { ...blockProps }>
	// 					<InnerBlocks.Content />
	// 				</div>
	// 			);
	// 		}
	// 	}
	// ]
} );