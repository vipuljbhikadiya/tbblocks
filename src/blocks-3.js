
import { registerBlock } from './utils/helper';


/**
 * Import Gutenburg Blocks here
 */

import * as Paragraph from './blocks/paragraph';




/**
 * Function to register blocks provided by tbblocks.
 */
 [Paragraph].forEach( registerBlock );