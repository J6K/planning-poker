import React, { Component } from 'react';
import Draggable from 'react-draggable';

export default class CardDeck extends Component {
  state = {  }
  render() {
    const { fruits } = this.props;
    const style = {
      width: '100px',
      height: '100px'
    }
    return (
      <div className="card-deck">
        {fruits.map(fruit => {
          return (
              <Draggable>
                <div className="cards">
                  <img src={fruit} width='80%' height="70%" />
                </div>
              </Draggable>
          )
        })}
      </div>
    );
  }
}
