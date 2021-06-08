# Goal
Today you'll be building an app for donating to nonprofits!! You will be using a local API and building out the frontend for our app (check mockup.png for some basic info about what this will look like! )

## Setup

- Fork and clone this repository
- Run `json-server --watch db.json` to get the backend started
- Open the `index.html` file on your browser

## Endpoints

Your base URL for your API will be: http://localhost:3000

The endpoints you will need are:

- GET `/nonprofits`
- GET `/nonprofits/:id`
- PATCH `/nonprofits/:id`

## Core Deliverables

As a user, I can:

1. See all nonprofit names in a `div` with the id of `"browse-nonprofits"`. On page load, **request** data from the server to get all of the nonprofits objects. When you have this information, you'll need to add a `span` tag with the nonprofit's name to the bar at the top.

2. Select a nonprofit from the bar at the top and see the nonprofit's info inside `#detailed-info` div.

3. Click on the "Donate" button to donate to a nonprofit. Persist donation values to the server and update the DOM (add the current donation amount to the amount displayed).