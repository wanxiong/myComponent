'use strict';

var React = require('react');
var moment = require('moment');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

function ModalOverflow() {
  var originalOverflow;

  var stopScroll = function stopScroll(e) {
    e.stopPropagation();
    e.preventDefault();
  };

  React__default['default'].useEffect(function () {
    var style = document.body.style;
    originalOverflow = style.overflow;
    style.overflow = 'hidden';
    document.body.addEventListener("touchmove", stopScroll, {
      passive: false
    });
    return function () {
      document.body.style.overflow = originalOverflow;
      originalOverflow = undefined;
      document.body.removeEventListener('touchmove', stopScroll);
      document.body.removeEventListener('touchmove', stopScroll, {
        passive: true
      });
    };
  }, []);
  return null;
}

/**
 * @params  { Boolean isOpen} 是否开启禁止页面body滚动默认 false
 * @params  { Function onClose} 点击页面空白区域的回调
 * @params  { String title} 日历标题
 * @params  { React.Element headerRender} 日历头部区域
 * @params  { Function handleScroll} 页面的滚动scroll事件回调
 * @params  { React.Element footerRender} 日历尾部区域
 * @params  { Function dateCellRender} 日历的每一天的render方法
 * @params  { Array monthArr} 渲染日历的数据源
 *          {
 *            firstDate: String, // 当前日历的时间
 *            dateArr: Array     // 当前日历的每一天数据
 *          }
 * @params  { Function contentRender} 日历中间的自定义区域，输出function返回的值，此时dateCellRender无效
*/

function CalendarSelect(_ref) {
  var _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$headerRender = _ref.headerRender,
      headerRender = _ref$headerRender === void 0 ? null : _ref$headerRender,
      _ref$footerRender = _ref.footerRender,
      footerRender = _ref$footerRender === void 0 ? null : _ref$footerRender,
      _ref$handleScroll = _ref.handleScroll,
      handleScroll = _ref$handleScroll === void 0 ? function () {} : _ref$handleScroll,
      _ref$dateCellRender = _ref.dateCellRender,
      dateCellRender = _ref$dateCellRender === void 0 ? function () {} : _ref$dateCellRender,
      _ref$contentRender = _ref.contentRender,
      contentRender = _ref$contentRender === void 0 ? null : _ref$contentRender,
      _ref$monthArr = _ref.monthArr,
      monthArr = _ref$monthArr === void 0 ? [] : _ref$monthArr;

  onscroll = function onscroll(e) {
    var _e$target = e.target,
        scrollTop = _e$target.scrollTop,
        scrollHeight = _e$target.scrollHeight,
        offsetHeight = _e$target.offsetHeight;
    handleScroll(scrollTop, scrollHeight, offsetHeight, e);
  };

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "wrc-calendarWrap ".concat(isOpen ? 'opened' : '')
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: 'bg',
    onClick: onClose
  }), isOpen && /*#__PURE__*/React__default['default'].createElement(ModalOverflow, null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: 'selectWrap'
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: 'selectHeader'
  }, headerRender ? headerRender : /*#__PURE__*/React__default['default'].createElement("div", {
    className: 'banner',
    onClick: onClose
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: 'closeIcon'
  }, /*#__PURE__*/React__default['default'].createElement("font", null)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: 'title'
  }, title || '选择日期'), /*#__PURE__*/React__default['default'].createElement("div", null)), /*#__PURE__*/React__default['default'].createElement("div", {
    className: 'weekWrap'
  }, /*#__PURE__*/React__default['default'].createElement("em", null, "\u4E00"), /*#__PURE__*/React__default['default'].createElement("em", null, "\u4E8C"), /*#__PURE__*/React__default['default'].createElement("em", null, "\u4E09"), /*#__PURE__*/React__default['default'].createElement("em", null, "\u56DB"), /*#__PURE__*/React__default['default'].createElement("em", null, "\u4E94"), /*#__PURE__*/React__default['default'].createElement("em", null, "\u516D"), /*#__PURE__*/React__default['default'].createElement("em", null, "\u65E5"))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: 'monthContent',
    onScroll: onscroll
  }, contentRender ? contentRender(monthArr) : monthArr.map(function (monthItem) {
    var firstDateStr = monthItem.firstDate.format('YYYY年MM月');
    return /*#__PURE__*/React__default['default'].createElement("div", {
      key: firstDateStr,
      className: 'monthItem'
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: 'monthTitle'
    }, firstDateStr), /*#__PURE__*/React__default['default'].createElement("div", {
      className: 'dateContent'
    }, monthItem.dateArr.map(function (item, index) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: index,
        className: 'dateItem'
      }, item ? dateCellRender(item, index) : undefined);
    })));
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: 'footer'
  }, footerRender())));
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

var _baseRange = baseRange;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_1(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite;

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && _isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite_1(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite_1(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite_1(step);
    return _baseRange(start, end, step, fromRight);
  };
}

var _createRange = createRange;

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = _createRange();

var range_1 = range;

/**
 * 获取当月日期数组，包含空格
 * @param firstDate
 * @returns {*}
 */

var getMonthDateRange = (function (firstDate) {
  // 当月第一天星期
  var firstDay = moment__default['default'](firstDate).startOf('month').day(); // 日历第一天前的空格数量

  var firstBlank = firstDay === 0 ? 6 : firstDay - 1; // 当前月最大天数

  var maxDate = moment__default['default'](firstDate).endOf('month').date(); // 天数数组

  var dateRangeArr = range_1(1, maxDate + 1).map(function (item) {
    return moment__default['default'](firstDate).date(item);
  });
  var firstBlankArr = range_1(0, firstBlank, 0); // 日历最后一天的空格数量

  var remainGrid = (firstBlank + maxDate) % 7;
  var endBlankArr = range_1(0, remainGrid && 7 - remainGrid, 0); // 组装日历单元格

  return firstBlankArr.concat(dateRangeArr).concat(endBlankArr);
});

function Calendar(_ref) {
  var startDate = _ref.startDate,
      endDate = _ref.endDate,
      handleScroll = _ref.handleScroll,
      dateCellBottomRender = _ref.dateCellBottomRender,
      disabledStartTime = _ref.disabledStartTime,
      disabledEndTime = _ref.disabledEndTime,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      _ref$themeColor = _ref.themeColor,
      themeColor = _ref$themeColor === void 0 ? '#fff' : _ref$themeColor,
      _ref$isMultipleMode = _ref.isMultipleMode,
      isMultipleMode = _ref$isMultipleMode === void 0 ? false : _ref$isMultipleMode,
      _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? function () {} : _ref$onSelect,
      _ref$headerRender = _ref.headerRender,
      headerRender = _ref$headerRender === void 0 ? null : _ref$headerRender,
      _ref$contentRender = _ref.contentRender,
      contentRender = _ref$contentRender === void 0 ? null : _ref$contentRender,
      monthCount = _ref.monthCount,
      isOpen = _ref.isOpen,
      defaultDate = _ref.defaultDate;

  var _useState = React.useState(startDate ? moment__default['default'](startDate) : null),
      _useState2 = slicedToArray(_useState, 2),
      startMoment = _useState2[0],
      setStartMoment = _useState2[1];

  var _useState3 = React.useState(endDate ? moment__default['default'](endDate) : null),
      _useState4 = slicedToArray(_useState3, 2),
      endMoment = _useState4[0],
      setEndMoment = _useState4[1];

  var _useState5 = React.useState(defaultDate || moment__default['default']()),
      _useState6 = slicedToArray(_useState5, 1),
      nowDate = _useState6[0];

  var _useState7 = React.useState(0),
      _useState8 = slicedToArray(_useState7, 2),
      count = _useState8[0],
      setCount = _useState8[1];

  var _useState9 = React.useState([]),
      _useState10 = slicedToArray(_useState9, 2),
      monthArr = _useState10[0],
      setMonthArr = _useState10[1];

  var initMonthArr = function initMonthArr(changeMonth) {
    var currentDate = moment__default['default']().date(1).hours(0).minutes(0).seconds(0).milliseconds(0); // 最近 3 个月日历

    var monthArr = [];

    for (var i = 0; i < Number(changeMonth || 1); i++) {
      var firstDate = moment__default['default'](currentDate).add(i, 'months');
      monthArr.push({
        firstDate: firstDate,
        dateArr: getMonthDateRange(firstDate)
      });
    }

    return monthArr;
  };

  React.useEffect(function () {
    var nowDateArr = initMonthArr(monthCount);
    setMonthArr(toConsumableArray(nowDateArr));
  }, []);

  var onSelectDate = function onSelectDate(dateMoment) {
    // 第一次选择
    if (count === 0) {
      setStartMoment(dateMoment); // 多个日期不自动选择结束日期

      setEndMoment(isMultipleMode ? null : dateMoment);

      if (isMultipleMode) {
        setCount(1);
      }
    } else if (count === 1 && dateMoment.isBefore(startMoment)) {
      setStartMoment(dateMoment);
      setCount(1);
    } else if (count === 1) {
      setEndMoment(dateMoment);
      setCount(0);
    }
  };

  var dateCellRender = function dateCellRender(currentMoment, index) {
    var dateStr = currentMoment.format('YYYY-MM-DD');
    var nowDateStr = nowDate.format('YYYY-MM-DD'); // 设置禁用日期
    // 中间没有库存的日期之后都不能选择
    // 禁用日期点击

    var nowSelectedStartDisabledMoment = null; // 是否有禁止时间
    //  disabledStartTime,
    // disabledEndTime,

    if (disabledStartTime && disabledEndTime) {
      if (disabledStartTime.isAfter(currentMoment) || disabledEndTime.isBefore(currentMoment)) {
        nowSelectedStartDisabledMoment = true;
      }
    } else {
      if (nowDate.isAfter(currentMoment)) {
        nowSelectedStartDisabledMoment = true;
      }
    }

    if (nowDateStr === dateStr) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: 'wrc_calendar_disabledText'
      }, "\u4ECA\u65E5");
    } else if (nowDate.isAfter(currentMoment)) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: 'wrc_calendar_disabledText'
      }, currentMoment.date());
    } else if (nowSelectedStartDisabledMoment) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: 'wrc_calendar_selectItem'
      }, /*#__PURE__*/React__default['default'].createElement("div", {
        className: 'wrc_calendar_disabledText'
      }, currentMoment.date()), dateCellBottomRender && dateCellBottomRender(currentMoment, index));
    } else {
      var isSameStart = currentMoment.isSame(startMoment);
      var isSameEnd = currentMoment.isSame(endMoment);
      var isBetween = currentMoment.isBefore(endMoment) && currentMoment.isAfter(startMoment);
      var disabledDate = nowSelectedStartDisabledMoment && nowSelectedStartDisabledMoment.isBefore(currentMoment);
      return /*#__PURE__*/React__default['default'].createElement("div", {
        className: "\n              wrc_calendar_selectItem\n              ".concat(isSameStart ? 'selectedStart' : '', "\n              ").concat(isSameEnd ? 'selectedEnd' : '', "\n              ").concat(isBetween ? 'selected' : '', "\n              ").concat(disabledDate ? 'disabledDate' : '', "\n            "),
        onClick: function onClick() {
          if (!disabledDate) {
            onSelectDate(currentMoment);
          }
        },
        style: {
          'background': themeColor
        }
      }, isSameStart && isSameEnd ? /*#__PURE__*/React__default['default'].createElement("div", {
        className: 'tipText'
      }, "\u5DF2\u9009") : isSameStart ? /*#__PURE__*/React__default['default'].createElement("div", {
        className: 'tipText'
      }, "\u5F00\u59CB") : isSameEnd ? /*#__PURE__*/React__default['default'].createElement("div", {
        className: 'tipText'
      }, "\u7ED3\u675F") : null, /*#__PURE__*/React__default['default'].createElement("div", null, currentMoment.date()), dateCellBottomRender && dateCellBottomRender(currentMoment, index));
    }
  };

  var footerRender = function footerRender() {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      className: 'wrc_calendar_footer'
    }, /*#__PURE__*/React__default['default'].createElement("button", {
      className: "".concat(startMoment && endMoment ? 'check_footer' : 'no_check_footer'),
      disabled: !(startMoment && endMoment),
      onClick: function onClick() {
        onSelect(startMoment, endMoment);
      }
    }, "\u786E\u5B9A"));
  };

  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(CalendarSelect, {
    handleScroll: handleScroll,
    monthArr: monthArr,
    isOpen: isOpen,
    onClose: onClose,
    footerRender: footerRender,
    headerRender: headerRender,
    dateCellRender: dateCellRender,
    contentRender: contentRender
  }));
}

module.exports = Calendar;
