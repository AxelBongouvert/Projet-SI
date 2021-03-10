import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {      
      onIncrement,      
      onDecrement,
      counters,      
    } = this.props;
    return (
      <div>              
        {counters.map(counter => (
          <Counter          
            nom={counter.nom}
            volume={counter.volume}

            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;