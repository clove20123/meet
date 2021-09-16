import React, { Component } from 'react';



class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
  }

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number >= 1 && number <= 32) 
    this.setState ({
      numberOfEvents: number
    });
    this.props.updateEvents(number);
  };

  render () {
  return (
   <div className="NumberOfEvents">
     <p>Limit search results</p>
     <input 
     type="number" 
     id="EventNumber"
     className="EventsNumber" 
     value={this.state.numberOfEvents} 
     onChange={this.handleInputChanged} 
     />
   </div>
  )}
}

export default NumberOfEvents;