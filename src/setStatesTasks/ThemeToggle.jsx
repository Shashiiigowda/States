import React, { Component } from 'react';

class ThemeSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkTheme: false
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkTheme: !prevState.isDarkTheme,
    }));
  };

  render() {

    const lightTheme = {
      backgroundColor: '#f8f9fa',
      color: '#212529',
    };

    const darkTheme = {
      backgroundColor: '#343a40',
      color: '#f8f9fa',
    };

    const currentTheme = this.state.isDarkTheme ? darkTheme : lightTheme;

    return (
      <div style={{ ...currentTheme, minHeight: '100vh' }} className="d-flex flex-column justify-content-center align-items-center">
        <h2>Theme Switcher</h2>
        <p>The current theme is {this.state.isDarkTheme ? 'Dark' : 'Light'}</p>
        <button 
          type="button" 
          className={`btn ${this.state.isDarkTheme ? 'btn-light' : 'btn-dark'}`} 
          onClick={this.toggleTheme}
        >
          Switch to {this.state.isDarkTheme ? 'Light' : 'Dark'} Theme
        </button>
      </div>
    );
  }
}

export default ThemeSwitcher;
