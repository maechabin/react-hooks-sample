import React, { useState, useContext, useEffect } from 'react';
import './App.css';

type Theme = 'blue' | 'green';
const ThemeContext = React.createContext<Theme>('blue');

export default function App(): JSX.Element {
  const name = useFormInput('Marry');
  const surname = useFormInput('Poppins');
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();
  useDocumentTitle(`${name.value} ${surname.value}`);

  return (
    <div className={theme}>
      <div className="App" data-label="Name">
        <input {...name} />
      </div>
      <div className="App" data-label="Surname">
        <input {...surname} />
      </div>
      <div className="App" data-label="Width">
        {width}
      </div>
    </div>
  );
}

interface FormInput {
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

/** Custom Hook */
function useFormInput(initialValue: string): FormInput {
  const [value, setValue] = useState(initialValue);

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

function useDocumentTitle(title: string): void {
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth(): number {
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;
}
