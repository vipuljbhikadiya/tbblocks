/**
* WordPress dependencies
*/
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';

export default class Save extends Component{
    constructor(props) {
        super(...arguments);
    }
    render(){
        const {
            attributes: {
                backgroundColor, 
                backgroundColorClass, 
                padding,
                anchor,
                hideOnDesktop,
                hideOnTablet,
                hideOnMobile,
                xlbackgroundImagesrc,
                xlbackgroundImagewebpsrc,
                mdbackgroundImagesrc,
                mdbackgroundImagewebpsrc,
                xsbackgroundImagesrc,
                xsbackgroundImagewebpsrc,
                xlbackgroundImageId,
                mdbackgroundImageId,
                xsbackgroundImageId
            },            
        } = this.props;
        
        let hideSection = '';
        if( hideOnDesktop == true ){
            hideSection += 'section--lg-hide ';
        }
        if( hideOnTablet == true ){
            hideSection += 'section--md-hide ';
        }
        if( hideOnMobile == true ){
            hideSection += 'section--xs-hide ';
        }
        const bgclass = (backgroundColorClass) ? `section--bg-${backgroundColorClass}` : '';

        return(
            <section id={anchor} className={`section section--pd-${padding} ${hideSection} ${bgclass}`} >
                { ( xlbackgroundImageId || mdbackgroundImageId || xsbackgroundImageId ) && (
                    <div className="section__background">
                        <picture>
                            { xsbackgroundImagesrc && !mdbackgroundImagesrc && !xlbackgroundImagesrc ? 
                                <>
                                <source media="(min-width:1025px)" srcset={`${xsbackgroundImagesrc}`} />
                                { xsbackgroundImagewebpsrc ? 
                                    <source media="(min-width:1025px)" srcset={`${xsbackgroundImagewebpsrc}`} />
                                : '' }
                                <source media="(min-width:481px)" srcset={`${xsbackgroundImagesrc}`} />
                                { xsbackgroundImagewebpsrc ? 
                                    <source media="(min-width:481px)" srcset={`${xsbackgroundImagewebpsrc}`} />
                                : ''}
                                <source media="(max-width:480px)" srcset={`${xsbackgroundImagesrc}`} />
                                { xsbackgroundImagewebpsrc ? 
                                    <source media="(max-width:480px)" srcset={`${xsbackgroundImagewebpsrc}`} />
                                : ''}
                                </>
                            :
                                ''
                            }
                            { xsbackgroundImagesrc && mdbackgroundImagesrc && !xlbackgroundImagesrc ? 
                                <>
                                <source media="(min-width:1025px)" srcset={`${mdbackgroundImagesrc}`} />
                                { mdbackgroundImagewebpsrc ? 
                                    <source media="(min-width:1025px)" srcset={`${mdbackgroundImagewebpsrc}`} />
                                : '' }
                                <source media="(min-width:481px)" srcset={`${mdbackgroundImagesrc}`} />
                                { mdbackgroundImagewebpsrc ? 
                                    <source media="(min-width:481px)" srcset={`${mdbackgroundImagewebpsrc}`} />
                                : ''}
                                <source media="(max-width:480px)" srcset={`${xsbackgroundImagesrc}`} />
                                { xsbackgroundImagewebpsrc ? 
                                    <source media="(max-width:480px)" srcset={`${xsbackgroundImagewebpsrc}`} />
                                : ''}
                                </>
                            :
                                ''
                            }
                            { xsbackgroundImagesrc && mdbackgroundImagesrc && xlbackgroundImagesrc ? 
                                <>
                                <source media="(min-width:1025px)" srcset={`${xlbackgroundImagesrc}`} />
                                { xlbackgroundImagewebpsrc ? 
                                    <source media="(min-width:1025px)" srcset={`${xlbackgroundImagewebpsrc}`} />
                                : '' }
                                <source media="(min-width:481px)" srcset={`${mdbackgroundImagesrc}`} />
                                { mdbackgroundImagewebpsrc ? 
                                    <source media="(min-width:481px)" srcset={`${mdbackgroundImagewebpsrc}`} />
                                : ''}
                                <source media="(max-width:480px)" srcset={`${xsbackgroundImagesrc}`} />
                                { xsbackgroundImagewebpsrc ? 
                                    <source media="(max-width:480px)" srcset={`${xsbackgroundImagewebpsrc}`} />
                                : ''}
                                </>
                            :
                                ''
                            }
                            { xsbackgroundImagesrc ? 
                                <img src={`${xsbackgroundImagesrc}`} alt="" width="auto" height="auto" />
                            : !xsbackgroundImagesrc && mdbackgroundImagesrc ? 
                                <img src={`${mdbackgroundImagesrc}`} alt="" width="auto" height="auto" />
                            : !xsbackgroundImagesrc && !mdbackgroundImagesrc && xlbackgroundImagesrc ?
                                <img src={`${xlbackgroundImagesrc}`} alt="" width="auto" height="auto" />
                            : '' }
                        </picture>
                    </div>
                )}
                <div className={`section__content`}>
                    <InnerBlocks.Content />
                </div>
            </section>
        )
    }
}