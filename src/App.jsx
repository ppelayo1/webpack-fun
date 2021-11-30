import React, { useState } from 'react';

const App = function App() {
  const googleLogin = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        window.open(xhttp.responseText);
      }
    };
    xhttp.open('GET', './login', true);
    xhttp.send();
  };

  return (
    <p>
      hi from react
      <button type="button" onClick={() => { googleLogin(); }}>Google is fun</button>
    </p>
  );
};

export default App;
