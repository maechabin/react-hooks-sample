import React, { useState, useContext, useEffect } from 'react';
import './App.css';

const ThemeContext = React.createContext('blue');

export default function App() {
  const name = useFormInput('Marry');
  const surname = useFormInput('Poppins');
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();
  useDocumentTitle(`${name.value} ${surname.value}`);

  return (
    <div className={theme}>
      <div className="App" label="Name">
        <input {...name} />
      </div>
      <div className="App" label="Surname">
        <input {...surname} />
      </div>
      <div className="App" label="Width">
        {width}
      </div>
    </div>
  );
}

/** Custom Hook */
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
}
