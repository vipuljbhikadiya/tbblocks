import { __ } from '@wordpress/i18n';

function Save( { attributes } ) {
	const {
		address,
		height,
		zoom
	} = attributes;

	const backgroundStyles = {
		minHeight: height ? height + 'px' : undefined,
	};

	const mapAttributes = {
		address,
		zoom
	};

	const locale = document.documentElement.lang;

	return (
		<div style={ backgroundStyles } >
			{
				<iframe
					title={ __( 'Google Map', 'tbblocks' ) }
					frameBorder="0"
					style={ { width: '100%', minHeight: height + 'px' } }
					src={ `https://www.google.com/maps?q=${ encodeURIComponent( address ) }&output=embed&hl=${ locale }&z=${ zoom }` }
				/>
			}
		</div>
	);
}

export default Save;
