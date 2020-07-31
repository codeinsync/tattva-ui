import React from 'react';

import './Button.css';

function Button({ children }) {
  return (
    <button className="bg-teal-500 text-gray-200 px-4 py-2 rounded-md shadow m-4 bg-indigo-500">
      { children }
    </button>
  );
}

export default Button;
