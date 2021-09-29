import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { NetworkAlert } from './Alert';


class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    networkText: ''
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        const slicedEvents = events.slice(0, this.state.numberOfEvents);
        this.setState({ events: slicedEvents, locations: extractLocations(events) });
      }

      if (!navigator.onLine) {
        this.setState({
          networkText: "No internet connection. Previously loaded events will display."
        });
      } else {
        this.setState({
          networkText: '',
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateNumberOfEvents = (eventCount) => {
    getEvents()
    .then((events) => {
      const eventCountEvents = events.slice(0, eventCount);
      this.setState({ events: eventCountEvents });
    })
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} numberOfEvents={this.state.numberOfEvents} />
        <NetworkAlert text={this.state.networkText} className="NetworkAlert"/>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
