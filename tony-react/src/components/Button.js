import React from 'react';

function Button({ text = 'truong' }) {
  return (
    <div>
      This is Button component
      <button type="button">{text}</button>
    </div>
  )
}

export default Button
