/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { InspectorControls, PanelColorSettings, MediaUpload, MediaUploadCheck, InnerBlocks, withColors, getColorClassName } from '@wordpress/block-editor';
import { 
    Spinner, 
    Button, 
    PanelBody, 
    ResponsiveWrapper, 
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalToggleGroupControlOptionIcon as ToggleIconBtn,
    TextControl,
    ToggleControl
} from '@wordpress/components';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';





/***
 * Interal dependencies
 */

 import { theme_colors } from '../../utils/block-helpers';
 


class Edit extends Component {
    constructor(props) {
        super(...arguments);
    }



    render(){  
        
        const { dispatch } = window.wp.data; 


        const {
            attributes: {
                backgroundColor, 
                backgroundColorClass, 
                xlbackgroundImageId,
                mdbackgroundImageId,
                xsbackgroundImageId,
                padding,
                bgResponsiveMode,
                anchor,
                hideOnDesktop,
                hideOnTablet,
                hideOnMobile,
                xsbackgroundImagewebpsrc,
                smbackgroundImagewebpsrc,
                mdbackgroundImagewebpsrc,
                xlbackgroundImagewebpsrc
            },
            xlbackgroundImage,
            mdbackgroundImage,
            xsbackgroundImage,
            setAttributes,
            hasChildBlocks
        } = this.props;

        const instructions = <p>{ __( 'To edit the background image, you need permission to upload media.', 'tbblocks' ) }</p>;

        const ALLOWED_MEDIA_TYPES = [ 'image' ];

        const ALLOWED_BLOCKS = [ 
           'tbblocks/paregraph',
        ];

        const onUpdateImage = ( image ) => {
            
            if( bgResponsiveMode == 'xl' ){
                setAttributes( {
                    xlbackgroundImageId: image.id,
                    xlbackgroundImagesrc: image.url,
                } );
            }
            
            if( bgResponsiveMode == 'md' ){
                setAttributes( {
                    mdbackgroundImageId: image.id,  
                    mdbackgroundImagesrc: image.url,                  
                } );
            }
            if( bgResponsiveMode == 'xs' ){
                setAttributes( {
                    xsbackgroundImageId: image.id,
                    xsbackgroundImagesrc: image.url,
                } );
            }
        };
        
        const onRemoveImage = () => {
            if( bgResponsiveMode == 'xl' ){
                setAttributes( {
                    xlbackgroundImageId: undefined,
                    xlbackgroundImagesrc: '',
                    xlbackgroundImagewebpsrc: ''
                } );
            }
            if( bgResponsiveMode == 'md' ){
                setAttributes( {
                    mdbackgroundImageId: undefined,
                    mdbackgroundImagesrc: '',
                    mdbackgroundImagewebpsrc: ''
                } );
            }
            if( bgResponsiveMode == 'xs' ){
                setAttributes( {
                    xsbackgroundImageId: undefined,
                    xsbackgroundImagesrc: '',
                    xsbackgroundImagewebpsrc: ''
                } );
            }
        };

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

        const resMode = ['xs', 'md', 'xl'];
        
        const responsiveBgImage = {   
            'xs': {
                'BgId' : xsbackgroundImageId,
                'BgImage' : xsbackgroundImage
            },
            'md': {
                'BgId' : mdbackgroundImageId,
                'BgImage' : mdbackgroundImage
            },
            'xl': {
                'BgId' : xlbackgroundImageId,
                'BgImage' : xlbackgroundImage
            },
        };
        

        const SetColorClass = ( value ) => {
            theme_colors.filter(function(item){
                if( item.color == value ){
                    setAttributes({
                        backgroundColorClass: item.slug
                    });
                }    
            });
        }
        const bgclass = (backgroundColorClass) ? `section--bg-${backgroundColorClass}` : '';
        
        if( xsbackgroundImage ){
            var xswebp = xsbackgroundImage.source_url.split('.')[0] + '.webp';
            var xhr = new XMLHttpRequest();
            xhr.open('HEAD', xswebp, false);
            xhr.send();
            if( xhr.status != "404" ){
                setAttributes({
                    xsbackgroundImagewebpsrc: xswebp
                });
            }else{
                setAttributes({
                    xsbackgroundImagewebpsrc: ''
                });
            }
        }
        if( mdbackgroundImage ){
            var mdwebp = mdbackgroundImage.source_url.split('.')[0] + '.webp';            
            var xhr = new XMLHttpRequest();
            xhr.open('HEAD', mdwebp, false);
            xhr.send();
            if( xhr.status != "404" ){
                setAttributes({
                    mdbackgroundImagewebpsrc: mdwebp
                });
            }else{
                setAttributes({
                    mdbackgroundImagewebpsrc: ''
                });
            }            
        }
        if( xlbackgroundImage ){
            var xlwebp = xlbackgroundImage.source_url.split('.')[0] + '.webp';
            var xhr = new XMLHttpRequest();
            xhr.open('HEAD', xlwebp, false);
            xhr.send();
            if( xhr.status != "404" ){
                setAttributes({
                    xlbackgroundImagewebpsrc: xlwebp
                });
            }else{
                setAttributes({
                    xlbackgroundImagewebpsrc: ''
                });
            }
        }

        
 
        return(
            <>
                <InspectorControls>
                        <ToggleGroupControl label="" className="responsive_buttons"
                            value={bgResponsiveMode} isBlock 
                            onChange={ (value) => {    
                                setAttributes( {
                                    bgResponsiveMode: value,
                                } );
                            } }>
                            <ToggleGroupControlOption value="xs" label="Mobile" showTooltip={ true } aria-label="Device (min. 460px - max. 768px) " />
                            <ToggleGroupControlOption value="md" label="Tablet" showTooltip={ true } aria-label="Device (min. 768px - max. 1440px)" />    
                            <ToggleGroupControlOption value="xl" label="Desktop" showTooltip={ true } aria-label="Device > 1440px" />
                        </ToggleGroupControl>
                    <PanelBody
                        title={ __( 'Background Image', 'tbblocks' ) }
                        initialOpen={ true }
                        >
                        {bgResponsiveMode && (
                            <div className='media-control'>
                                {resMode.map((item, index) => {
                                    return <div className='media-control-wrap' id={`media-${index}`}>
                                        { bgResponsiveMode == item ?
                                            <MediaUploadCheck fallback={ instructions }>
                                                <MediaUpload
                                                    title={ __( 'Background Image', 'tbblocks' ) }
                                                    onSelect={ onUpdateImage }
                                                    allowedTypes={ ALLOWED_MEDIA_TYPES }
                                                    value={ responsiveBgImage[item]['BgId'] }
                                                    render={ ( {open} ) => (
                                                        <Button
                                                            id={`media-imgbtn-${index}`}
                                                            className={ ! responsiveBgImage[item]['BgId'] ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
                                                            onClick={ open }>
                                                            { !! responsiveBgImage[item]['BgId'] && ! responsiveBgImage[item]['BgImage'] && <Spinner /> }
                                                            { ! responsiveBgImage[item]['BgId'] && ( __( 'Set image', 'tbblocks' ) ) }
                                                            { !! responsiveBgImage[item]['BgId'] && responsiveBgImage[item]['BgImage'] &&
                                                                <ResponsiveWrapper
                                                                    naturalWidth={ responsiveBgImage[item]['BgImage'].media_details.width }
                                                                    naturalHeight={ responsiveBgImage[item]['BgImage'].media_details.height }
                                                                >
                                                                    <img src={ responsiveBgImage[item]['BgImage'].source_url } alt={ __( 'Background image', 'tbblocks' ) } />
                                                                </ResponsiveWrapper>
                                                            }
                                                        </Button>
                                                    ) }
                                                />
                                            </MediaUploadCheck>
                                        : <></>
                                        } 
                                        { bgResponsiveMode == item && !! responsiveBgImage[item]['BgId'] && responsiveBgImage[item]['BgImage'] ?
                                                <MediaUploadCheck>
                                                    <MediaUpload
                                                        title={ __( 'Background Image', 'tbblocks' ) }
                                                        onSelect={ onUpdateImage }
                                                        allowedTypes={ ALLOWED_MEDIA_TYPES }
                                                        value={ responsiveBgImage[item]['BgId'] }
                                                        render={ ( { open } ) => (
                                                            <Button id={`media-replacebtn-${index}`} onClick={ open } isDefault isLarge isLink className='ix-section-background-image-replace'>
                                                                { __( 'Replace background image', 'tbblocks' ) }
                                                            </Button>
                                                        ) }
                                                    />
                                                </MediaUploadCheck>
                                            :<></>  
                                        }
                                        { bgResponsiveMode == item && !! responsiveBgImage[item]['BgId'] ?
                                                <MediaUploadCheck>
                                                    <Button id={`media-removebtn-${index}`} onClick={ onRemoveImage } isLink isDestructive className='ix-section-background-image-remove'>
                                                        { __( 'Remove background image', 'tbblocks' ) }
                                                    </Button>
                                                </MediaUploadCheck>
                                            :<></>  
                                        }
                                    </div>                     
                                })}
                            
                            </div>
                        )}
                                             
                    </PanelBody>
                    <PanelBody
                        title={ __( 'Settings', 'tbblocks' ) }
                        initialOpen={ true }
                        >                            
                            <ToggleGroupControl label="Padding" className="ix-togglegroup"
                                value={padding} isBlock 
                                onChange={ (value) => {    
                                    setAttributes( {
                                        padding: Number(value),
                                    } );
                                } }>
                                <ToggleGroupControlOption value="0" label="0" showTooltip={ true } aria-label="0px" />
                                <ToggleGroupControlOption value="1" label="1" showTooltip={ true } aria-label="Top:120px, Bottom:120px" />
                                <ToggleGroupControlOption value="2" label="2" showTooltip={ true } aria-label="Top:60px, Bottom:60px" />
                                <ToggleGroupControlOption value="3" label="3" showTooltip={ true } aria-label="Top:120px, Bottom:60px" />
                                <ToggleGroupControlOption value="4" label="4" showTooltip={ true } aria-label="Top:60px, Bottom:120px" />
                                <ToggleGroupControlOption value="5" label="5" showTooltip={ true } aria-label="Top:120px, Bottom:0px" />
                            </ToggleGroupControl>     
                                    
                    </PanelBody>
                                            
                    <PanelColorSettings 
                            title={__("Background color", "tbblocks")}
                            className={ 'ix-color-setting' }
                            colorSettings={[
                                {
                                    colors: theme_colors,
                                    value: backgroundColor,
                                    onChange: (value) => {
                                        ( typeof value == 'undefined' ) ? setAttributes({ backgroundColorClass: '' }) : SetColorClass(value);
                                        setAttributes({ backgroundColor: value });
                                    },
                                    label: __('Background Color')
                                },
                            ]}
                    />
                    
                    
                    <PanelBody
                        title={ __( 'Display', 'tbblocks' ) }
                        initialOpen={ true }
                        >
                            <TextControl
                                label={__(
                                    "Anchor",
                                    "tbblocks"
                                )}
                                help="Specify link ID…"
                                type="text"
                                value={anchor}
                                onChange={(value) => setAttributes({ anchor: value })} />

                            <ToggleControl
                                label="Hide on Desktop"
                                checked={ hideOnDesktop }
                                onChange={() => setAttributes({
                                    hideOnDesktop: !hideOnDesktop,
                                })}
                            />

                            <ToggleControl
                                label="Hide on Tablet"
                                checked={ hideOnTablet }
                                onChange={() => setAttributes({
                                    hideOnTablet: !hideOnTablet,
                                })}
                            />

                            <ToggleControl
                                label="Hide on Mobile"
                                checked={ hideOnMobile }
                                onChange={() => setAttributes({
                                    hideOnMobile: !hideOnMobile,
                                })}
                            />
                    </PanelBody>

                </InspectorControls>

           
                <section id={anchor} className={`section section--pd-${padding} ${hideSection} ${bgclass}`} >
                    { ( xsbackgroundImage || mdbackgroundImage || xlbackgroundImage ) && (
                        
                        <div className="section__background">
                            <picture>
                                { xsbackgroundImage && !mdbackgroundImage && !xlbackgroundImage ? 
                                    <>
                                    <source media="(min-width:1025px)" srcset={`${xsbackgroundImage.source_url}`} />
                                    { xsbackgroundImagewebpsrc ? 
                                        <source media="(min-width:1025px)" srcset={`${xsbackgroundImagewebpsrc}`} />
                                    : '' }
                                    <source media="(min-width:481px)" srcset={`${xsbackgroundImage.source_url}`} />
                                    { xsbackgroundImagewebpsrc ? 
                                        <source media="(min-width:481px)" srcset={`${xsbackgroundImagewebpsrc}`} />
                                    : ''}
                                    <source media="(max-width:480px)" srcset={`${xsbackgroundImage.source_url}`} />
                                    { xsbackgroundImagewebpsrc ? 
                                        <source media="(max-width:480px)" srcset={`${xsbackgroundImagewebpsrc}`} />
                                    : ''}
                                    </>
                                :
                                    ''
                                }
                                { xsbackgroundImage && mdbackgroundImage && !xlbackgroundImage ? 
                                    <>
                                    <source media="(min-width:1025px)" srcset={`${mdbackgroundImage.source_url}`} />
                                    { mdbackgroundImagewebpsrc ? 
                                        <source media="(min-width:1025px)" srcset={`${mdbackgroundImagewebpsrc}`} />
                                    : '' }
                                    <source media="(min-width:481px)" srcset={`${mdbackgroundImage.source_url}`} />
                                    { mdbackgroundImagewebpsrc ? 
                                        <source media="(min-width:481px)" srcset={`${mdbackgroundImagewebpsrc}`} />
                                    : ''}
                                    <source media="(max-width:480px)" srcset={`${xsbackgroundImage.source_url}`} />
                                    { xsbackgroundImagewebpsrc ? 
                                        <source media="(max-width:480px)" srcset={`${xsbackgroundImagewebpsrc}`} />
                                    : ''}
                                    </>
                                :
                                    ''
                                }
                                { xsbackgroundImage && mdbackgroundImage && xlbackgroundImage ? 
                                    <>
                                    <source media="(min-width:1025px)" srcset={`${xlbackgroundImage.source_url}`} />
                                    { xlbackgroundImagewebpsrc ? 
                                        <source media="(min-width:1025px)" srcset={`${xlbackgroundImagewebpsrc}`} />
                                    : '' }
                                    <source media="(min-width:481px)" srcset={`${mdbackgroundImage.source_url}`} />
                                    { mdbackgroundImagewebpsrc ? 
                                        <source media="(min-width:481px)" srcset={`${mdbackgroundImagewebpsrc}`} />
                                    : ''}
                                    <source media="(max-width:480px)" srcset={`${xsbackgroundImage.source_url}`} />
                                    { xsbackgroundImagewebpsrc ? 
                                        <source media="(max-width:480px)" srcset={`${xsbackgroundImagewebpsrc}`} />
                                    : ''}
                                    </>
                                :
                                    ''
                                }
                                { xsbackgroundImage ? 
                                    <img src={`${xsbackgroundImage.source_url}`} alt="" width="auto" height="auto" />
                                : !xsbackgroundImage && mdbackgroundImage ? 
                                    <img src={`${mdbackgroundImage.source_url}`} alt="" width="auto" height="auto" />
                                : !xsbackgroundImage && !mdbackgroundImage && xlbackgroundImage ?
                                    <img src={`${xlbackgroundImage.source_url}`} alt="" width="auto" height="auto" />
                                : '' }
                            </picture>
                        </div>
                    )}
                    <div className={`section__content`}>
                        <InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } renderAppender={
							hasChildBlocks
								? undefined
								: () => <InnerBlocks.ButtonBlockAppender />
						}/>
                    </div>
                </section>
            </>
        )
    }

}
export default compose(
    withSelect( ( select, props ) => {
        const { getMedia } = select( 'core' );
        const { xlbackgroundImageId,
            mdbackgroundImageId,
            xsbackgroundImageId, } = props.attributes;
       
        const { clientId } = props;
        const { getBlockOrder } =
            select( 'core/block-editor' ) || select( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility

        return {
            xlbackgroundImage: xlbackgroundImageId ? getMedia( xlbackgroundImageId ) : null,
            mdbackgroundImage: mdbackgroundImageId ? getMedia( mdbackgroundImageId ) : null,
            xsbackgroundImage: xsbackgroundImageId ? getMedia( xsbackgroundImageId ) : null,
            hasChildBlocks: getBlockOrder( clientId ).length > 0,
        };
    } ),
)( Edit );