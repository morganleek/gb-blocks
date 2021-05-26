import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 
const { useBlockProps, InspectorControls } = wp.blockEditor;
const { SelectControl, TextControl } = wp.components;
const { serverSideRender: ServerSideRender } = wp;
const { Panel, PanelBody, PanelRow } = wp.components;

const { more } = '@wordpress/icons';

registerBlockType( 'gb/block-posts', {
	apiVersion: 2,
	title: __( 'Posts by Type' ), 
	icon: 'sticky', 
	category: 'common', 
	keywords: [
		__( 'Posts by Type' ),
		__( 'Appearance' ),
	],
	attributes: {
		isInPostFetch: {
			type: 'boolean', 
			default: false
		},
		postType: {
			type: 'string',
			default: null
		},
		postTypesAvailable: {
			type: 'array',
			default: null
		},
		limit: {
			type: 'string',
			default: "10"
		},
		taxonomy: {
			type: 'string',
			default: ""
		},
		taxonomiesAvailable: {
			type: 'array',
			default: null
		},
		termSlug: {
			type: 'string',
			default: ""
		},
		callbackFunction: {
			type: 'string',
			default: ''
		}
	},

	edit: ( props ) => {
		const { attributes, setAttributes } = props;

		const blockProps = useBlockProps();

		let blockRender;
		if( attributes.postType ) {
			blockRender = <ServerSideRender
				block="gb/block-posts"
				attributes={ { 
					post_type: attributes.postType,
					limit: attributes.limit,
					taxonomy: attributes.taxonomy,
					term_slug: attributes.termSlug,
					callback_function: attributes.callbackFunction
				} }
			/>
		}
		else {
			blockRender = <p>Select a post type.</p>
			// Get post types
			if( !attributes.isInPostFetch ) {
				// Fetch once
				setAttributes( { isInPostFetch: true } );
				wp.apiFetch({
					path: '/wp/v2/types',
				}).then(data => {
					let postTypesTemp = [ { value: null, label: 'Select a post type' } ];
					for (const [key, value] of Object.entries( data )) {
						postTypesTemp.push( { label: value.name, value: key } );
					}
					setAttributes( { postTypesAvailable: postTypesTemp } );
				});
			}
		}

		const onUpdatePostType = ( newPostType ) => {
			setAttributes( { postType: newPostType } );
			// Get post type taxonomies
			wp.apiFetch({
				path: '/wp/v2/types/' + newPostType,
				context: 'view',
			}).then(data => {
				
				let taxonomyTemp = [ { value: null, label: 'All taxonomies' } ];
				data.taxonomies.forEach( tax => taxonomyTemp.push( { value: tax, label: ( tax[0].toUpperCase() + tax.substr( 1 ) ).replaceAll( '_', ' ' ) } ) );
				setAttributes( { taxonomiesAvailable: taxonomyTemp } );
			});
		};

		const onUpdateTaxonomy = ( newTaxonomy ) => {
			setAttributes( { taxonomy: newTaxonomy } );
		}
		
		return (
			<div { ... blockProps }>
				<InspectorControls>
					<PanelBody title="Posts Settings" icon={ more } initialOpen={ true }>
						<div>
							<TextControl
								label="Post limit"
								value={ attributes.limit }
								onChange={ ( newLimit ) => setAttributes( { limit: newLimit } ) }
							/>
							<TextControl
								label="Layout callback function"
								value={ attributes.callbackFunction }
								onChange={ ( newCallbackFunction ) => setAttributes( { callbackFunction: newCallbackFunction } ) }
							/>
							{ attributes.postTypesAvailable
								? <SelectControl 
										label={ __( 'Select a post type: ' ) }
										onChange={ onUpdatePostType }
										value={ attributes.postType }
										options={ attributes.postTypesAvailable }
									/>
								: <p>Loading&hellip;</p>
							}
							{ attributes.taxonomiesAvailable
								? <SelectControl 
										label={ __( 'Select a taxonomy: ' ) }
										onChange={ onUpdateTaxonomy }
										value={ attributes.taxonomy }
										options={ attributes.taxonomiesAvailable }
									/>
								: <p></p>
							}
							{ attributes.taxonomy 
								? <TextControl
										label="Term"
										value={ attributes.termSlug }
										onChange={ ( newTermSlug ) => setAttributes( { termSlug: newTermSlug } ) }
									/>
								: <p></p>
							}
						</div>
					</PanelBody>
				</InspectorControls>
				{ blockRender }
			</div>
		);
	}
} );



