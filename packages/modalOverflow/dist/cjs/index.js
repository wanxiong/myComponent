'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

module.exports = ModalOverflow;
