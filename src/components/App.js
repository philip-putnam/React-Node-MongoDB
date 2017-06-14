import React, { Component } from 'react';

import Header from './Header';


export default class App extends Component {
  state = {
    pageHeader: 'Naming Contests'
  };

  componentDidMount() {
    console.log('did mount');
    debugger;
  }

  componentWillUnmount() {
    console.log('will Unmount');
    debugger;
  }

  render() {
    return (
      <div className='App'>
        <Header message={this.state.pageHeader} />
        <div>

        </div>
      </div>
    );
  }
};
