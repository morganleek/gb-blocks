import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 
const { useBlockProps, InspectorControls } = wp.blockEditor;
const { SelectControl, TextControl, CheckboxControl } = wp.components;
const { serverSideRender: ServerSideRender } = wp;
const { Panel, PanelBody, PanelRow } = wp.components;

// Everything image listener
const event = new Event( 'EverythingImage::Update' );

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
		paginate: {
			type: 'boolean',
			default: false
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
		taxonomyFilter: {
			type: 'string',
			default: ""
		},
		taxonomyFilterActive: {
			type: 'array',
			default: null
		},
		callbackFunction: {
			type: 'string',
			default: ''
		}
	},

	edit: ( props ) => {
		const { attributes, setAttributes } = props;

		const blockProps = useBlockProps();

		// Get post types
		if( !attributes.isInPostFetch ) {
			// Fetch once
			setAttributes( { isInPostFetch: true } );
			wp.apiFetch({
				path: '/wp/v2/types',
			} ).then( data => {
				let postTypesTemp = [ { value: null, label: 'Select a post type' } ];
				for (const [key, value] of Object.entries( data )) {
					postTypesTemp.push( { label: value.name, value: key } );
				}
				setAttributes( { postTypesAvailable: postTypesTemp } );
			} );
		}

		let blockRender;
		if( attributes ) {
			if( attributes.postType ) {
				const { postType, limit, taxonomy, taxonomyFilter, termSlug, callbackFunction, className, paginate, taxonomyFilterActive } = attributes;
				blockRender = <ServerSideRender
					block="gb/block-posts"
					attributes={ { 
						postType: postType,
						limit: limit,
						taxonomy: taxonomy,
						taxonomyFilter: taxonomyFilter,
						termSlug: termSlug,
						callbackFunction: callbackFunction,
						className: className,
						paginate: paginate,
						taxonomyFilterActive: taxonomyFilterActive
					} }
				/>
			}
			else {
				blockRender = <p>Selected post type, term and term name.</p>
			}
		}
		else {
			blockRender = <p>Loading...</p>
		}

		const onUpdatePostType = ( newPostType ) => {
			setAttributes( { postType: newPostType } );
			// Get post type taxonomies
			wp.apiFetch({
				path: '/wp/v2/types/' + newPostType,
				context: 'view',
			}).then(data => {	
				let taxonomyTemp = [ { value: null, label: 'All taxonomies' } ];
				let taxonomyCheckboxTemp = [];
				data.taxonomies.forEach( ( tax ) => {
					taxonomyTemp.push( { value: tax, label: ( tax[0].toUpperCase() + tax.substr( 1 ) ).replaceAll( '_', ' ' ) } ) 
					taxonomyCheckboxTemp.push( { value: tax, visible: false } );
				}	);
				setAttributes( { taxonomiesAvailable: taxonomyTemp } );
				setAttributes( { taxonomyFilterActive: taxonomyCheckboxTemp } );
			});
		};

		const onUpdateTaxonomy = ( newTaxonomy ) => {
			setAttributes( { taxonomy: newTaxonomy } );
		}

		const onUpdateTaxonomyFilter = ( newTaxonomy ) => {
			setAttributes( { taxonomyFilter: newTaxonomy } );
		}
		
		// Add filter checkboxes
		let filterTaxononmyCheckboxes = [];
		if( attributes.taxonomyFilterActive ) {
			if( attributes.taxonomyFilterActive.length > 0 ) {
				for( const n in attributes.taxonomyFilterActive ) {
					const label = attributes.taxonomyFilterActive[n];
					filterTaxononmyCheckboxes.push(
						<CheckboxControl
							label={ ( label.value[0].toUpperCase() + label.value.substr( 1 ) ).replaceAll( '_', ' ' ) }
							checked={ label.visible }
							onChange={ ( newStatus ) => {
								console.log( newStatus + ' ' + n );
								let taxChecks = [...attributes.taxonomyFilterActive];
								let taxItem = {...taxChecks[n]};
								taxItem['visible'] = newStatus;
								taxChecks[n] = taxItem;
								setAttributes( { taxonomyFilterActive: taxChecks } );
							} }
						/>
					);
				}
			}
			else {
				filterTaxononmyCheckboxes.push( <p><em>Post type contains no terms</em></p> );
			}
			
		}

		// Fire event so WP Everything Images will appear
		document.dispatchEvent( event );

		return (
			<div { ... blockProps }>
				<InspectorControls>
					<PanelBody title="Posts Settings" icon={ more } initialOpen={ true }>
						<div>
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
					<PanelBody title="Posts Limits" icon={ more } initialOpen={ true }>
						<div>
							<TextControl
								label="Post limit"
								value={ attributes.limit }
								onChange={ ( newLimit ) => setAttributes( { limit: newLimit } ) }
							/>
							<CheckboxControl
								label="Paginate"
								checked={ attributes.paginate }
								onChange={ ( newPaginate ) => setAttributes( { paginate: newPaginate } ) }
							/>
						</div>
					</PanelBody>
					<PanelBody title="Filters Settings" icon={ more } initialOpen={ true }>
						<div>
							{ filterTaxononmyCheckboxes }
						</div>
					</PanelBody>
				</InspectorControls>
				{ blockRender }
			</div>
		);
	}
} );



