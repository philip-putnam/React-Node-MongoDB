import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';
// import data from '../testData';

export default class App extends Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: []
  };

  componentDidMount() {
    axios.get('/api/contests')
      .then(resp => {
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(console.error)


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
