import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 
const { useBlockProps, InspectorControls } = wp.blockEditor;
const { SelectControl } = wp.components;
const { serverSideRender: ServerSideRender } = wp;
const { Panel, PanelBody, PanelRow } = wp.components;

const { more } = '@wordpress/icons';

registerBlockType( 'gb/block-gb-menu', {
	apiVersion: 2,
	title: __( 'Menu' ), 
	icon: 'menu', 
	category: 'common', 
	keywords: [
		__( 'Menu' ),
		__( 'Appearance' ),
	],
	attributes: {
		menu: {
			type: 'string',
			default: ""
		},
		menusAvailable: {
			type: 'array',
			default: null
		}
	},

	edit: ( props ) => {
		const { attributes, setAttributes } = props;
		if( attributes.menusAvailable == null ) {
			attributes.menusAvailable = gbGlobal.siteMenus; 
			attributes.menusAvailable.unshift( { value: null, label: 'Select a menu' } );
		}

		const onUpdateMenu = ( newMenu ) => {
			setAttributes( { menu: newMenu } );
		};

		const blockProps = useBlockProps();

		let blockRender;
		
		if( attributes.menu ) {
			blockRender = <ServerSideRender
				block="gb/block-gb-menu"
				attributes={ { 
					menu: attributes.menu,
					className: blockProps.className
				} }
			/>
		}
		else {
			blockRender = <p>Select a menu</p>
		}
		
		return (
			<div { ... blockProps }>
				<InspectorControls>
					<Panel header="Menu">
						<PanelBody title="Menu Settings" icon={ more } initialOpen={ true }>
							<PanelRow>
								<SelectControl 
									label={ __( 'Select a menu: ' ) }
									onChange={ onUpdateMenu }
									value={ attributes.menu }
									options={ attributes.menusAvailable }
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


// <InspectorControls key="setting">
// 	<PanelBody>
// 		<PanelRow>
// 			<p>Hello</p>
// 		</PanelRow>
// 	</PanelBody>
// </InspectorControls>

