import React, { useEffect, useRef } from 'react';

export function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input data-testid="one" name="one" ref={inputRef} />
    </div>
  );
}
