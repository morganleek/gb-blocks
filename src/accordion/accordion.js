import './editor.scss';
import './style.scss';

// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 

const { useBlockProps, InnerBlocks, RichText } = wp.blockEditor; // InspectorControls
// const { TextControl } = wp.components;
// const { serverSideRender: ServerSideRender } = wp;
// const { Panel, PanelBody, PanelRow } = wp.components;

const { more } = '@wordpress/icons';

// const ALLOWED_BLOCKS = [ 'core/cover' ];

registerBlockType( 'gb/block-accordion', {
	apiVersion: 2,
	title: __( 'Accordion' ), 
	icon: 'arrow-down-alt2', 
	category: 'common', 
	keywords: [
		__( 'Accordion' )
	],
	attributes: {
		title: {
			type: 'string',
			source: 'text',
			selector: '.title'
		},
	},
	supports: {
		"align": [ "wide", "full" ],
		"anchor": true,
		"className": true,
	},

	edit: ( { attributes, setAttributes } ) => {
		const blockProps = useBlockProps();
		const { title } = attributes;

		return (
			<div { ...blockProps }>
				<RichText
						tagName="h2"
						value={ title } 
						allowedFormats={ [ 'core/bold', 'core/italic' ] } 
						onChange={ ( title ) => setAttributes( { title } ) } 
						placeholder={ __( 'Heading...' ) }
						className="title"
				/>
				<div className="content">
					<InnerBlocks />
				</div>
			</div>
		);
	},

	save: ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		const { title } = attributes;
		return (
			<div { ...blockProps }>
				<RichText.Content className="title" tagName="h2" value={ title } />
				<div className="content">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
} );