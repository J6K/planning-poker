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
      <div>
        {fruits.map(fruit => {
          return (
            <div style={style}>
              <Draggable>
                <img src={fruit} width='100%' />
              </Draggable>
            </div>
          )
        })}
      </div>
    );
  }
}
