import React from 'react';
import ReactDOM from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
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
    // setup
    const div = container.querySelector('.blue');
    const app = container.querySelectorAll('.App');
    const input = container.querySelectorAll('input');

    // verify
    expect(div).toBeDefined();
    expect(app[0]).toBeDefined();
    expect(app[1]).toBeDefined();
    expect(app[2]).toBeDefined();

    act(() => {
      // setup
      input[0].value = 'aaa';
      input[1].value = 'bbb';

      // exercise
      Simulate.change(input[0]);
      Simulate.change(input[1]);
    });

    // verify
    expect(input[0].getAttribute('value')).toBe('aaa');
    expect(input[1].getAttribute('value')).toBe('bbb');
  }
});
