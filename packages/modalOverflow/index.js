import React from 'react';

export default function ModalOverflow() {
  let originalOverflow;

  const stopScroll = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }

  React.useEffect(() => {
    const { style } = document.body;
    originalOverflow = style.overflow;
    style.overflow = 'hidden';
    document.body.addEventListener("touchmove", stopScroll, {passive: false });
    return () => {
      document.body.style.overflow = originalOverflow;
      originalOverflow = undefined;
      document.body.removeEventListener('touchmove',stopScroll);
      document.body.removeEventListener('touchmove',stopScroll,{passive: true});
    };
  }, []);

  return null;
}
