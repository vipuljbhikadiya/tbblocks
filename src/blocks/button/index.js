/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

/**
* Internal dependencies
*/

import './style.scss';
import edit from './edit';
import metadata from './block.json';
import { stack } from '../icon';

const { name, category, supports, description, keywords, attributes } = metadata;

export { metadata, name };

export const settings = {
    description,
    keywords, 
    attributes, 
    category,
    icon: stack,
    supports,
    /**
	 * @see ./edit.js
	 */
	edit: edit,
    save: (props) => {

        const {
            attributes: {
                style,
                align,
                width,
                url,
                linkTarget,
                text,
                rel
            },
        } = props;
		return (
            
            <RichText.Content
                tagName="a"
                className={ `button button--style-${style} button--align-${align} button--width-${width}` }
                href={ url }
                value={ text }
                target={ linkTarget }
                rel={ rel }
            />
		);

	}
}