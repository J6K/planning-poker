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
      <div>
        <div style={{textAlign:'center'}}> Scrum Time! Planning Poker</div>
        <CardDeck fruits={fruits} />
      </div>
    )
  }
}
