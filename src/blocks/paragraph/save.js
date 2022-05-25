 /**
 * External dependencies
 */

import classnames from 'classnames';

/**
* WordPress dependencies
*/
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { textAlign, textColorClass, content, tag, textStyle } = attributes;

    const TagName = tag;

    const colorClass = (textColorClass) ? `text--color-${textColorClass}` : '';
    const styleClass = (textStyle) ? `text--style-${textStyle}` : '';
    const className  = classnames(`text text--align-${textAlign}`, `${colorClass}`, `${styleClass}`); 

    return(
        <TagName className={ className }>
			<RichText.Content value={ content } />
		</TagName>
    );
}