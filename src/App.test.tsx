import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

let container: Element | null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    document.body.removeChild(container);
  }
  container = null;
});

it('renders without crashing', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  if (container) {
    const div = container.querySelector('.blue');
    const input = container.querySelectorAll('.App');

    // verify
    expect(div).toBeDefined();
    expect(input[0]).toBeDefined();
    expect(input[1]).toBeDefined();
    expect(input[2]).toBeDefined();
  }
});
