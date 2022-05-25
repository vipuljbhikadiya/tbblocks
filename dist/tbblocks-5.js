/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/edit.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/edit.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pencil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pencil */ "./node_modules/@wordpress/icons/build-module/library/pencil.js");
/**
 * Internal dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = (_pencil__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=edit.js.map

/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/pencil.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/pencil.js ***!
  \**********************************************************************/
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

const pencil = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"
}));
/* harmony default export */ __webpack_exports__["default"] = (pencil);
//# sourceMappingURL=pencil.js.map

/***/ }),

/***/ "./src/blocks/map/controls.js":
/*!************************************!*\
  !*** ./src/blocks/map/controls.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/edit.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */





function Controls(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    address,
    pinned
  } = attributes;
  const toolbarControls = [{
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
    isActive: !pinned,
    onClick: () => setAttributes({
      pinned: !pinned
    }),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Location', 'tbblocks')
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, address && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {
    controls: toolbarControls
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ }),

/***/ "./src/blocks/map/edit-gmaps-iframe-render.js":
/*!****************************************************!*\
  !*** ./src/blocks/map/edit-gmaps-iframe-render.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


const locale = document.documentElement.lang;

const GoogleMapIframeRender = props => {
  const {
    attributes
  } = props;
  const {
    address,
    height,
    zoom
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      height,
      position: 'absolute',
      width: '100%'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "iframe__overflow-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    frameBorder: "0",
    src: `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&hl=${locale}&z=${zoom}`,
    style: {
      minHeight: height + 'px',
      width: '100%'
    },
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Google Map', 'tbblocks')
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (GoogleMapIframeRender);

/***/ }),

/***/ "./src/blocks/map/edit.js":
/*!********************************!*\
  !*** ./src/blocks/map/edit.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_block_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/block-icons */ "./src/utils/block-icons.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls */ "./src/blocks/map/controls.js");
/* harmony import */ var _edit_gmaps_iframe_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-gmaps-iframe-render */ "./src/blocks/map/edit-gmaps-iframe-render.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */








const Edit = props => {
  const {
    attributes,
    className,
    isSelected,
    setAttributes
  } = props;
  const {
    address,
    pinned,
    height,
    zoom
  } = attributes;
  const [addressState, setAddress] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(address);
  const {
    __unstableMarkNextChangeAsNotPersistent
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isSelected && !pinned && addressState && Object.keys(addressState).length) {
      // This side-effect should not create an undo level.
      __unstableMarkNextChangeAsNotPersistent();

      setAttributes({
        address: addressState,
        pinned: true
      });
    }
  }, [isSelected, pinned, addressState]);

  const renderMap = event => {
    if (event) {
      event.preventDefault();
    }

    setAttributes({
      address: addressState,
      pinned: true
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, null, isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Settings', 'tbblocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Adrress", "tbblocks"),
    type: "text",
    value: attributes.address,
    onChange: value => setAttributes({
      address: addressState
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Height', 'tbblocks'),
    max: 800,
    min: 200,
    onChange: nextHeight => setAttributes({
      height: nextHeight
    }),
    step: 1,
    value: height
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Zoom Level', 'tbblocks'),
    max: 20,
    min: 5,
    onChange: nextZoom => setAttributes({
      zoom: nextZoom
    }),
    step: 1,
    value: zoom
  })))), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls__WEBPACK_IMPORTED_MODULE_3__["default"], props), pinned ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.ResizableBox, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      'is-selected': isSelected
    }),
    enable: {
      bottom: true,
      bottomLeft: false,
      bottomRight: false,
      left: false,
      right: false,
      top: false,
      topLeft: false,
      topRight: false
    },
    minHeight: "200",
    onResizeStop: (_event, _direction, _elt, delta) => {
      setAttributes({
        height: parseInt(height + delta.height, 10)
      });
    },
    showHandle: isSelected,
    size: {
      height,
      width: '100%'
    }
  }, (0,_edit_gmaps_iframe_render__WEBPACK_IMPORTED_MODULE_4__["default"])(props)) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Placeholder, {
    icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Icon, {
      icon: _utils_block_icons__WEBPACK_IMPORTED_MODULE_2__.IconLocation
    }),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Enter a location or address to drop a pin on a Google map.', 'tbblocks'),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Map', 'tbblocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: renderMap
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.TextControl, {
    className: "components-placeholder__input",
    onChange: nextAddress => setAddress(nextAddress),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Search for a place or address…', 'tbblocks'),
    value: addressState || ''
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Button, {
    disabled: !addressState,
    isPrimary: !!addressState,
    isSecondary: !addressState,
    type: "submit"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Search', 'tbblocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-placeholder__learn-more"
  }, address && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.Button, {
    className: "components-placeholder__cancel-button",
    disabled: !address,
    isTertiary: true,
    onClick: () => {
      setAttributes({
        pinned: !pinned
      });
      setAddress(address);
    },
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Cancel', 'tbblocks')
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Cancel', 'tbblocks'))))));
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__.compose)([_wordpress_components__WEBPACK_IMPORTED_MODULE_9__.withNotices])(Edit));

/***/ }),

/***/ "./src/blocks/map/index.js":
/*!*********************************!*\
  !*** ./src/blocks/map/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": function() { return /* reexport default export from named module */ _block_json__WEBPACK_IMPORTED_MODULE_3__; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/blocks/map/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/blocks/map/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/map/block.json");
/* harmony import */ var _utils_block_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/block-icons */ "./src/utils/block-icons.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





const {
  name
} = _block_json__WEBPACK_IMPORTED_MODULE_3__;

const settings = {
  icon: _utils_block_icons__WEBPACK_IMPORTED_MODULE_4__.stack,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/blocks/map/save.js":
/*!********************************!*\
  !*** ./src/blocks/map/save.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



function Save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    address,
    height,
    zoom
  } = attributes;
  const backgroundStyles = {
    minHeight: height ? height + 'px' : undefined
  };
  const mapAttributes = {
    address,
    zoom
  };
  const locale = document.documentElement.lang;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: backgroundStyles
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Google Map', 'tbblocks'),
    frameBorder: "0",
    style: {
      width: '100%',
      minHeight: height + 'px'
    },
    src: `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&hl=${locale}&z=${zoom}`
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Save);

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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

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

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./src/blocks/map/block.json":
/*!***********************************!*\
  !*** ./src/blocks/map/block.json ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"tbblocks/map","title":"Map","category":"layout","attributes":{"address":{"type":"string"},"zoom":{"type":"number","default":12},"pinned":{"type":"boolean","default":false},"height":{"type":"number","default":300}},"textdomain":"tbblocks","editorScript":"blocks-5","description":"Add an address or location to drop a pin on a Google map."}');

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/blocks-5.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _blocks_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/map */ "./src/blocks/map/index.js");

/**
 * Import Gutenburg Blocks here
 */


/**
 * Function to register blocks provided by tbblocks.
 */

[_blocks_map__WEBPACK_IMPORTED_MODULE_1__].forEach(_utils_helper__WEBPACK_IMPORTED_MODULE_0__.registerBlock);
}();
/******/ })()
;
//# sourceMappingURL=tbblocks-5.js.map