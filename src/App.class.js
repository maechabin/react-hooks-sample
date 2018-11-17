import React from 'react';
import './App.css';

const ThemeContext = React.createContext('blue');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Mary',
      surname: 'Poppins',
      width: window.innerWidth,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = `${this.state.name} ${this.state.surname}`;
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    document.title = `${this.state.name} ${this.state.surname}`;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      width: window.innerWidth,
    });
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleSurnameChange(event) {
    this.setState({
      surname: event.target.value,
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <div className={theme}>
            <div className="App" label="Name">
              <input value={this.state.name} onChange={this.handleNameChange} />
            </div>
            <div className="App" label="Surname">
              <input
                value={this.state.surname}
                onChange={this.handleSurnameChange}
              />
            </div>
            <div className="App" label="Width">
              {this.state.width}
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default App;
