# Meet App

This is a serverless progressive web application with React, using a test-driven development technique. This application uses Google Calendar API to fetch evtns.

## TDD approach and Test Scenarios

### FEATURE 1: FILTER EVENTS BY CITY

As a user, I should be able to filter events by city so that I can see the list of events that
take place in that city.

**Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.**
Given: User hasn’t searched for any city
When: The user opens the app
Then: The user should see a list of upcoming events
**Scenario 2: User should see a list of suggestions when they search for a city.**
Given: The main page is open
When: User starts typing the search box
Then: The user should see a list of suggested cities
**Scenario 3: User can select a city from the suggested list.**
Given: The suggested cities list is displaying
When: The user selects a city from the list
Then: The city should be changed to the selected city and should see upcoming events in that
city

### FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

As a user, I should be able to show/hide event details so that I can see more or less details
for events.

**Scenario 1: An event element is collapsed by default.**
Given: The user is on the main page
When: The user selects an event
Then: The element collapsed by default
**Scenario 2: User can expand an event to see its details.**
Given: The user is on the event page
When: The user expands the details
Then: The user can see the event details
**Scenario 3: User can collapse an event to hide its details.**
Given: The user is on the events page
When: The details are expanded
Then: The user can collapse the event details

### FEATURE 3: SPECIFY NUMBER OF EVENTS

As a user, I should be able to specify the number of events I can see so that I can see more
or less events.

**Scenario 1: When user hasn’t specified a number, 32 is the default number.**
Given: The user opens the app
When: The user looks for an event
Then: 32 events will be displayed
**Scenario 2: User can change the number of events they want to see.**
Given: The user opens the app
When: The user specifies the number of events
Then: There will be a specified number of events displayed

### FEATURE 4: USE THE APP WHEN OFFLINE

As a user, I should be able to use the app offline so that I can see events without internet
connection.

**Scenario 1: Show cached data when there’s no internet connection.**
Given: The user has no internet connection
When: User is using the app
Then: The user can see cache data
**Scenario 2: Show error when user changes the settings (city, time range).**
Given: The user ahs no internet connection
When: The user changes the settings
Then: Display an error message

### FEATURE 5: DATA VISUALIZATION

As a user, I should see a chart of upcoming events so I can see events in every city.

**Scenario 1: Show a chart with the number of upcoming events in each city.**
Given: The user looks at an event
When: The user clicks on the chart
Then: The user will be able to see a chart of upcoming events in each city
