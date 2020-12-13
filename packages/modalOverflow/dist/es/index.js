import React from 'react';

function ModalOverflow() {
  var originalOverflow;

  var stopScroll = function stopScroll(e) {
    e.stopPropagation();
    e.preventDefault();
  };

  React.useEffect(function () {
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

export default ModalOverflow;
