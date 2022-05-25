/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/post-content.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post-content.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const postContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 20h16v-1.5H4V20zm0-4.8h16v-1.5H4v1.5zm0-6.4v1.5h16V8.8H4zM16 4H4v1.5h12V4z"
}));
/* harmony default export */ __webpack_exports__["default"] = (postContent);
//# sourceMappingURL=post-content.js.map

/***/ }),

/***/ "./src/blocks-1.js":
/*!*************************!*\
  !*** ./src/blocks-1.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _seo_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seo-plugin */ "./src/seo-plugin/index.js");
/* harmony import */ var _blocks_postcontent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/postcontent */ "./src/blocks/postcontent/index.js");
/* harmony import */ var _blocks_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/section */ "./src/blocks/section/index.js");
/* harmony import */ var _blocks_row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/row */ "./src/blocks/row/index.js");
/* harmony import */ var _blocks_column__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/column */ "./src/blocks/column/index.js");
 // Styles
// index.scss name implies editor styles. Output will be tbblocks-1.js.

 // style.scss name implies frontend styles. Output will be style-tbblocks-1.js.


/**
 * Plugins for exsiting gutenburg code
 */


/**
 * Import Gutenburg Blocks here
 */





/**
 * Function to register blocks provided by tbblocks.
 */

[_blocks_postcontent__WEBPACK_IMPORTED_MODULE_4__, _blocks_section__WEBPACK_IMPORTED_MODULE_5__, _blocks_row__WEBPACK_IMPORTED_MODULE_6__, _blocks_column__WEBPACK_IMPORTED_MODULE_7__].forEach(_utils_helper__WEBPACK_IMPORTED_MODULE_0__.registerBlock);

/***/ }),

/***/ "./src/blocks/column/colClasses.js":
/*!*****************************************!*\
  !*** ./src/blocks/column/colClasses.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Return Jnext Timeline Block Dynamic generated Classes
 */
function colClasses(attributes) {
  const {
    xlwidth,
    lgwidth,
    mdwidth,
    smwidth,
    xswidth,
    xloffset,
    lgoffset,
    mdoffset,
    smoffset,
    xsoffset,
    colPadding,
    xlalignH,
    lgalignH,
    mdalignH,
    smalignH,
    xsalignH,
    xlalignV,
    lgalignV,
    mdalignV,
    smalignV,
    xsalignV,
    hideonDesktop,
    hideonTablet,
    hideonMobile
  } = attributes;
  let colClasses = ''; // col width

  if (xswidth == smwidth && smwidth == mdwidth && mdwidth == lgwidth && lgwidth == xlwidth) {
    colClasses += xswidth != 0 ? ' col--xs-' + xswidth : '';
  } else if (smwidth == mdwidth && mdwidth == lgwidth && lgwidth == xlwidth) {
    colClasses += xswidth != 0 ? ' col--xs-' + xswidth : '';
    colClasses += smwidth != 0 ? ' col--sm-' + smwidth : '';
  } else if (mdwidth == lgwidth && lgwidth == xlwidth) {
    if (xswidth == smwidth) {
      colClasses += xswidth != 0 ? ' col--xs-' + xswidth : '';
      colClasses += mdwidth != 0 ? ' col--md-' + mdwidth : '';
    } else if (xswidth != smwidth && smwidth == mdwidth) {
      colClasses += xswidth != 0 ? ' col--xs-' + xswidth : '';
      colClasses += smwidth != 0 ? ' col--sm-' + smwidth : '';
    } else {
      colClasses += xswidth != 0 ? ' col--xs-' + xswidth : '';
      colClasses += smwidth != 0 ? ' col--sm-' + smwidth : '';
      colClasses += mdwidth != 0 ? ' col--md-' + mdwidth : '';
    }
  } else if (lgwidth == xlwidth) {
    if (xswidth == smwidth && smwidth == mdwidth) {
      colClasses += xswidth != 0 ? ' col--xs-' + xswidth : '';
    } else {
      if (xswidth == smwidth) {
        colClasses += xswidth != 0 ? ' col--xs-' + xswidth : '';
      } else if (smwidth == mdwidth) {
        colClasses += xswidth != 0 ? ' col--xs-' + xswidth : '';
        colClasses += smwidth != 0 ? ' col--sm-' + smwidth : '';
      } else if (xswidth == smwidth && mdwidth == lgwidth) {
        colClasses += xswidth != 0 ? ' col--xs-' + xswidth : '';
        colClasses += mdwidth != 0 ? ' col--md-' + mdwidth : '';
      } else {
        colClasses += xswidth != 0 ? ' col--xs-' + xswidth : '';
        colClasses += smwidth != 0 ? ' col--sm-' + smwidth : '';
      }

      colClasses += smwidth != mdwidth && mdwidth != 0 ? ' col--md-' + mdwidth : '';
    }

    colClasses += lgwidth != 0 ? ' col--lg-' + lgwidth : '';
  } else {
    if (xswidth != smwidth && smwidth != mdwidth && mdwidth != lgwidth && lgwidth != xlwidth) {
      colClasses += xswidth != 0 ? ' col--xs-' + xswidth : '';
      colClasses += smwidth != 0 ? ' col--sm-' + smwidth : '';
      colClasses += mdwidth != 0 ? ' col--md-' + mdwidth : '';
      colClasses += lgwidth != 0 ? ' col--lg-' + lgwidth : '';
      colClasses += xlwidth != 0 ? ' col--xl-' + xlwidth : '';
    } else if (xswidth == smwidth && smwidth == mdwidth && mdwidth == lgwidth) {
      colClasses += xswidth != 0 ? ' col--xs-' + xswidth : '';
    } else {
      if (xswidth == smwidth && smwidth == mdwidth) {
        colClasses += xswidth != 0 ? ' col--xs-' + xswidth : '';
      } else if (xswidth == smwidth) {
        colClasses += xswidth != 0 ? ' col--xs-' + xswidth : '';
      }

      if (xswidth != smwidth && smwidth == mdwidth) {
        colClasses += xswidth != 0 ? ' col--xs-' + xswidth : '';
        colClasses += smwidth != 0 ? ' col--sm-' + smwidth : '';
      } else if (mdwidth == lgwidth) {
        colClasses += mdwidth != 0 ? ' col--md-' + mdwidth : '';
      }

      if (mdwidth == xlwidth) {
        if (smwidth != mdwidth) {
          colClasses += mdwidth != 0 ? ' col--md-' + mdwidth : '';
        }

        colClasses += lgwidth != 0 ? ' col--lg-' + lgwidth : '';
        colClasses += xlwidth != 0 ? ' col--xl-' + xlwidth : '';
      }
    }

    colClasses += mdwidth != xlwidth && xlwidth != '' ? ' col--xl-' + xlwidth : '';
  } // col offset


  if (xsoffset == smoffset && smoffset == mdoffset && mdoffset == lgoffset && lgoffset == xloffset) {
    colClasses += xsoffset != -1 ? ' col--xs-os-' + xsoffset : '';
  } else if (smoffset == mdoffset && mdoffset == lgoffset && lgoffset == xloffset) {
    colClasses += xsoffset != -1 ? ' col--xs-os-' + xsoffset : '';
    colClasses += smoffset != -1 ? ' col--sm-os-' + smoffset : '';
  } else if (mdoffset == lgoffset && lgoffset == xloffset) {
    if (xsoffset == smoffset) {
      colClasses += xsoffset != -1 ? ' col--xs-os-' + xsoffset : '';
      colClasses += mdoffset != -1 ? ' col--md-os-' + mdoffset : '';
    } else if (xsoffset != smoffset && smoffset == mdoffset) {
      colClasses += xsoffset != -1 ? ' col--xs-os-' + xsoffset : '';
      colClasses += smoffset != -1 ? ' col--sm-os-' + smoffset : '';
    } else {
      colClasses += xsoffset != -1 ? ' col--xs-os-' + xsoffset : '';
      colClasses += smoffset != -1 ? ' col--sm-os-' + smoffset : '';
      colClasses += mdoffset != -1 ? ' col--md-os-' + mdoffset : '';
    }
  } else if (lgoffset == xloffset) {
    if (xsoffset == smoffset && smoffset == mdoffset) {
      colClasses += xsoffset != -1 ? ' col--xs-os-' + xsoffset : '';
    } else {
      if (xsoffset == smoffset) {
        colClasses += xsoffset != -1 ? ' col--xs-os-' + xsoffset : '';
      } else if (smoffset == mdoffset) {
        colClasses += xsoffset != -1 ? ' col--xs-os-' + xsoffset : '';
        colClasses += smoffset != -1 ? ' col--sm-os-' + smoffset : '';
      } else if (xsoffset == smoffset && mdoffset == lgoffset) {
        colClasses += xsoffset != -1 ? ' col--xs-os-' + xsoffset : '';
        colClasses += mdoffset != -1 ? ' col--md-os-' + mdoffset : '';
      } else {
        colClasses += xsoffset != -1 ? ' col--xs-os-' + xsoffset : '';
        colClasses += smoffset != -1 ? ' col--sm-os-' + smoffset : '';
      }

      colClasses += smoffset != mdoffset && mdoffset != -1 ? ' col--md-os-' + mdoffset : '';
    }

    colClasses += lgoffset != -1 ? ' col--lg-os-' + lgoffset : '';
  } else {
    if (xsoffset != smoffset && smoffset != mdoffset && mdoffset != lgoffset && lgoffset != xloffset) {
      colClasses += xsoffset != -1 ? ' col--xs-os-' + xsoffset : '';
      colClasses += smoffset != -1 ? ' col--sm-os-' + smoffset : '';
      colClasses += mdoffset != -1 ? ' col--md-os-' + mdoffset : '';
      colClasses += lgoffset != -1 ? ' col--lg-os-' + lgoffset : '';
      colClasses += xloffset != -1 ? ' col--xl-os-' + xloffset : '';
    } else if (xsoffset == smoffset && smoffset == mdoffset && mdoffset == lgoffset) {
      colClasses += xsoffset != -1 ? ' col--xs-os-' + xsoffset : '';
    } else {
      if (xsoffset == smoffset && smoffset == mdoffset) {
        colClasses += xsoffset != -1 ? ' col--xs-os-' + xsoffset : '';
      } else if (xsoffset == smoffset) {
        colClasses += xsoffset != -1 ? ' col--xs-os-' + xsoffset : '';
      }

      if (xsoffset != smoffset && smoffset == mdoffset) {
        colClasses += xsoffset != -1 ? ' col--xs-os-' + xsoffset : '';
        colClasses += smoffset != -1 ? ' col--sm-os-' + smoffset : '';
      } else if (mdoffset == lgoffset) {
        colClasses += mdoffset != -1 ? ' col--md-os-' + mdoffset : '';
      }

      if (mdoffset == xloffset) {
        if (smoffset != mdoffset) {
          colClasses += mdoffset != -1 ? ' col--md-os-' + mdoffset : '';
        }

        colClasses += lgoffset != -1 ? ' col--lg-os-' + lgoffset : '';
        colClasses += xloffset != -1 ? ' col--xl-os-' + xloffset : '';
      }
    }

    colClasses += mdoffset != xloffset && xloffset != -1 ? ' col--xl-os-' + xloffset : '';
  } // col horizontal align

  /*if( xsalignH == smalignH && smalignH == mdalignH && mdalignH == lgalignH && lgalignH == xlalignH ){
        colClasses += (xsalignH == 'init') ? ' col--xs-hr-init' : ' col--xs-' + xsalignH;
    }else if( smalignH == mdalignH && mdalignH == lgalignH && lgalignH == xlalignH ){
        colClasses += (xsalignH == 'init') ? ' col--xs-hr-init' : ' col--xs-' + xsalignH;
      colClasses += (smalignH == 'init') ? ' col--sm-hr-init' : ' col--sm-' + smalignH;
    }else if( mdalignH == lgalignH && lgalignH == xlalignH ){
        if( xsalignH == smalignH ){
          colClasses += (xsalignH == 'init') ? ' col--xs-hr-init' : ' col--xs-' + xsalignH;
          colClasses += (mdalignH == 'init') ? ' col--md-hr-init' : ' col--md-' + mdalignH;
      }else if( xsalignH != smalignH && smalignH == mdalignH ){
          colClasses += (xsalignH == 'init') ? ' col--xs-hr-init' : ' col--xs-' + xsalignH;
          colClasses += (smalignH == 'init') ? ' col--sm-hr-init' : ' col--sm-' + smalignH;
      }else{
          colClasses += (xsalignH == 'init') ? ' col--cd-hr-init' : ' col--xs-' + xsalignH;
          colClasses += (smalignH == 'init') ? ' col--sm-hr-init' : ' col--sm-' + smalignH;
          colClasses += (mdalignH == 'init') ? ' col--md-hr-init' : ' col--md-' + mdalignH;
      }     
      
  }else if( lgalignH == xlalignH ){
        if( xsalignH == smalignH && smalignH == mdalignH ){
          colClasses += (xsalignH == 'init') ? ' col--xs-hr-init' : ' col--xs-' + xsalignH;
      }else{
          if( xsalignH == smalignH ){
              colClasses += (xsalignH == 'init') ? ' col--xs-hr-init' : ' col--xs-' + xsalignH;    
          }else if( smalignH == mdalignH ){
              colClasses += (xsalignH == 'init') ? ' col--xs-hr-init' : ' col--xs-' + xsalignH;
              colClasses += (smalignH == 'init') ? ' col--sm-hr-init' : ' col--sm-' + mdalignH;
          }else if( xsalignH == smalignH && mdalignH == lgalignH ){
              colClasses += (xsalignH == 'init') ? ' col--xs-hr-init' : ' col--xs-' + xsalignH;
              colClasses += (mdalignH == 'init') ? ' col--md-hr-init' : ' col--md-' + mdalignH;
          }else{
              colClasses += (xsalignH == 'init') ? ' col--xs-hr-init' : ' col--xs-' + xsalignH;
              colClasses += (smalignH == 'init') ? ' col--sm-hr-init' : ' col--sm-' + smalignH;                
          }
          colClasses += ( smalignH != mdalignH && smalignH != 'init' && mdalignH != 'init') ? ' col--md-' + mdalignH : '';
          colClasses += ( smalignH != mdalignH && smalignH == 'init' && mdalignH == 'init') ? ' col--md-hr-init' : '';
      }
      colClasses += ' col--lg-' + lgalignH;
    }else{
      
      if( xsalignH != smalignH && smalignH != mdalignH && mdalignH != lgalignH && lgalignH != xlalignH ){
            colClasses += (xsalignH == 'init') ? ' col--xs-hr-init' : ' col--xs-' + xsalignH;
          colClasses += (smalignH == 'init') ? ' col--sm-hr-init' : ' col--sm-' + smalignH;
          colClasses += (mdalignH == 'init') ? ' col--md-hr-init' : ' col--md-' + mdalignH;
          colClasses += (lgalignH == 'init') ? ' col--lg-hr-init' : ' col--lg-' + lgalignH;
          colClasses += (xlalignH == 'init') ? ' col--xl-hr-init' : ' col--xl-' + xlalignH;
        }else if( xsalignH == smalignH && smalignH == mdalignH && mdalignH == lgalignH ){
          colClasses += (xsalignH == 'init') ? ' col--xs-hr-init' : ' col--xs-' + xsalignH;
      }else{
          if( xsalignH == smalignH && smalignH == mdalignH ){
              colClasses += (xsalignH == 'init') ? ' col--xs-hr-init' : ' col--xs-' + xsalignH;    
          }else if( xsalignH == smalignH ){
              colClasses += (xsalignH == 'init') ? ' col--xs-hr-init' : ' col--xs-' + xsalignH;
          }
          if( xsalignH != smalignH && smalignH == mdalignH ){
              colClasses += (xsalignH == 'init') ? ' col--xs-hr-init' : ' col--xs-' + xsalignH;
              colClasses += (smalignH == 'init') ? ' col--sm-hr-init' : ' col--sm-' + smalignH;                
          }else if( mdalignH == lgalignH ){
              colClasses += (mdalignH == 'init') ? ' col--md-hr-init' : ' col--md-' + mdalignH;
          }
          if( mdalignH == xlalignH ){
              if( smalignH != mdalignH ){
                  colClasses += (mdalignH == 'init') ? ' col--md-hr-init' : ' col--md-' + mdalignH;
              }
              colClasses += (lgalignH == 'init') ? ' col--lg-hr-init' : ' col--lg-' + lgalignH;
              colClasses += (xlalignH == 'init') ? ' col--xl-hr-init' : ' col--xl-' + xlalignH;
          }
      }
          
      colClasses += ( mdalignH != xlalignH && mdalignH != 'init' && xlalignH != 'init' ) ? ' col--xl-' + xlalignH : '';
      colClasses += ( mdalignH != xlalignH && mdalignH == 'init' && xlalignH == 'init' ) ? ' col--xl-hr-init' : '';
  }*/
  // col Vertical align


  if (xsalignV == smalignV && smalignV == mdalignV && mdalignV == lgalignV && lgalignV == xlalignV) {
    colClasses += xsalignV == 'init' ? ' col--xs-vr-init' : xsalignV != '' ? ' col--xs-' + xsalignV : '';
  } else if (smalignV == mdalignV && mdalignV == lgalignV && lgalignV == xlalignV) {
    colClasses += xsalignV == 'init' ? ' col--xs-vr-init' : xsalignV != '' ? ' col--xs-' + xsalignV : '';
    colClasses += smalignV == 'init' ? ' col--sm-vr-init' : smalignV != '' ? ' col--sm-' + smalignV : '';
  } else if (mdalignV == lgalignV && lgalignV == xlalignV) {
    if (xsalignV == smalignV) {
      colClasses += xsalignV == 'init' ? ' col--xs-vr-init' : xsalignV != '' ? ' col--xs-' + xsalignV : '';
      colClasses += mdalignV == 'init' ? ' col--md-vr-init' : mdalignV != '' ? ' col--md-' + mdalignV : '';
    } else if (xsalignV != smalignV && smalignV == mdalignV) {
      colClasses += xsalignV == 'init' ? ' col--xs-vr-init' : xsalignV != '' ? ' col--xs-' + xsalignV : '';
      colClasses += smalignV == 'init' ? ' col--sm-vr-init' : smalignV != '' ? ' col--sm-' + smalignV : '';
    } else {
      colClasses += xsalignV == 'init' ? ' col--xs-vr-init' : xsalignV != '' ? ' col--xs-' + xsalignV : '';
      colClasses += smalignV == 'init' ? ' col--sm-vr-init' : smalignV != '' ? ' col--sm-' + smalignV : '';
      colClasses += mdalignV == 'init' ? ' col--md-vr-init' : mdalignV != '' ? ' col--md-' + mdalignV : '';
    }
  } else if (lgalignV == xlalignV) {
    if (xsalignV == smalignV && smalignV == mdalignV) {
      colClasses += xsalignV == 'init' ? ' col--xs-vr-init' : xsalignV != '' ? ' col--xs-' + xsalignV : '';
    } else {
      if (xsalignV == smalignV) {
        colClasses += xsalignV == 'init' ? ' col--xs-vr-init' : xsalignV != '' ? ' col--xs-' + xsalignV : '';
      } else if (smalignV == mdalignV) {
        colClasses += xsalignV == 'init' ? ' col--xs-vr-init' : xsalignV != '' ? ' col--xs-' + xsalignV : '';
        colClasses += smalignV == 'init' ? ' col--sm-vr-init' : smalignV != '' ? ' col--sm-' + smalignV : '';
      } else if (xsalignV == smalignV && mdalignV == lgalignV) {
        colClasses += xsalignV == 'init' ? ' col--xs-vr-init' : xsalignV != '' ? ' col--xs-' + xsalignV : '';
        colClasses += mdalignV == 'init' ? ' col--md-vr-init' : mdalignV != '' ? ' col--md-' + mdalignV : '';
      } else {
        colClasses += xsalignV == 'init' ? ' col--xs-vr-init' : xsalignV != '' ? ' col--xs-' + xsalignV : '';
        colClasses += smalignV == 'init' ? ' col--sm-vr-init' : smalignV != '' ? ' col--sm-' + smalignV : '';
      }

      colClasses += smalignV != mdalignV && smalignV != 'init' && mdalignV != 'init' && mdalignV != '' ? ' col--md-' + mdalignV : '';
      colClasses += smalignV != mdalignV && smalignV == 'init' && mdalignV == 'init' ? ' col--md-vr-init' : '';
    }

    colClasses += lgalignV != '' ? ' col--lg-' + lgalignV : '';
  } else {
    if (xsalignV != smalignV && smalignV != mdalignV && mdalignV != lgalignV && lgalignV != xlalignV) {
      colClasses += xsalignV == 'init' ? ' col--xs-vr-init' : xsalignV != '' ? ' col--xs-' + xsalignV : '';
      colClasses += smalignV == 'init' ? ' col--sm-vr-init' : smalignV != '' ? ' col--sm-' + smalignV : '';
      colClasses += mdalignV == 'init' ? ' col--md-vr-init' : mdalignV != '' ? ' col--md-' + mdalignV : '';
      colClasses += lgalignV == 'init' ? ' col--lg-vr-init' : lgalignV != '' ? ' col--lg-' + lgalignV : '';
      colClasses += xlalignV == 'init' ? ' col--xl-vr-init' : xlalignV != '' ? ' col--xl-' + xlalignV : '';
    } else if (xsalignV == smalignV && smalignV == mdalignV && mdalignV == lgalignV) {
      colClasses += xsalignV == 'init' ? ' col--xs-vr-init' : xsalignV != '' ? ' col--xs-' + xsalignV : '';
    } else {
      if (xsalignV == smalignV && smalignV == mdalignV) {
        colClasses += xsalignV == 'init' ? ' col--xs-vr-init' : xsalignV != '' ? ' col--xs-' + xsalignV : '';
      } else if (xsalignV == smalignV) {
        colClasses += xsalignV == 'init' ? ' col--xs-vr-init' : xsalignV != '' ? ' col--xs-' + xsalignV : '';
      }

      if (xsalignV != smalignV && smalignV == mdalignV) {
        colClasses += xsalignV == 'init' ? ' col--xs-vr-init' : xsalignV != '' ? ' col--xs-' + xsalignV : '';
        colClasses += smalignV == 'init' ? ' col--sm-vr-init' : smalignV != '' ? ' col--sm-' + smalignV : '';
      } else if (mdalignV == lgalignV) {
        colClasses += mdalignV == 'init' ? ' col--md-vr-init' : mdalignV != '' ? ' col--md-' + mdalignV : '';
      }

      if (mdalignV == xlalignV) {
        if (smalignV != mdalignV) {
          colClasses += mdalignV == 'init' ? ' col--md-vr-init' : mdalignV != '' ? ' col--md-' + mdalignV : '';
        }

        colClasses += lgalignV == 'init' ? ' col--lg-vr-init' : lgalignV != '' ? ' col--lg-' + lgalignV : '';
        colClasses += xlalignV == 'init' ? ' col--xl-vr-init' : xlalignV != '' ? ' col--xl-' + xlalignV : '';
      }
    }

    colClasses += mdalignV != xlalignV && mdalignV != 'init' && xlalignV != 'init' && xlalignV != '' ? ' col--xl-' + xlalignV : '';
    colClasses += mdalignV != xlalignV && mdalignV == 'init' && xlalignV == 'init' ? ' col--xl-vr-init' : '';
  }

  colClasses += ' col--pd-' + colPadding;

  if (hideonDesktop == true) {
    colClasses += ' col--lg-hide';
  }

  if (hideonTablet == true) {
    colClasses += ' col--md-hide';
  }

  if (hideonMobile == true) {
    colClasses += ' col--xs-hide';
  }

  return [colClasses];
}

/* harmony default export */ __webpack_exports__["default"] = (colClasses);

/***/ }),

/***/ "./src/blocks/column/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/column/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_block_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/block-helpers */ "./src/utils/block-helpers.js");


/**
 * WordPress dependencies
 */




/***
 * Interal dependencies
 */


class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes: {
        backgroundColor,
        colResponsiveMode,
        xlwidth,
        lgwidth,
        mdwidth,
        smwidth,
        xswidth,
        xloffset,
        lgoffset,
        mdoffset,
        smoffset,
        xsoffset,
        colPadding,
        xlalignH,
        lgalignH,
        mdalignH,
        smalignH,
        xsalignH,
        xlalignV,
        lgalignV,
        mdalignV,
        smalignV,
        xsalignV,
        hideonDesktop,
        hideonTablet,
        hideonMobile
      },
      setAttributes
    } = this.props;
    const resMode = ['xs', 'sm', 'md', 'lg', 'xl'];
    const colSettings = {
      'xs': {
        'width': xswidth,
        'offset': xsoffset,
        'alignH': xsalignH,
        'alignV': xsalignV
      },
      'sm': {
        'width': smwidth,
        'offset': smoffset,
        'alignH': smalignH,
        'alignV': smalignV
      },
      'md': {
        'width': mdwidth,
        'offset': mdoffset,
        'alignH': mdalignH,
        'alignV': mdalignV
      },
      'lg': {
        'width': lgwidth,
        'offset': lgoffset,
        'alignH': lgalignH,
        'alignV': lgalignV
      },
      'xl': {
        'width': xlwidth,
        'offset': xloffset,
        'alignH': xlalignH,
        'alignV': xlalignV
      }
    };

    const onChangeWidth = value => {
      if (colResponsiveMode == 'xl') {
        setAttributes({
          xlwidth: value !== undefined ? value : 0
        });
      }

      if (colResponsiveMode == 'lg') {
        setAttributes({
          lgwidth: value !== undefined ? value : 0
        });
      }

      if (colResponsiveMode == 'md') {
        setAttributes({
          mdwidth: value !== undefined ? value : 0
        });
      }

      if (colResponsiveMode == 'sm') {
        setAttributes({
          smwidth: value !== undefined ? value : 0
        });
      }

      if (colResponsiveMode == 'xs') {
        setAttributes({
          xswidth: value !== undefined ? value : 0
        });
      }
    };

    const onChangeOffset = value => {
      if (colResponsiveMode == 'xl') {
        setAttributes({
          xloffset: value !== undefined ? value : -1
        });
      }

      if (colResponsiveMode == 'lg') {
        setAttributes({
          lgoffset: value !== undefined ? value : -1
        });
      }

      if (colResponsiveMode == 'md') {
        setAttributes({
          mdoffset: value !== undefined ? value : -1
        });
      }

      if (colResponsiveMode == 'sm') {
        setAttributes({
          smoffset: value !== undefined ? value : -1
        });
      }

      if (colResponsiveMode == 'xs') {
        setAttributes({
          xsoffset: value !== undefined ? value : -1
        });
      }
    };

    const onChangeAlignH = value => {
      if (colResponsiveMode == 'xl') {
        setAttributes({
          xlalignH: value
        });
      }

      if (colResponsiveMode == 'lg') {
        setAttributes({
          lgalignH: value
        });
      }

      if (colResponsiveMode == 'md') {
        setAttributes({
          mdalignH: value
        });
      }

      if (colResponsiveMode == 'sm') {
        setAttributes({
          smalignH: value
        });
      }

      if (colResponsiveMode == 'xs') {
        setAttributes({
          xsalignH: value
        });
      }
    };

    const onChangeAlignV = value => {
      if (colResponsiveMode == 'xl') {
        setAttributes({
          xlalignV: value
        });
      }

      if (colResponsiveMode == 'lg') {
        setAttributes({
          lgalignV: value
        });
      }

      if (colResponsiveMode == 'md') {
        setAttributes({
          mdalignV: value
        });
      }

      if (colResponsiveMode == 'sm') {
        setAttributes({
          smalignV: value
        });
      }

      if (colResponsiveMode == 'xs') {
        setAttributes({
          xsalignV: value
        });
      }
    };

    const resetColAlignH = responsiveMode => {
      if (responsiveMode == 'xl') {
        setAttributes({
          xlalignH: 'start'
        });
      }

      if (responsiveMode == 'lg') {
        setAttributes({
          lgalignH: 'start'
        });
      }

      if (responsiveMode == 'md') {
        setAttributes({
          mdalignH: 'start'
        });
      }

      if (responsiveMode == 'sm') {
        setAttributes({
          smalignH: 'start'
        });
      }

      if (responsiveMode == 'xs') {
        setAttributes({
          xsalignH: 'start'
        });
      }
    };

    const resetColAlignV = responsiveMode => {
      if (responsiveMode == 'xl') {
        setAttributes({
          xlalignV: ''
        });
      }

      if (responsiveMode == 'lg') {
        setAttributes({
          lgalignV: ''
        });
      }

      if (responsiveMode == 'md') {
        setAttributes({
          mdalignV: ''
        });
      }

      if (responsiveMode == 'sm') {
        setAttributes({
          smalignV: ''
        });
      }

      if (responsiveMode == 'xs') {
        setAttributes({
          xsalignV: ''
        });
      }
    };

    const SetColorClass = value => {
      _utils_block_helpers__WEBPACK_IMPORTED_MODULE_4__.theme_colors.filter(function (item) {
        if (item.color == value) {
          setAttributes({
            colbgClass: item.slug
          });
        }
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'tbblocks'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
      label: "Responsive Mode",
      className: "ix-togglegroup",
      value: colResponsiveMode,
      isBlock: true,
      onChange: value => {
        setAttributes({
          colResponsiveMode: value
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "xs",
      label: "XS",
      showTooltip: true,
      "aria-label": "Extra Small"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "sm",
      label: "SM",
      showTooltip: true,
      "aria-label": "Small"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "md",
      label: "MD",
      showTooltip: true,
      "aria-label": "Medium"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "lg",
      label: "LG",
      showTooltip: true,
      "aria-label": "Large"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "xl",
      label: "XL",
      showTooltip: true,
      "aria-label": "Extra Large"
    })), colResponsiveMode && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-control"
    }, resMode.map((item, index) => {
      let hAlign = colSettings[item]['alignH'];
      let vAlign = colSettings[item]['alignV'];
      let width = colSettings[item]['width'];
      let offset = colSettings[item]['offset'];
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "col-control-wrap",
        id: `col-${index}`
      }, colResponsiveMode == item ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Width", "tbblocks"),
        value: width,
        onChange: onChangeWidth,
        min: 0,
        max: 12,
        allowReset: true
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Offset", "tbblocks"),
        value: offset,
        onChange: onChangeOffset,
        min: -1,
        max: 11,
        allowReset: true
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "igb--row__settings"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment - Vertical", "tbblocks"),
        options: [{
          value: "",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Not Set", "tbblocks")
        }, {
          value: "top",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Top", "tbblocks")
        }, {
          value: "middle",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Middle", "tbblocks")
        }, {
          value: "bottom",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bottom", "tbblocks")
        }, {
          value: "init",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Inherited", "tbblocks")
        }],
        value: vAlign,
        onChange: onChangeAlignV
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: () => resetColAlignV(colResponsiveMode),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gitenberg-blocks'),
        className: "components-button components-range-control__reset is-secondary is-small"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'tbblocks')))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null));
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "igb--row__settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
      label: "Padding",
      className: "ix-togglegroup",
      value: colPadding,
      isBlock: true,
      onChange: value => {
        setAttributes({
          colPadding: Number(value)
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "0",
      label: "0",
      showTooltip: true,
      "aria-label": "Small"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "1",
      label: "1",
      showTooltip: true,
      "aria-label": "Medium"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "2",
      label: "2",
      showTooltip: true,
      "aria-label": "Large"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "3",
      label: "3",
      showTooltip: true,
      "aria-label": "Extra Large"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setAttributes({
        colPadding: 1
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gitenberg-blocks'),
      className: "components-button components-range-control__reset is-secondary is-small"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'tbblocks'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background color", "tbblocks"),
      className: 'ix-color-setting',
      colorSettings: [{
        colors: _utils_block_helpers__WEBPACK_IMPORTED_MODULE_4__.theme_colors,
        value: backgroundColor,
        onChange: value => {
          typeof value == 'undefined' ? setAttributes({
            colbgClass: ''
          }) : SetColorClass(value);
          setAttributes({
            backgroundColor: value
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Additional', 'tbblocks'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Hide on Desktop",
      checked: hideonDesktop,
      onChange: () => setAttributes({
        hideonDesktop: !hideonDesktop
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Hide on Tablet",
      checked: hideonTablet,
      onChange: () => setAttributes({
        hideonTablet: !hideonTablet
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Hide on Mobile",
      checked: hideonMobile,
      onChange: () => setAttributes({
        hideonMobile: !hideonMobile
      })
    }))));
  }

}

/***/ }),

/***/ "./src/blocks/column/index.js":
/*!************************************!*\
  !*** ./src/blocks/column/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_5__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/column/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/blocks/column/block.json");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _colClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./colClasses */ "./src/blocks/column/colClasses.js");
/* harmony import */ var _utils_block_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/block-icons */ "./src/utils/block-icons.js");


/**
 * WordPress dependencies
 */



/**
* Internal dependencies
*/






const {
  name,
  category,
  supports,
  description,
  keywords,
  attributes
} = _block_json__WEBPACK_IMPORTED_MODULE_5__;

const settings = {
  description,
  keywords,
  attributes,
  category,
  icon: _utils_block_icons__WEBPACK_IMPORTED_MODULE_8__.stack,
  supports,

  /**
  * @see ./edit.js
  */
  edit: props => {
    const ALLOWED_BLOCKS = ['tbblocks/heading'];
    const bgclass = props.attributes.colbgClass ? `col--bg-${props.attributes.colbgClass}` : '';
    const {
      getBlockOrder
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
      return select('core/block-editor') || select('core/editor');
    });
    props.hasChildBlocks = getBlockOrder(props.clientId).length;
    const renderappender = props.hasChildBlocks ? undefined : () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender, null);
    const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)({
      className: 'col__content'
    }, {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: renderappender
    });
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(`col ${bgclass}`, ...(0,_colClasses__WEBPACK_IMPORTED_MODULE_7__["default"])(props.attributes))
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit__WEBPACK_IMPORTED_MODULE_4__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps));
  },
  save: props => {
    const bgclass = props.attributes.colbgClass ? `col--bg-${props.attributes.colbgClass}` : '';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(`col ${bgclass}`, ...(0,_colClasses__WEBPACK_IMPORTED_MODULE_7__["default"])(props.attributes))
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col__content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
  }
};

/***/ }),

/***/ "./src/blocks/icon.js":
/*!****************************!*\
  !*** ./src/blocks/icon.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCanEditEntity": function() { return /* binding */ useCanEditEntity; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Returns whether the current user can edit the given entity.
 *
 * @param {string} kind     Entity kind.
 * @param {string} name     Entity name.
 * @param {string} recordId Record's id.
 */

function useCanEditEntity(kind, name, recordId) {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).canUserEditEntityRecord(kind, name, recordId), [kind, name, recordId]);
}
/* harmony default export */ __webpack_exports__["default"] = ({
  useCanEditEntity
});

/***/ }),

/***/ "./src/blocks/postcontent/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/postcontent/edit.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PostContentEdit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon */ "./src/blocks/icon.js");



/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function ReadOnlyContent(_ref) {
  let {
    userCanEdit,
    postType,
    postId
  } = _ref;
  const [,, content] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.useEntityProp)('postType', postType, 'content', postId);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();
  return content !== null && content !== void 0 && content.protected && !userCanEdit ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.Warning, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('This content is password protected.'))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    dangerouslySetInnerHTML: {
      __html: content === null || content === void 0 ? void 0 : content.rendered
    }
  }));
}

function EditableContent(_ref2) {
  let {
    layout,
    context = {}
  } = _ref2;
  const {
    postType,
    postId
  } = context;
  const themeSupportsLayout = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    var _getSettings;

    const {
      getSettings
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
    return (_getSettings = getSettings()) === null || _getSettings === void 0 ? void 0 : _getSettings.supportsLayout;
  }, []);
  const defaultLayout = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useSetting)('layout') || {};
  const usedLayout = !!layout && layout.inherit ? defaultLayout : layout;
  const [blocks, onInput, onChange] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.useEntityBlockEditor)('postType', postType, {
    id: postId
  });
  const props = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useInnerBlocksProps)((0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    className: ''
  }), {
    value: blocks,
    onInput,
    onChange,
    __experimentalLayout: themeSupportsLayout ? usedLayout : undefined
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", props);
}

function Content(props) {
  const {
    context: {
      queryId,
      postType,
      postId
    } = {}
  } = props;
  const isDescendentOfQueryLoop = Number.isFinite(queryId);
  const userCanEdit = (0,_icon__WEBPACK_IMPORTED_MODULE_6__.useCanEditEntity)('postType', postType, postId);
  const isEditable = userCanEdit && !isDescendentOfQueryLoop;
  return isEditable ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(EditableContent, props) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ReadOnlyContent, {
    userCanEdit: userCanEdit,
    postType: postType,
    postId: postId
  });
}

function Placeholder() {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Content')));
}

function RecursionError() {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.Warning, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block cannot be rendered inside itself.')));
}

function PostContentEdit(_ref3) {
  let {
    context,
    attributes
  } = _ref3;
  const {
    postId: contextPostId,
    postType: contextPostType
  } = context;
  const {
    layout = {}
  } = attributes;
  const [hasAlreadyRendered, RecursionProvider] = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalUseNoRecursiveRenders)(contextPostId);

  if (contextPostId && contextPostType && hasAlreadyRendered) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RecursionError, null);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RecursionProvider, null, contextPostId && contextPostType ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Content, {
    context: context,
    layout: layout
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Placeholder, null));
}

/***/ }),

/***/ "./src/blocks/postcontent/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/postcontent/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_0__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/post-content.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/postcontent/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/postcontent/edit.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;

const settings = {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/***/ }),

/***/ "./src/blocks/row/edit.js":
/*!********************************!*\
  !*** ./src/blocks/row/edit.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */




class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    const {
      attributes: {
        rowResponsiveMode,
        xlAlignH,
        lgAlignH,
        mdAlignH,
        smAlignH,
        xsAlignH,
        xlAlignV,
        lgAlignV,
        mdAlignV,
        smAlignV,
        xsAlignV,
        xlReverseCol,
        lgReverseCol,
        mdReverseCol,
        smReverseCol,
        xsReverseCol,
        colheight,
        contentwidth,
        colgap
      },
      setAttributes
    } = this.props;
    const resMode = ['xs', 'sm', 'md', 'lg', 'xl'];
    const rowSettings = {
      'xs': {
        'alignH': xsAlignH,
        'alignV': xsAlignV
      },
      'sm': {
        'alignH': smAlignH,
        'alignV': smAlignV
      },
      'md': {
        'alignH': mdAlignH,
        'alignV': mdAlignV
      },
      'lg': {
        'alignH': lgAlignH,
        'alignV': lgAlignV
      },
      'xl': {
        'alignH': xlAlignH,
        'alignV': xlAlignV
      }
    };

    const updateHAlign = value => {
      if (rowResponsiveMode == 'xl') {
        setAttributes({
          xlAlignH: value
        });
      }

      if (rowResponsiveMode == 'lg') {
        setAttributes({
          lgAlignH: value
        });
      }

      if (rowResponsiveMode == 'md') {
        setAttributes({
          mdAlignH: value
        });
      }

      if (rowResponsiveMode == 'sm') {
        setAttributes({
          smAlignH: value
        });
      }

      if (rowResponsiveMode == 'xs') {
        setAttributes({
          xsAlignH: value
        });
      }
    };

    const updateVAlign = value => {
      if (rowResponsiveMode == 'xl') {
        setAttributes({
          xlAlignV: value
        });
      }

      if (rowResponsiveMode == 'lg') {
        setAttributes({
          lgAlignV: value
        });
      }

      if (rowResponsiveMode == 'md') {
        setAttributes({
          mdAlignV: value
        });
      }

      if (rowResponsiveMode == 'sm') {
        setAttributes({
          smAlignV: value
        });
      }

      if (rowResponsiveMode == 'xs') {
        setAttributes({
          xsAlignV: value
        });
      }
    };

    const resetHAlignment = responsiveMode => {
      if (responsiveMode == 'xl') {
        setAttributes({
          xlAlignH: ''
        });
      }

      if (responsiveMode == 'lg') {
        setAttributes({
          lgAlignH: ''
        });
      }

      if (responsiveMode == 'md') {
        setAttributes({
          mdAlignH: ''
        });
      }

      if (responsiveMode == 'sm') {
        setAttributes({
          smAlignH: ''
        });
      }

      if (responsiveMode == 'xs') {
        setAttributes({
          xsAlignH: ''
        });
      }
    };

    const resetVAlignment = responsiveMode => {
      if (responsiveMode == 'xl') {
        setAttributes({
          xlAlignV: ''
        });
      }

      if (responsiveMode == 'lg') {
        setAttributes({
          lgAlignV: ''
        });
      }

      if (responsiveMode == 'md') {
        setAttributes({
          mdAlignV: ''
        });
      }

      if (responsiveMode == 'sm') {
        setAttributes({
          smAlignV: ''
        });
      }

      if (responsiveMode == 'xs') {
        setAttributes({
          xsAlignV: ''
        });
      }
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'inxperts-gutenberg-blocks'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
      label: "Responsive Mode",
      className: "ix-togglegroup",
      value: rowResponsiveMode,
      isBlock: true,
      onChange: value => {
        setAttributes({
          rowResponsiveMode: value
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "xs",
      label: "XS",
      showTooltip: true,
      "aria-label": "Extra Small"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "sm",
      label: "SM",
      showTooltip: true,
      "aria-label": "Small"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "md",
      label: "MD",
      showTooltip: true,
      "aria-label": "Medium"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "lg",
      label: "LG",
      showTooltip: true,
      "aria-label": "Large"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "xl",
      label: "XL",
      showTooltip: true,
      "aria-label": "Extra Large"
    })), rowResponsiveMode && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row-control"
    }, resMode.map((item, index) => {
      let horizontalAlign = rowSettings[item]['alignH'];
      let verticalAlign = rowSettings[item]['alignV'];
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "row-control-wrap",
        id: `row-${index}`
      }, rowResponsiveMode == item ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "igb--row__settings"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment - Horizontal", "inxperts-gutenberg-blocks"),
        options: [{
          value: "",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Not Set", "inxperts-gutenberg-blocks")
        }, {
          value: "start",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Start", "inxperts-gutenberg-blocks")
        }, {
          value: "center",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Center", "inxperts-gutenberg-blocks")
        }, {
          value: "end",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("End", "inxperts-gutenberg-blocks")
        }],
        value: horizontalAlign,
        onChange: updateHAlign
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: () => resetHAlignment(rowResponsiveMode),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gitenberg-blocks'),
        className: "components-button components-range-control__reset is-secondary is-small"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gutenberg-blocks'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "igb--row__settings"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment - Vertical", "inxperts-gutenberg-blocks"),
        options: [{
          value: "",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Not Set", "inxperts-gutenberg-blocks")
        }, {
          value: "top",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Top", "inxperts-gutenberg-blocks")
        }, {
          value: "middle",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Middle", "inxperts-gutenberg-blocks")
        }, {
          value: "bottom",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Bottom", "inxperts-gutenberg-blocks")
        }],
        value: verticalAlign,
        onChange: updateVAlign
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: () => resetVAlignment(rowResponsiveMode),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gitenberg-blocks'),
        className: "components-button components-range-control__reset is-secondary is-small"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gutenberg-blocks')))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null));
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "igb--label"
    }, "Column - Order"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "igb--row__settings"
    }, rowResponsiveMode == 'xl' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Reverse Columns",
      checked: xlReverseCol,
      onChange: () => setAttributes({
        xlReverseCol: !xlReverseCol
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setAttributes({
        xlReverseCol: false
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gitenberg-blocks'),
      className: "components-button components-range-control__reset is-secondary is-small"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gutenberg-blocks'))), rowResponsiveMode == 'lg' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Reverse Columns",
      checked: lgReverseCol,
      onChange: () => setAttributes({
        lgReverseCol: !lgReverseCol
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setAttributes({
        lgReverseCol: false
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gitenberg-blocks'),
      className: "components-button components-range-control__reset is-secondary is-small"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gutenberg-blocks'))), rowResponsiveMode == 'md' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Reverse Columns",
      checked: mdReverseCol,
      onChange: () => setAttributes({
        mdReverseCol: !mdReverseCol
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setAttributes({
        mdReverseCol: false
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gitenberg-blocks'),
      className: "components-button components-range-control__reset is-secondary is-small"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gutenberg-blocks'))), rowResponsiveMode == 'sm' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Reverse Columns",
      checked: smReverseCol,
      onChange: () => setAttributes({
        smReverseCol: !smReverseCol
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setAttributes({
        smReverseCol: false
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gitenberg-blocks'),
      className: "components-button components-range-control__reset is-secondary is-small"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gutenberg-blocks'))), rowResponsiveMode == 'xs' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Reverse Columns",
      checked: xsReverseCol,
      onChange: () => setAttributes({
        xsReverseCol: !xsReverseCol
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => setAttributes({
        xsReverseCol: false
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gitenberg-blocks'),
      className: "components-button components-range-control__reset is-secondary is-small"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reset', 'inxperts-gutenberg-blocks')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "igb--label"
    }, "Column - Height"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Same Height",
      checked: colheight,
      onChange: () => setAttributes({
        colheight: !colheight
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "igb--label"
    }, "Content - Width"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Limited Width",
      checked: contentwidth,
      onChange: () => setAttributes({
        contentwidth: !contentwidth
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
      label: "Column Gap",
      className: "ix-togglegroup",
      value: colgap,
      isBlock: true,
      onChange: value => {
        setAttributes({
          colgap: Number(value)
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "0",
      label: "0",
      showTooltip: true,
      "aria-label": "Small"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "1",
      label: "1",
      showTooltip: true,
      "aria-label": "Medium"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "2",
      label: "2",
      showTooltip: true,
      "aria-label": "Large"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
      value: "3",
      label: "3",
      showTooltip: true,
      "aria-label": "Extra Large"
    })))));
  }

}

/***/ }),

/***/ "./src/blocks/row/index.js":
/*!*********************************!*\
  !*** ./src/blocks/row/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_6__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/blocks/row/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/blocks/row/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./src/blocks/row/block.json");
/* harmony import */ var _utils_block_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/block-icons */ "./src/utils/block-icons.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _rowClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rowClasses */ "./src/blocks/row/rowClasses.js");


/**
 * WordPress dependencies
 */



/**
* Internal dependencies
*/







const {
  name,
  category,
  supports,
  description,
  keywords,
  attributes
} = _block_json__WEBPACK_IMPORTED_MODULE_6__;

const settings = {
  description,
  keywords,
  attributes,
  category,
  icon: _utils_block_icons__WEBPACK_IMPORTED_MODULE_7__.stack,
  supports,

  /**
  * @see ./edit.js
  */
  edit: props => {
    const rowclass = classnames__WEBPACK_IMPORTED_MODULE_8___default()(`row`, ...(0,_rowClasses__WEBPACK_IMPORTED_MODULE_9__["default"])(props.attributes));
    const {
      getBlockOrder
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
      return select('core/block-editor') || select('core/editor');
    });
    props.hasChildBlocks = getBlockOrder(props.clientId).length;
    const renderappender = props.hasChildBlocks ? undefined : () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender, null);
    const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)({
      className: rowclass
    }, {
      allowedBlocks: ['inxperts-gutenberg-blocks/inxperts-column'],
      renderAppender: renderappender
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(`row-wrapper`, props.attributes.contentwidth == true ? ' row-wrapper--ct-wd' : '')
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit__WEBPACK_IMPORTED_MODULE_4__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_save__WEBPACK_IMPORTED_MODULE_5__["default"], props);
  }
};

/***/ }),

/***/ "./src/blocks/row/rowClasses.js":
/*!**************************************!*\
  !*** ./src/blocks/row/rowClasses.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Return row Dynamic generated Classes
 */
function rowClasses(attributes) {
  const {
    xlAlignH,
    lgAlignH,
    mdAlignH,
    smAlignH,
    xsAlignH,
    xlAlignV,
    lgAlignV,
    mdAlignV,
    smAlignV,
    xsAlignV,
    xlReverseCol,
    lgReverseCol,
    mdReverseCol,
    smReverseCol,
    xsReverseCol,
    colheight,
    contentwidth,
    colgap
  } = attributes;
  let rowClasses = ''; // Horizontal

  if (xsAlignH == smAlignH && smAlignH == mdAlignH && mdAlignH == lgAlignH && lgAlignH == xlAlignH) {
    rowClasses += xsAlignH != '' ? ' row--xs-' + xsAlignH : '';
  } else if (smAlignH == mdAlignH && mdAlignH == lgAlignH && lgAlignH == xlAlignH) {
    rowClasses += xsAlignH != '' ? ' row--xs-' + xsAlignH : '';
    rowClasses += smAlignH != '' ? ' row--sm-' + smAlignH : '';
  } else if (mdAlignH == lgAlignH && lgAlignH == xlAlignH) {
    if (xsAlignH == smAlignH) {
      rowClasses += xsAlignH != '' ? ' row--xs-' + xsAlignH : '';
      rowClasses += mdAlignH != '' ? ' row--md-' + mdAlignH : '';
    } else if (xsAlignH != smAlignH && smAlignH == mdAlignH) {
      rowClasses += xsAlignH != '' ? ' row--xs-' + xsAlignH : '';
      rowClasses += smAlignH != '' ? ' row--sm-' + smAlignH : '';
    } else {
      rowClasses += xsAlignH != '' ? ' row--xs-' + xsAlignH : '';
      rowClasses += smAlignH != '' ? ' row--sm-' + smAlignH : '';
      rowClasses += mdAlignH != '' ? ' row--md-' + mdAlignH : '';
    }
  } else if (lgAlignH == xlAlignH) {
    if (xsAlignH == smAlignH && smAlignH == mdAlignH) {
      rowClasses += xsAlignH != '' ? ' row--xs-' + xsAlignH : '';
    } else {
      if (xsAlignH == smAlignH) {
        rowClasses += xsAlignH != '' ? ' row--xs-' + xsAlignH : '';
      } else if (smAlignH == mdAlignH) {
        rowClasses += xsAlignH != '' ? ' row--xs-' + xsAlignH : '';
        rowClasses += smAlignH != '' ? ' row--sm-' + smAlignH : '';
      } else if (xsAlignH == smAlignH && mdAlignH == lgAlignH) {
        rowClasses += xsAlignH != '' ? ' row--xs-' + xsAlignH : '';
        rowClasses += mdAlignH != '' ? ' row--md-' + mdAlignH : '';
      } else {
        rowClasses += xsAlignH != '' ? ' row--xs-' + xsAlignH : '';
        rowClasses += smAlignH != '' ? ' row--sm-' + smAlignH : '';
      }

      rowClasses += smAlignH != mdAlignH && mdAlignH != '' ? ' row--md-' + mdAlignH : '';
    }

    rowClasses += lgAlignH != '' ? ' row--lg-' + lgAlignH : '';
  } else {
    if (xsAlignH != smAlignH && smAlignH != mdAlignH && mdAlignH != lgAlignH && lgAlignH != xlAlignH) {
      rowClasses += xsAlignH != '' ? ' row--xs-' + xsAlignH : '';
      rowClasses += smAlignH != '' ? ' row--sm-' + smAlignH : '';
      rowClasses += mdAlignH != '' ? ' row--md-' + mdAlignH : '';
      rowClasses += lgAlignH != '' ? ' row--lg-' + lgAlignH : '';
      rowClasses += xlAlignH != '' ? ' row--xl-' + xlAlignH : '';
    } else if (xsAlignH == smAlignH && smAlignH == mdAlignH && mdAlignH == lgAlignH) {
      rowClasses += xsAlignH != '' ? ' row--xs-' + xsAlignH : '';
    } else {
      if (xsAlignH == smAlignH && smAlignH == mdAlignH) {
        rowClasses += xsAlignH != '' ? ' row--xs-' + xsAlignH : '';
      } else if (xsAlignH == smAlignH) {
        rowClasses += xsAlignH != '' ? ' row--xs-' + xsAlignH : '';
      }

      if (xsAlignH != smAlignH && smAlignH == mdAlignH) {
        rowClasses += xsAlignH != '' ? ' row--xs-' + xsAlignH : '';
        rowClasses += smAlignH != '' ? ' row--sm-' + smAlignH : '';
      } else if (mdAlignH == lgAlignH) {
        rowClasses += mdAlignH != '' ? ' row--md-' + mdAlignH : '';
      }

      if (mdAlignH == xlAlignH) {
        if (smAlignH != mdAlignH) {
          rowClasses += mdAlignH != '' ? ' row--md-' + mdAlignH : '';
        }

        rowClasses += lgAlignH != '' ? ' row--lg-' + lgAlignH : '';
        rowClasses += xlAlignH != '' ? ' row--xl-' + xlAlignH : '';
      }
    }

    rowClasses += mdAlignH != xlAlignH && xlAlignH != '' ? ' row--xl-' + xlAlignH : '';
  } // vertical


  if (xsAlignV == smAlignV && smAlignV == mdAlignV && mdAlignV == lgAlignV && lgAlignV == xlAlignV) {
    rowClasses += xsAlignV != '' ? ' row--xs-' + xsAlignV : '';
  } else if (smAlignV == mdAlignV && mdAlignV == lgAlignV && lgAlignV == xlAlignV) {
    rowClasses += xsAlignV != '' ? ' row--xs-' + xsAlignV : '';
    rowClasses += smAlignV != '' ? ' row--sm-' + smAlignV : '';
  } else if (mdAlignV == lgAlignV && lgAlignV == xlAlignV) {
    if (xsAlignV == smAlignV) {
      rowClasses += xsAlignV != '' ? ' row--xs-' + xsAlignV : '';
      rowClasses += mdAlignV != '' ? ' row--md-' + mdAlignV : '';
    } else if (xsAlignV != smAlignV && smAlignV == mdAlignV) {
      rowClasses += xsAlignV != '' ? ' row--xs-' + xsAlignV : '';
      rowClasses += smAlignV != '' ? ' row--sm-' + smAlignV : '';
    } else {
      rowClasses += xsAlignV != '' ? ' row--xs-' + xsAlignV : '';
      rowClasses += smAlignV != '' ? ' row--sm-' + smAlignV : '';
      rowClasses += mdAlignV != '' ? ' row--md-' + mdAlignV : '';
    }
  } else if (lgAlignV == xlAlignV) {
    if (xsAlignV == smAlignV && smAlignV == mdAlignV) {
      rowClasses += xsAlignV != '' ? ' row--xs-' + xsAlignV : '';
    } else {
      if (xsAlignV == smAlignV) {
        rowClasses += xsAlignV != '' ? ' row--xs-' + xsAlignV : '';
      } else if (smAlignV == mdAlignV) {
        rowClasses += xsAlignV != '' ? ' row--xs-' + xsAlignV : '';
        rowClasses += smAlignV != '' ? ' row--sm-' + smAlignV : '';
      } else if (xsAlignV == smAlignV && mdAlignV == lgAlignV) {
        rowClasses += xsAlignV != '' ? ' row--xs-' + xsAlignV : '';
        rowClasses += mdAlignV != '' ? ' row--md-' + mdAlignV : '';
      } else {
        rowClasses += xsAlignV != '' ? ' row--xs-' + xsAlignV : '';
        rowClasses += smAlignV != '' ? ' row--sm-' + smAlignV : '';
      }

      rowClasses += smAlignV != mdAlignV && mdAlignV != '' ? ' row--md-' + mdAlignV : '';
    }

    rowClasses += lgAlignV != '' ? ' row--lg-' + lgAlignV : '';
  } else {
    if (xsAlignV != smAlignV && smAlignV != mdAlignV && mdAlignV != lgAlignV && lgAlignV != xlAlignV) {
      rowClasses += xsAlignV != '' ? ' row--xs-' + xsAlignV : '';
      rowClasses += smAlignV != '' ? ' row--sm-' + smAlignV : '';
      rowClasses += mdAlignV != '' ? ' row--md-' + mdAlignV : '';
      rowClasses += lgAlignV != '' ? ' row--lg-' + lgAlignV : '';
      rowClasses += xlAlignV != '' ? ' row--xl-' + xlAlignV : '';
    } else if (xsAlignV == smAlignV && smAlignV == mdAlignV && mdAlignV == lgAlignV) {
      rowClasses += xsAlignV != '' ? ' row--xs-' + xsAlignV : '';
    } else {
      if (xsAlignV == smAlignV && smAlignV == mdAlignV) {
        rowClasses += xsAlignV != '' ? ' row--xs-' + xsAlignV : '';
      } else if (xsAlignV == smAlignV) {
        rowClasses += xsAlignV != '' ? ' row--xs-' + xsAlignV : '';
      }

      if (xsAlignV != smAlignV && smAlignV == mdAlignV) {
        rowClasses += xsAlignV != '' ? ' row--xs-' + xsAlignV : '';
        rowClasses += smAlignV != '' ? ' row--sm-' + smAlignV : '';
      } else if (mdAlignV == lgAlignV) {
        rowClasses += mdAlignV != '' ? ' row--md-' + mdAlignV : '';
      }

      if (mdAlignV == xlAlignV) {
        if (smAlignV != mdAlignV) {
          rowClasses += mdAlignV != '' ? ' row--md-' + mdAlignV : '';
        }

        rowClasses += lgAlignV != '' ? ' row--lg-' + lgAlignV : '';
        rowClasses += xlAlignV != '' ? ' row--xl-' + xlAlignV : '';
      }
    }

    rowClasses += mdAlignV != xlAlignV && xlAlignV != '' ? ' row--xl-' + xlAlignV : '';
  }

  if (xlReverseCol == true && lgReverseCol == true && mdReverseCol == true && smReverseCol == true && xsReverseCol == true) {
    rowClasses += ' row--xs-rv';
  } else if (xlReverseCol == true && lgReverseCol == true && mdReverseCol == true && smReverseCol == true && xsReverseCol == false) {
    rowClasses += ' row--sm-rv';
  } else if (xlReverseCol == true && lgReverseCol == true && mdReverseCol == true && smReverseCol == false && xsReverseCol == false) {
    rowClasses += ' row--md-rv';
  } else if (xlReverseCol == true && lgReverseCol == true && mdReverseCol == false && smReverseCol == false && xsReverseCol == false) {
    rowClasses += ' row--lg-rv';
  } else if (xlReverseCol == true && lgReverseCol == false && mdReverseCol == false && smReverseCol == false && xsReverseCol == false) {
    rowClasses += ' row--xl-rv';
  } else {
    rowClasses += xlReverseCol == true ? ' row--xl-rv' : '';
    rowClasses += lgReverseCol == true ? ' row--lg-rv' : '';
    rowClasses += mdReverseCol == true ? ' row--md-rv' : '';
    rowClasses += smReverseCol == true ? ' row--sm-rv' : '';
    rowClasses += xsReverseCol == true ? ' row--xs-rv' : '';
  }

  if (colheight == true) {
    rowClasses += ' row--col-ht';
  }

  rowClasses += colgap ? ` row--gap-${colgap}` : '';
  return [rowClasses];
}

/* harmony default export */ __webpack_exports__["default"] = (rowClasses);

/***/ }),

/***/ "./src/blocks/row/save.js":
/*!********************************!*\
  !*** ./src/blocks/row/save.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rowClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rowClasses */ "./src/blocks/row/rowClasses.js");


/**
 * WordPress dependencies
 */





class Save extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(`row-wrapper`, this.props.attributes.contentwidth == true ? ' row-wrapper--ct-wd' : '')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(`row`, ...(0,_rowClasses__WEBPACK_IMPORTED_MODULE_4__["default"])(this.props.attributes))
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
  }

}

/***/ }),

/***/ "./src/blocks/section/edit.js":
/*!************************************!*\
  !*** ./src/blocks/section/edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_block_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/block-helpers */ "./src/utils/block-helpers.js");


/**
 * WordPress dependencies
 */






/***
 * Interal dependencies
 */



class Edit extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
    const {
      dispatch
    } = window.wp.data;
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
    const instructions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('To edit the background image, you need permission to upload media.', 'tbblocks'));
    const ALLOWED_MEDIA_TYPES = ['image'];
    const ALLOWED_BLOCKS = ['tbblocks/paregraph'];

    const onUpdateImage = image => {
      if (bgResponsiveMode == 'xl') {
        setAttributes({
          xlbackgroundImageId: image.id,
          xlbackgroundImagesrc: image.url
        });
      }

      if (bgResponsiveMode == 'md') {
        setAttributes({
          mdbackgroundImageId: image.id,
          mdbackgroundImagesrc: image.url
        });
      }

      if (bgResponsiveMode == 'xs') {
        setAttributes({
          xsbackgroundImageId: image.id,
          xsbackgroundImagesrc: image.url
        });
      }
    };

    const onRemoveImage = () => {
      if (bgResponsiveMode == 'xl') {
        setAttributes({
          xlbackgroundImageId: undefined,
          xlbackgroundImagesrc: '',
          xlbackgroundImagewebpsrc: ''
        });
      }

      if (bgResponsiveMode == 'md') {
        setAttributes({
          mdbackgroundImageId: undefined,
          mdbackgroundImagesrc: '',
          mdbackgroundImagewebpsrc: ''
        });
      }

      if (bgResponsiveMode == 'xs') {
        setAttributes({
          xsbackgroundImageId: undefined,
          xsbackgroundImagesrc: '',
          xsbackgroundImagewebpsrc: ''
        });
      }
    };

    let hideSection = '';

    if (hideOnDesktop == true) {
      hideSection += 'section--lg-hide ';
    }

    if (hideOnTablet == true) {
      hideSection += 'section--md-hide ';
    }

    if (hideOnMobile == true) {
      hideSection += 'section--xs-hide ';
    }

    const resMode = ['xs', 'md', 'xl'];
    const responsiveBgImage = {
      'xs': {
        'BgId': xsbackgroundImageId,
        'BgImage': xsbackgroundImage
      },
      'md': {
        'BgId': mdbackgroundImageId,
        'BgImage': mdbackgroundImage
      },
      'xl': {
        'BgId': xlbackgroundImageId,
        'BgImage': xlbackgroundImage
      }
    };

    const SetColorClass = value => {
      _utils_block_helpers__WEBPACK_IMPORTED_MODULE_6__.theme_colors.filter(function (item) {
        if (item.color == value) {
          setAttributes({
            backgroundColorClass: item.slug
          });
        }
      });
    };

    const bgclass = backgroundColorClass ? `section--bg-${backgroundColorClass}` : '';

    if (xsbackgroundImage) {
      var xswebp = xsbackgroundImage.source_url.split('.')[0] + '.webp';
      var xhr = new XMLHttpRequest();
      xhr.open('HEAD', xswebp, false);
      xhr.send();

      if (xhr.status != "404") {
        setAttributes({
          xsbackgroundImagewebpsrc: xswebp
        });
      } else {
        setAttributes({
          xsbackgroundImagewebpsrc: ''
        });
      }
    }

    if (mdbackgroundImage) {
      var mdwebp = mdbackgroundImage.source_url.split('.')[0] + '.webp';
      var xhr = new XMLHttpRequest();
      xhr.open('HEAD', mdwebp, false);
      xhr.send();

      if (xhr.status != "404") {
        setAttributes({
          mdbackgroundImagewebpsrc: mdwebp
        });
      } else {
        setAttributes({
          mdbackgroundImagewebpsrc: ''
        });
      }
    }

    if (xlbackgroundImage) {
      var xlwebp = xlbackgroundImage.source_url.split('.')[0] + '.webp';
      var xhr = new XMLHttpRequest();
      xhr.open('HEAD', xlwebp, false);
      xhr.send();

      if (xhr.status != "404") {
        setAttributes({
          xlbackgroundImagewebpsrc: xlwebp
        });
      } else {
        setAttributes({
          xlbackgroundImagewebpsrc: ''
        });
      }
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToggleGroupControl, {
      label: "",
      className: "responsive_buttons",
      value: bgResponsiveMode,
      isBlock: true,
      onChange: value => {
        setAttributes({
          bgResponsiveMode: value
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToggleGroupControlOption, {
      value: "xs",
      label: "Mobile",
      showTooltip: true,
      "aria-label": "Device (min. 460px - max. 768px) "
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToggleGroupControlOption, {
      value: "md",
      label: "Tablet",
      showTooltip: true,
      "aria-label": "Device (min. 768px - max. 1440px)"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToggleGroupControlOption, {
      value: "xl",
      label: "Desktop",
      showTooltip: true,
      "aria-label": "Device > 1440px"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Image', 'tbblocks'),
      initialOpen: true
    }, bgResponsiveMode && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "media-control"
    }, resMode.map((item, index) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "media-control-wrap",
        id: `media-${index}`
      }, bgResponsiveMode == item ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, {
        fallback: instructions
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Image', 'tbblocks'),
        onSelect: onUpdateImage,
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: responsiveBgImage[item]['BgId'],
        render: _ref => {
          let {
            open
          } = _ref;
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
            id: `media-imgbtn-${index}`,
            className: !responsiveBgImage[item]['BgId'] ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
            onClick: open
          }, !!responsiveBgImage[item]['BgId'] && !responsiveBgImage[item]['BgImage'] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null), !responsiveBgImage[item]['BgId'] && (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set image', 'tbblocks'), !!responsiveBgImage[item]['BgId'] && responsiveBgImage[item]['BgImage'] && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ResponsiveWrapper, {
            naturalWidth: responsiveBgImage[item]['BgImage'].media_details.width,
            naturalHeight: responsiveBgImage[item]['BgImage'].media_details.height
          }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
            src: responsiveBgImage[item]['BgImage'].source_url,
            alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background image', 'tbblocks')
          })));
        }
      })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null), bgResponsiveMode == item && !!responsiveBgImage[item]['BgId'] && responsiveBgImage[item]['BgImage'] ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Image', 'tbblocks'),
        onSelect: onUpdateImage,
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: responsiveBgImage[item]['BgId'],
        render: _ref2 => {
          let {
            open
          } = _ref2;
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
            id: `media-replacebtn-${index}`,
            onClick: open,
            isDefault: true,
            isLarge: true,
            isLink: true,
            className: "ix-section-background-image-replace"
          }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Replace background image', 'tbblocks'));
        }
      })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null), bgResponsiveMode == item && !!responsiveBgImage[item]['BgId'] ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        id: `media-removebtn-${index}`,
        onClick: onRemoveImage,
        isLink: true,
        isDestructive: true,
        className: "ix-section-background-image-remove"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove background image', 'tbblocks'))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null));
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'tbblocks'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToggleGroupControl, {
      label: "Padding",
      className: "ix-togglegroup",
      value: padding,
      isBlock: true,
      onChange: value => {
        setAttributes({
          padding: Number(value)
        });
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToggleGroupControlOption, {
      value: "0",
      label: "0",
      showTooltip: true,
      "aria-label": "0px"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToggleGroupControlOption, {
      value: "1",
      label: "1",
      showTooltip: true,
      "aria-label": "Top:120px, Bottom:120px"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToggleGroupControlOption, {
      value: "2",
      label: "2",
      showTooltip: true,
      "aria-label": "Top:60px, Bottom:60px"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToggleGroupControlOption, {
      value: "3",
      label: "3",
      showTooltip: true,
      "aria-label": "Top:120px, Bottom:60px"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToggleGroupControlOption, {
      value: "4",
      label: "4",
      showTooltip: true,
      "aria-label": "Top:60px, Bottom:120px"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToggleGroupControlOption, {
      value: "5",
      label: "5",
      showTooltip: true,
      "aria-label": "Top:120px, Bottom:0px"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background color", "tbblocks"),
      className: 'ix-color-setting',
      colorSettings: [{
        colors: _utils_block_helpers__WEBPACK_IMPORTED_MODULE_6__.theme_colors,
        value: backgroundColor,
        onChange: value => {
          typeof value == 'undefined' ? setAttributes({
            backgroundColorClass: ''
          }) : SetColorClass(value);
          setAttributes({
            backgroundColor: value
          });
        },
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Display', 'tbblocks'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Anchor", "tbblocks"),
      help: "Specify link ID\u2026",
      type: "text",
      value: anchor,
      onChange: value => setAttributes({
        anchor: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: "Hide on Desktop",
      checked: hideOnDesktop,
      onChange: () => setAttributes({
        hideOnDesktop: !hideOnDesktop
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: "Hide on Tablet",
      checked: hideOnTablet,
      onChange: () => setAttributes({
        hideOnTablet: !hideOnTablet
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: "Hide on Mobile",
      checked: hideOnMobile,
      onChange: () => setAttributes({
        hideOnMobile: !hideOnMobile
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      id: anchor,
      className: `section section--pd-${padding} ${hideSection} ${bgclass}`
    }, (xsbackgroundImage || mdbackgroundImage || xlbackgroundImage) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "section__background"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", null, xsbackgroundImage && !mdbackgroundImage && !xlbackgroundImage ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${xsbackgroundImage.source_url}`
    }), xsbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${xsbackgroundImagewebpsrc}`
    }) : '', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${xsbackgroundImage.source_url}`
    }), xsbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${xsbackgroundImagewebpsrc}`
    }) : '', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${xsbackgroundImage.source_url}`
    }), xsbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${xsbackgroundImagewebpsrc}`
    }) : '') : '', xsbackgroundImage && mdbackgroundImage && !xlbackgroundImage ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${mdbackgroundImage.source_url}`
    }), mdbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${mdbackgroundImagewebpsrc}`
    }) : '', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${mdbackgroundImage.source_url}`
    }), mdbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${mdbackgroundImagewebpsrc}`
    }) : '', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${xsbackgroundImage.source_url}`
    }), xsbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${xsbackgroundImagewebpsrc}`
    }) : '') : '', xsbackgroundImage && mdbackgroundImage && xlbackgroundImage ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${xlbackgroundImage.source_url}`
    }), xlbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${xlbackgroundImagewebpsrc}`
    }) : '', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${mdbackgroundImage.source_url}`
    }), mdbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${mdbackgroundImagewebpsrc}`
    }) : '', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${xsbackgroundImage.source_url}`
    }), xsbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${xsbackgroundImagewebpsrc}`
    }) : '') : '', xsbackgroundImage ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `${xsbackgroundImage.source_url}`,
      alt: "",
      width: "auto",
      height: "auto"
    }) : !xsbackgroundImage && mdbackgroundImage ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `${mdbackgroundImage.source_url}`,
      alt: "",
      width: "auto",
      height: "auto"
    }) : !xsbackgroundImage && !mdbackgroundImage && xlbackgroundImage ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `${xlbackgroundImage.source_url}`,
      alt: "",
      width: "auto",
      height: "auto"
    }) : '')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `section__content`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: hasChildBlocks ? undefined : () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.ButtonBlockAppender, null)
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)((select, props) => {
  const {
    getMedia
  } = select('core');
  const {
    xlbackgroundImageId,
    mdbackgroundImageId,
    xsbackgroundImageId
  } = props.attributes;
  const {
    clientId
  } = props;
  const {
    getBlockOrder
  } = select('core/block-editor') || select('core/editor'); // Fallback to 'core/editor' for backwards compatibility

  return {
    xlbackgroundImage: xlbackgroundImageId ? getMedia(xlbackgroundImageId) : null,
    mdbackgroundImage: mdbackgroundImageId ? getMedia(mdbackgroundImageId) : null,
    xsbackgroundImage: xsbackgroundImageId ? getMedia(xsbackgroundImageId) : null,
    hasChildBlocks: getBlockOrder(clientId).length > 0
  };
}))(Edit));

/***/ }),

/***/ "./src/blocks/section/index.js":
/*!*************************************!*\
  !*** ./src/blocks/section/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_5__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/section/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/section/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/blocks/section/block.json");
/* harmony import */ var _utils_block_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/block-icons */ "./src/utils/block-icons.js");


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





const {
  name,
  category,
  supports,
  description,
  keywords,
  attributes
} = _block_json__WEBPACK_IMPORTED_MODULE_5__;

const settings = {
  description,
  keywords,
  attributes,
  category,
  icon: _utils_block_icons__WEBPACK_IMPORTED_MODULE_6__.stack,
  supports,

  /**
  * @see ./edit.js
  */
  edit: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_edit__WEBPACK_IMPORTED_MODULE_3__["default"], props));
  },
  save: props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_save__WEBPACK_IMPORTED_MODULE_4__["default"], props);
  }
};

/***/ }),

/***/ "./src/blocks/section/save.js":
/*!************************************!*\
  !*** ./src/blocks/section/save.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
* WordPress dependencies
*/



class Save extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(...arguments);
  }

  render() {
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
      }
    } = this.props;
    let hideSection = '';

    if (hideOnDesktop == true) {
      hideSection += 'section--lg-hide ';
    }

    if (hideOnTablet == true) {
      hideSection += 'section--md-hide ';
    }

    if (hideOnMobile == true) {
      hideSection += 'section--xs-hide ';
    }

    const bgclass = backgroundColorClass ? `section--bg-${backgroundColorClass}` : '';
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      id: anchor,
      className: `section section--pd-${padding} ${hideSection} ${bgclass}`
    }, (xlbackgroundImageId || mdbackgroundImageId || xsbackgroundImageId) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "section__background"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", null, xsbackgroundImagesrc && !mdbackgroundImagesrc && !xlbackgroundImagesrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${xsbackgroundImagesrc}`
    }), xsbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${xsbackgroundImagewebpsrc}`
    }) : '', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${xsbackgroundImagesrc}`
    }), xsbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${xsbackgroundImagewebpsrc}`
    }) : '', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${xsbackgroundImagesrc}`
    }), xsbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${xsbackgroundImagewebpsrc}`
    }) : '') : '', xsbackgroundImagesrc && mdbackgroundImagesrc && !xlbackgroundImagesrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${mdbackgroundImagesrc}`
    }), mdbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${mdbackgroundImagewebpsrc}`
    }) : '', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${mdbackgroundImagesrc}`
    }), mdbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${mdbackgroundImagewebpsrc}`
    }) : '', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${xsbackgroundImagesrc}`
    }), xsbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${xsbackgroundImagewebpsrc}`
    }) : '') : '', xsbackgroundImagesrc && mdbackgroundImagesrc && xlbackgroundImagesrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${xlbackgroundImagesrc}`
    }), xlbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:1025px)",
      srcset: `${xlbackgroundImagewebpsrc}`
    }) : '', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${mdbackgroundImagesrc}`
    }), mdbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width:481px)",
      srcset: `${mdbackgroundImagewebpsrc}`
    }) : '', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${xsbackgroundImagesrc}`
    }), xsbackgroundImagewebpsrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(max-width:480px)",
      srcset: `${xsbackgroundImagewebpsrc}`
    }) : '') : '', xsbackgroundImagesrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `${xsbackgroundImagesrc}`,
      alt: "",
      width: "auto",
      height: "auto"
    }) : !xsbackgroundImagesrc && mdbackgroundImagesrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `${mdbackgroundImagesrc}`,
      alt: "",
      width: "auto",
      height: "auto"
    }) : !xsbackgroundImagesrc && !mdbackgroundImagesrc && xlbackgroundImagesrc ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `${xlbackgroundImagesrc}`,
      alt: "",
      width: "auto",
      height: "auto"
    }) : '')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `section__content`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
  }

}

/***/ }),

/***/ "./src/seo-plugin/edit.js":
/*!********************************!*\
  !*** ./src/seo-plugin/edit.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */






const edit = _ref => {
  let {
    postType,
    postMeta,
    setPostMeta
  } = _ref;
  if ('post' !== postType && 'page' !== postType) return null; // Will only render component for post type 'post'

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_4__.PluginDocumentSettingPanel, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('SEO Settings', 'tbblocks'),
    icon: "",
    initialOpen: "false",
    className: "ix_hide_panel_icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextareaControl, {
    className: "igb_text_area",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Meta Title', 'tbblocks'),
    value: postMeta.seo_meta_title,
    onChange: value => setPostMeta({
      seo_meta_title: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextareaControl, {
    className: "igb_text_area",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Meta Description', 'tbblocks'),
    value: postMeta.seo_meta_description,
    onChange: value => setPostMeta({
      seo_meta_description: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No Index', 'tbblocks'),
    onChange: value => setPostMeta({
      seo_no_index: value
    }),
    checked: postMeta.seo_no_index
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No Follow', 'tbblocks'),
    onChange: value => setPostMeta({
      seo_no_follow: value
    }),
    checked: postMeta.seo_no_follow
  })));
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)([(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withSelect)(select => {
  return {
    postMeta: select('core/editor').getEditedPostAttribute('meta'),
    postType: select('core/editor').getCurrentPostType()
  };
}), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.withDispatch)(dispatch => {
  return {
    setPostMeta(newMeta) {
      dispatch('core/editor').editPost({
        meta: newMeta
      });
    }

  };
})])(edit));

/***/ }),

/***/ "./src/seo-plugin/index.js":
/*!*********************************!*\
  !*** ./src/seo-plugin/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/seo-plugin/edit.js");
/**
 * WordPress dependencies
 */


/**
* Internal dependencies
*/


(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('seo-postmeta-fields', {
  render: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/utils/block-helpers.js":
/*!************************************!*\
  !*** ./src/utils/block-helpers.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmartphoneIcon": function() { return /* binding */ SmartphoneIcon; },
/* harmony export */   "hasEmptyAttributes": function() { return /* binding */ hasEmptyAttributes; },
/* harmony export */   "hasFormattingCategory": function() { return /* binding */ hasFormattingCategory; },
/* harmony export */   "supportsCollections": function() { return /* binding */ supportsCollections; },
/* harmony export */   "theme_colors": function() { return /* binding */ theme_colors; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


/**
 * Determine if the block attributes are empty.
 *
 * @param {Object} attributes The block attributes to check.
 * @return {boolean} The empty state of the attributes passed.
 */

const hasEmptyAttributes = attributes => {
  return !Object.entries(attributes).map(_ref => {
    let [, value] = _ref;

    if (typeof value === 'string') {
      value = value.trim();
    }

    if (value instanceof Array) {
      value = value.length;
    }

    if (value instanceof Object) {
      value = Object.entries(value).length;
    }

    return !!value;
  }).filter(value => value === true).length;
};
/**
 * Return bool depending on registerBlockCollection compatibility.
 *
 * @return {boolean} Value to indicate function support.
 */

const supportsCollections = () => {
  if (typeof _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockCollection === 'function') {
    return true;
  }

  return false;
};
/**
 * Check for which category to assign.
 *
 * @return {boolean} Value to indicate function support.
 */

const hasFormattingCategory = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getCategories)().some(function (category) {
  return category.slug === 'formatting';
});
const theme_colors = [{
  name: 'White',
  slug: 'one',
  color: '#ffffff'
}, {
  name: 'Extra light Gray',
  slug: 'two',
  color: '#EDEDED'
}, {
  name: 'Dark Grey',
  slug: 'three',
  color: '#B6B6B6'
}, {
  name: 'Grey',
  slug: 'four',
  color: '#3F3F3F'
}, {
  name: 'Extra Light Red',
  slug: 'five',
  color: '#DD3333'
}, {
  name: 'Light Red',
  slug: 'six',
  color: '#D10E0E'
}, {
  name: 'Red',
  slug: 'seven',
  color: '#B30E0E'
}];
const SmartphoneIcon = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
  icon: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "11.92",
    height: "19.37",
    viewBox: "0 0 11.92 19.37"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Group_146",
    "data-name": "Group 146",
    transform: "translate(-8 -3)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Path_6",
    "data-name": "Path 6",
    d: "M18.058,3h-8.2A1.863,1.863,0,0,0,8,4.863V20.508A1.863,1.863,0,0,0,9.863,22.37h8.2a1.863,1.863,0,0,0,1.863-1.863V4.863A1.863,1.863,0,0,0,18.058,3Zm1.118,17.508a1.118,1.118,0,0,1-1.118,1.118h-8.2a1.118,1.118,0,0,1-1.118-1.118V4.863A1.118,1.118,0,0,1,9.863,3.745h8.2a1.118,1.118,0,0,1,1.118,1.118Z",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Path_7",
    "data-name": "Path 7",
    d: "M10,19.665h8.94V7H10Zm.745-11.92H18.2V18.92h-7.45Z",
    transform: "translate(-0.51 -1.02)",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    id: "Rectangle_8",
    "data-name": "Rectangle 8",
    width: "3",
    height: "1",
    transform: "translate(12 4.37)",
    fill: "#fff"
  })))
});

/***/ }),

/***/ "./src/utils/block-icons.js":
/*!**********************************!*\
  !*** ./src/utils/block-icons.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconEnvelop": function() { return /* binding */ IconEnvelop; },
/* harmony export */   "IconHome": function() { return /* binding */ IconHome; },
/* harmony export */   "IconLocation": function() { return /* binding */ IconLocation; },
/* harmony export */   "IconMail": function() { return /* binding */ IconMail; },
/* harmony export */   "IconPhone": function() { return /* binding */ IconPhone; },
/* harmony export */   "IconPhoneline": function() { return /* binding */ IconPhoneline; },
/* harmony export */   "stack": function() { return /* binding */ stack; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Wordpress Icon element
 */

/**
 * SVG Icons For all blocks.
 */

const stack = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "15",
    viewBox: "0 0 13 15"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Layer_9",
    transform: "translate(-1 -1)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Path_1",
    "data-name": "Path 1",
    d: "M1,1V16H14V1Zm.867,14V9h5.2v6Zm11.267,0h-5.2V12.5h5.2Zm0-3.5h-5.2V9h5.2ZM7.933,8H1.867V2H13.133V8Z"
  })))
});
const IconPhone = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16.002",
    viewBox: "0 0 16 16.002"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "phone-solid_1_",
    "data-name": "phone-solid (1)",
    d: "M15.977,12.089l-.727,3.15A.971.971,0,0,1,14.3,16,14.314,14.314,0,0,1,0,1.7.971.971,0,0,1,.757.746L3.907.019A.981.981,0,0,1,5.025.586L6.479,3.977A.978.978,0,0,1,6.2,5.116L4.516,6.467A10.928,10.928,0,0,0,9.5,11.452L10.879,9.77a.972.972,0,0,1,1.14-.28l3.391,1.454A1.066,1.066,0,0,1,15.977,12.089Z",
    transform: "translate(0 0.006)",
    fill: "#fff"
  }))
});
const IconMail = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "12",
    viewBox: "0 0 16 12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "envelope-solid_1_",
    "data-name": "envelope-solid (1)",
    d: "M14.5,64a1.5,1.5,0,0,1,.9,2.7L8.6,71.8a1,1,0,0,1-1.2,0L.6,66.7A1.5,1.5,0,0,1,1.5,64ZM6.8,72.6a2,2,0,0,0,2.4,0L16,67.5V74a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V67.5Z",
    transform: "translate(0 -64)",
    fill: "#fff"
  }))
});
const IconLocation = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12.031",
    height: "16",
    viewBox: "0 0 12.031 16"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "location-dot-solid_1_",
    "data-name": "location-dot-solid (1)",
    d: "M5.273,15.64C3.638,13.629,0,8.754,0,6.016a6.016,6.016,0,0,1,12.031,0c0,2.738-3.666,7.613-5.273,9.625a.947.947,0,0,1-1.485,0Zm.743-7.62A2.005,2.005,0,1,0,4.01,6.016,2.007,2.007,0,0,0,6.016,8.021Z",
    fill: "#fff"
  }))
});
const IconEnvelop = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "43.26",
    height: "30.709",
    viewBox: "0 0 43.26 30.709"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "envelope-regular_1_",
    "data-name": "envelope-regular (1)",
    d: "M0,69.118A5.268,5.268,0,0,1,5.407,64H37.852a5.271,5.271,0,0,1,5.407,5.118V89.591a5.274,5.274,0,0,1-5.407,5.118H5.407A5.271,5.271,0,0,1,0,89.591Zm4.056,0v1.767L18.63,82.21a4.921,4.921,0,0,0,6,0L39.2,70.886V69.046a1.371,1.371,0,0,0-1.352-1.28H5.407a1.369,1.369,0,0,0-1.352,1.28Zm0,6.734V89.591a1.319,1.319,0,0,0,1.352,1.28H37.852a1.321,1.321,0,0,0,1.352-1.28V75.852l-12,9.325a9.287,9.287,0,0,1-11.229,0Z",
    transform: "translate(0 -64)",
    fill: "#fff"
  }))
});
const IconHome = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "43",
    height: "41.644",
    viewBox: "0 0 43 41.644"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(57.974 11.625)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    id: "Group_1002",
    "data-name": "Group 1002",
    transform: "translate(-57.974 -11.625)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Path_18",
    "data-name": "Path 18",
    d: "M158.134,215.543l-14.62-11.953a1.843,1.843,0,0,0-2.33,0l-14.62,11.953a1.805,1.805,0,0,0-.664,1.4V234.98a1.82,1.82,0,0,0,1.829,1.813h29.236a1.82,1.82,0,0,0,1.829-1.813V216.942A1.787,1.787,0,0,0,158.134,215.543Zm-13.851,17.624h-3.869V223.119h3.869v10.048Zm10.852,0h-7.189V221.306a1.82,1.82,0,0,0-1.829-1.813h-7.536a1.82,1.82,0,0,0-1.829,1.813v11.866h-7.189V217.8l12.786-10.458L155.136,217.8Z",
    transform: "translate(-120.849 -195.15)",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Path_19",
    "data-name": "Path 19",
    d: "M52.343,41.854c-4.068-3.239-7.907-6.334-12.071-9.743-1.246-1.112-2.554-2.162-3.818-3.182-1.237-1-2.519-2.027-3.7-3.086a1.831,1.831,0,0,0-2.444,0c-1.18,1.055-2.462,2.088-3.7,3.086-1.264,1.016-2.576,2.071-3.818,3.182-4.164,3.409-8,6.5-12.071,9.743a1.808,1.808,0,0,0-.29,2.55,1.839,1.839,0,0,0,2.567.283c4.094-3.256,7.951-6.369,12.142-9.8.022-.017.039-.035.061-.052,1.18-1.055,2.462-2.088,3.7-3.086.869-.7,1.755-1.408,2.628-2.149.873.737,1.76,1.452,2.624,2.149,1.237,1,2.519,2.027,3.7,3.086.022.017.039.035.061.052,4.191,3.431,8.048,6.543,12.142,9.8a1.82,1.82,0,0,0,2.286-2.833Z",
    transform: "translate(-10.026 -25.375)",
    fill: "#fff"
  }))))
});
const IconPhoneline = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "43",
    height: "38.973",
    viewBox: "0 0 43 42.973"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    id: "Path_21",
    "data-name": "Path 21",
    d: "M51.946,42.664c-.654-.461-7.836-5.235-8.718-5.774a2.616,2.616,0,0,0-1.36-.351,4.584,4.584,0,0,0-2.093.562c-.689.364-2.786,1.558-3.809,2.141a51.033,51.033,0,0,1-6.362-5.6,50.658,50.658,0,0,1-5.6-6.358c.584-1.022,1.777-3.115,2.137-3.8a3.513,3.513,0,0,0,.206-3.471c-.522-.825-5.278-8.038-5.77-8.718a2.655,2.655,0,0,0-2.189-.987,3.739,3.739,0,0,0-2.115.667c-.061.053-6.375,4.625-6.292,7.227.233,7.31,7.336,15.9,13.251,21.82S37.739,53.04,45.079,53.273h.061c2.567,0,7.082-6.23,7.126-6.292a3.079,3.079,0,0,0-.32-4.317Zm-1.852,2.751c-1.7,2.356-4.111,4.818-5.059,5.173-5.028-.237-12.088-4.66-19.9-12.47S12.909,23.257,12.672,18.242c.338-.952,2.8-3.379,5.138-5.068a1.06,1.06,0,0,1,.584-.189A.4.4,0,0,1,18.5,13c.755,1.093,4.8,7.227,5.537,8.367a1.889,1.889,0,0,1-.268.864c-.25.465-1.009,1.821-2.1,3.725l-.842,1.479.978,1.4A53.816,53.816,0,0,0,27.7,35.542a53.586,53.586,0,0,0,6.718,5.9l1.4.978,1.479-.842c1.43-.82,3.164-1.8,3.725-2.1a1.87,1.87,0,0,1,.842-.259.109.109,0,0,1,.039,0c1.022.641,7.288,4.8,8.394,5.555a.92.92,0,0,1-.2.636Z",
    transform: "translate(-9.981 -10.3)",
    fill: "#fff"
  }))
});

/***/ }),

/***/ "./src/utils/helper.js":
/*!*****************************!*\
  !*** ./src/utils/helper.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlockIconColor": function() { return /* binding */ getBlockIconColor; },
/* harmony export */   "registerBlock": function() { return /* binding */ registerBlock; }
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-helpers */ "./src/utils/block-helpers.js");
/**
 * WordPress dependencies
 */
 // Categories Helper


/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 */

const registerBlock = block => {
  var _block$metadata;

  if (!block) {
    return;
  }

  let {
    category
  } = block;
  const {
    name,
    settings
  } = block;

  if (!(0,_block_helpers__WEBPACK_IMPORTED_MODULE_1__.supportsCollections)() && !name.includes('gallery')) {
    category = 'tbblocks';
  }

  let icon = '';

  if (!!(settings !== null && settings !== void 0 && settings.icon)) {
    icon = {
      foreground: getBlockIconColor(),
      src: settings.icon
    };
  }

  const isV2 = (block === null || block === void 0 ? void 0 : (_block$metadata = block.metadata) === null || _block$metadata === void 0 ? void 0 : _block$metadata.apiVersion) === 2;
  const v2Settings = isV2 ? block === null || block === void 0 ? void 0 : block.metadata : {};

  if (!!(settings !== null && settings !== void 0 && settings.attributes) && isV2) {
    v2Settings.attributes = { ...v2Settings.attributes,
      ...(settings === null || settings === void 0 ? void 0 : settings.attributes)
    };
  }

  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, { ...settings,
    category,
    icon,
    // V2 Block API Upgrades
    ...v2Settings
  });
};
/**
 * Returns the color used for Icon Color in the block editor.
 */

function getBlockIconColor() {
  return '#09757A';
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/blocks/column/block.json":
/*!**************************************!*\
  !*** ./src/blocks/column/block.json ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"tbblocks/column","version":"0.1.5","title":"Grid - Column","category":"theme","description":"A gutenberg block to use Column.","supports":{"html":false,"anchor":true},"attributes":{"colResponsiveMode":{"type":"string","default":"xs"},"backgroundColor":{"type":"string","default":""},"colbgClass":{"type":"string","default":""},"xlwidth":{"type":"number","default":0},"lgwidth":{"type":"number","default":0},"mdwidth":{"type":"number","default":0},"smwidth":{"type":"number","default":0},"xswidth":{"type":"number","default":0},"xloffset":{"type":"number","default":-1},"lgoffset":{"type":"number","default":-1},"mdoffset":{"type":"number","default":-1},"smoffset":{"type":"number","default":-1},"xsoffset":{"type":"number","default":-1},"colPadding":{"type":"number","default":1},"xlalignH":{"type":"string","default":"init"},"lgalignH":{"type":"string","default":"init"},"mdalignH":{"type":"string","default":"init"},"smalignH":{"type":"string","default":"init"},"xsalignH":{"type":"string","default":"init"},"xlalignV":{"type":"string","default":""},"lgalignV":{"type":"string","default":""},"mdalignV":{"type":"string","default":""},"smalignV":{"type":"string","default":""},"xsalignV":{"type":"string","default":""},"hideonDesktop":{"type":"boolean","default":false},"hideonTablet":{"type":"boolean","default":false},"hideonMobile":{"type":"boolean","default":false}},"keywords":["column","tbblocks"],"parent":["tbblocks/row"],"textdomain":"tbblocks","editorScript":"file:./blocks-1.js"}');

/***/ }),

/***/ "./src/blocks/postcontent/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/postcontent/block.json ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"tbblocks/postcontent","title":"TbBlocks Post Content","category":"theme","description":"Displays the contents of a post or page.","textdomain":"default","usesContext":["postId","postType","queryId"],"supports":{"align":["wide","full"],"html":false,"__experimentalLayout":true},"style":"tbblocks-frontend"}');

/***/ }),

/***/ "./src/blocks/row/block.json":
/*!***********************************!*\
  !*** ./src/blocks/row/block.json ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"tbblocks/row","version":"0.1.5","title":"Grid - Row","category":"theme","description":"A gutenberg block to use Row.","supports":{"html":false,"anchor":true},"attributes":{"rowResponsiveMode":{"type":"string","default":"xs"},"xlAlignH":{"type":"string","default":""},"lgAlignH":{"type":"string","default":""},"mdAlignH":{"type":"string","default":""},"smAlignH":{"type":"string","default":""},"xsAlignH":{"type":"string","default":""},"xlAlignV":{"type":"string","default":""},"lgAlignV":{"type":"string","default":""},"mdAlignV":{"type":"string","default":""},"smAlignV":{"type":"string","default":""},"xsAlignV":{"type":"string","default":""},"xlReverseCol":{"type":"boolean","default":false},"lgReverseCol":{"type":"boolean","default":false},"mdReverseCol":{"type":"boolean","default":false},"smReverseCol":{"type":"boolean","default":false},"xsReverseCol":{"type":"boolean","default":false},"colheight":{"type":"boolean","default":false},"contentwidth":{"type":"boolean","default":false},"colgap":{"type":"number","default":1}},"keywords":["row","TbBlocks"],"parent":["tbblocks/section"],"textdomain":"tbblocks","editorScript":"file:./blocks-1.js"}');

/***/ }),

/***/ "./src/blocks/section/block.json":
/*!***************************************!*\
  !*** ./src/blocks/section/block.json ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"tbblocks/section","version":"0.1.5","title":"Section","category":"theme","description":"A gutenberg block to use Section.","supports":{"html":false,"anchor":true},"attributes":{"padding":{"type":"number","default":"1"},"bgResponsiveMode":{"type":"string","default":"xs"},"xlbackgroundImageId":{"type":"number","default":""},"xlbackgroundImagesrc":{"type":"string","default":""},"xlbackgroundImagewebpsrc":{"type":"string","default":""},"mdbackgroundImageId":{"type":"number","default":""},"mdbackgroundImagesrc":{"type":"string","default":""},"mdbackgroundImagewebpsrc":{"type":"string","default":""},"xsbackgroundImageId":{"type":"number","default":""},"xsbackgroundImagesrc":{"type":"string","default":""},"xsbackgroundImagewebpsrc":{"type":"string","default":""},"backgroundColor":{"type":"string","default":""},"backgroundColorClass":{"type":"string","default":""},"anchor":{"type":"string","default":""},"hideOnDesktop":{"type":"boolean","default":false},"hideOnTablet":{"type":"boolean","default":false},"hideOnMobile":{"type":"boolean","default":false}},"keywords":["section","block","TbBlocks"],"textdomain":"tbblocks","editorScript":"file:./blocks-1.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"tbblocks-1": 0,
/******/ 			"./style-tbblocks-1": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktabler_blocks"] = self["webpackChunktabler_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-tbblocks-1"], function() { return __webpack_require__("./src/blocks-1.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=tbblocks-1.js.map