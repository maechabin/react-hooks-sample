import React, { useState, useContext, useEffect } from 'react';
import './App.css';

const ThemeContext = React.createContext('blue');

export default function App() {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');
  const theme = useContext(ThemeContext);

  useEffect(() => {
    document.title = `${name} ${surname}`;
  });

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSurnameChange(event) {
    setSurname(event.target.value);
  }

  return (
    <div className={theme}>
      <div className="App" label="Name">
        <input value={name} onChange={handleNameChange} />
      </div>
      <div className="App" label="Surname">
        <input value={surname} onChange={handleSurnameChange} />
      </div>
      <div className="App" label="Width">
        {width}
      </div>
    </div>
  );
}
