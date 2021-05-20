import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; 
const { registerBlockType } = wp.blocks; 
const { useBlockProps, InspectorControls } = wp.blockEditor;
const { SelectControl } = wp.components;
const { serverSideRender: ServerSideRender } = wp;

registerBlockType( 'gb/block-gb-menu', {
	apiVersion: 2,
	title: 'Example: last post',
	icon: 'megaphone',
	category: 'widgets',

	edit: function ( props ) {
			const blockProps = useBlockProps();
			return (
					<div { ...blockProps }>
							<ServerSideRender
									block="gutenberg-examples/example-dynamic"
									attributes={ props.attributes }
							/>
					</div>
			);
	},
	// apiVersion: 2,
	// title: __( 'Menu' ), 
	// icon: 'shield', 
	// category: 'common', 
	// keywords: [
	// 	__( 'Menu' ),
	// 	__( 'Appearance' ),
	// ],
	// attributes: {
	// 	menu: {
	// 		type: 'string',
	// 		default: ""
	// 	},
	// 	menusAvailable: {
	// 		type: 'array',
	// 		default: null
	// 	}
	// },

	// edit: ( props ) => {
	// 	const { attributes, setAttributes } = props;
	// 	if( attributes.menusAvailable == null ) {
	// 		attributes.menusAvailable = gbGlobal.siteMenus; 
	// 		attributes.menusAvailable.unshift( { value: null, label: 'Select a menu' } );
	// 	}

	// 	const onUpdateMenu = ( newMenu ) => {
	// 		setAttributes( { menu: newMenu } );
	// 	};

	// 	const blockProps = useBlockProps();
		
	// 	return (
	// 		<div { ... useBlockProps() } className={ props.className }>
	// 			<InspectorControls>
	// 				<div className="components-panel__body gb-menu-controls is-opened">
	// 					<h2 className="components-panel__body-title">
	// 						<button type="button" aria-expanded="true" class="components-button components-panel__body-toggle"><span aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="components-panel__arrow" role="img" aria-hidden="true" focusable="false"><path d="M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"></path></svg></span>Menu</button>
	// 					</h2>
	// 					<SelectControl 
	// 						label={ __( 'Select a menu: ' ) }
	// 						onChange={ onUpdateMenu }
	// 						value={ attributes.menu }
	// 						options={ attributes.menusAvailable }
	// 					/>
	// 				</div>	
	// 			</InspectorControls>
	// 			<div className="gb-menus-wrapper">
	// 				<ServerSideRender
	// 					block="gb/block-gb-menu"
	// 					attributes={ { menu: attributes.menu } }
	// 				/>
	// 			</div>
	// 		</div>
	// 	);
	// },

	// // save: ( props ) => {
	// // 	const blockProps = useBlockProps.save();

	// // 	return (
	// // 		<div { ... blockProps } className={ props.className }>
	// // 			<p>Working</p>
	// // 		</div>
	// // 	);
	// // },
} );
