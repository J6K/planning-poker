import React, { Component } from 'react';
import axios from 'axios';

import CardDeck from '../CardDeck/index.jsx';

export default class App extends Component {
  state = {
    fruits: [],
  }

  async componentDidMount() {
    const { data } = await axios.get('/s3');
    this.setState({ fruits: data });
  }

  render() {
    const { fruits } = this.state;
    return (
      <div className="card-container">
        <h1 style={{textAlign:'center'}}> Scrum Time! Planning Poker</h1>
        <CardDeck fruits={fruits} />
      </div>
    )
  }
}
