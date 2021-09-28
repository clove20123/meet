import React, { Component } from 'react';
import { ErrorAlert } from './Alert';



class NumberOfEvents extends Component {

state = {
  numberOfEvents: 32,
  errorText: ''
}

//componentDidMount () {
  //this.handleInputChanged

  
//}

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number >= 1 && number <= 32) 
    this.setState({ numberOfEvents: number })
    this.props.updateNumberOfEvents(number);
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
     placeholder="1-32" 
     onChange={this.handleInputChanged} 
     />
   </div>
  )}
}

export default NumberOfEvents;