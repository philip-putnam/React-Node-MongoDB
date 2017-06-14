import React, { Component } from 'react';

import Header from './Header';
import ContestPreview from './ContestPreview';
import data from '../testData';

export default class App extends Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };

  componentDidMount() {
    this.setState({
      contests: data.contests
    });
  }
  componentWillUnmount() {

  }

  render() {
    return (
      <div className='App'>
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map( contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
};
