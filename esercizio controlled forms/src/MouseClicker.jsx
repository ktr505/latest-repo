import React from 'react';

export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target.name);
  }

  function handleImageClick(event) {
    console.log(event.target.src);
    event.stopPropagation(); 
  }

  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        Click me
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftorange.biz%2Fclick-me-red-button-transparent-png-56302&psig=AOvVaw1rQUBeojpMYF2TFAWitauB&ust=1717940725075000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjtpImSzIYDFQAAAAAdAAAAABAE"
          onClick={handleImageClick}
          style={{ marginLeft: '10px' }}
        />
      </button>
    </div>
  );
}
