import classnames from 'classnames';

const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;

const { InspectorAdvancedControls }	= wp.blockEditor;
const { createHigherOrderComponent } = wp.compose;
const { ToggleControl } = wp.components;

const allowedBlocks = [ 'core/image', 'core/paragraph', 'core/heading', 'core/spacer' ];

function addAttributes( settings ) {
	if( typeof settings.attributes !== 'undefined' && allowedBlocks.includes( settings.name ) ){
		settings.attributes = Object.assign( settings.attributes, {
			visibleOnMobile: { 
				type: 'boolean',
				default: true,
			},
			visibleOnDesktop: { 
				type: 'boolean',
				default: true,
			}
		});
	}

	return settings;
}

const withAdvancedControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {

		const {
			name,
			attributes,
			setAttributes,
			isSelected,
		} = props;

		const {
			visibleOnMobile,
			visibleOnDesktop
		} = attributes;
		
		
		return (
			<Fragment>
				<BlockEdit {...props} />
				{ isSelected && allowedBlocks.includes( name ) &&
					<InspectorAdvancedControls>
						<ToggleControl
							label={ __( 'Mobile Devices Visibity' ) }
							checked={ !! visibleOnMobile }
							onChange={ () => setAttributes( {  visibleOnMobile: ! visibleOnMobile } ) }
							help={ !! visibleOnMobile ? __( 'Showing on mobile devices.' ) : __( 'Hidden on mobile devices.' ) }
						/>
						<ToggleControl
							label={ __( 'Desktop Devices Visibity' ) }
							checked={ !! visibleOnDesktop }
							onChange={ () => setAttributes( {  visibleOnDesktop: ! visibleOnDesktop } ) }
							help={ !! visibleOnDesktop ? __( 'Showing on desktop devices.' ) : __( 'Hidden on desktop devices.' ) }
						/>
					</InspectorAdvancedControls>
				}

			</Fragment>
		);
	};
}, 'withAdvancedControls');

function applyExtraClass( extraProps, blockType, attributes ) {

	const { visibleOnMobile, visibleOnDesktop } = attributes;

	if ( typeof visibleOnMobile !== 'undefined' && !visibleOnMobile && allowedBlocks.includes( blockType.name ) ) {
		extraProps.className = classnames( extraProps.className, 'mobile-hidden' );
	}
	if ( typeof visibleOnDesktop !== 'undefined' && !visibleOnDesktop && allowedBlocks.includes( blockType.name ) ) {
		extraProps.className = classnames( extraProps.className, 'desktop-hidden' );
	}

	return extraProps;
}

 
addFilter(
	'blocks.registerBlockType',
	'gb/custom-attributes',
	addAttributes
);
 
addFilter(
	'editor.BlockEdit',
	'gb/custom-advanced-control',
	withAdvancedControls
);
 
addFilter(
	'blocks.getSaveContent.extraProps',
	'gb/applyExtraClass',
	applyExtraClass
);