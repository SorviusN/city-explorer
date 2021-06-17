[![Netlify Status](https://api.netlify.com/api/v1/badges/ceb7335d-c0a2-4b03-8d0e-866e5b98bae1/deploy-status)](https://app.netlify.com/sites/cityexplore/deploys)


# City Explorer App

**Author**: Jona Brown
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
City Explorer was created for the purpose of being able to explore the surrounding area of a city based on the city name that you type.

## Getting Started
- Create an input field to enter your desired city
- send the input to server and retrieve latitude + longitude + full city name
- use latitude and longitude to determine map location for map API
- Display weather based on name of desired city matching with named json data

## Architecture
Cors, React Bootstrap, Express, Node, dotenv, axios 

06/15/2021 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations
Big thanks to Michelle for assiting with errors.

# FEATURES:

- Name of feature: Boilerplate website that displays lat/long/name based off of name input 
- Estimate of time needed to complete: 2 hours
- Start time: 13:05
- Finish time: 16:00
- Actual time needed to complete: 3hrs

- Name of feature: Geomap that displays based off of lat/long data from text input
- Estimate of time needed to complete: 2 hours
- Start time: 19:30
- Finish time: 23:55
- Actual time needed to complete: 4 hours 30 mins 

- Name of feature: Weather API
- Estimate of time needed to complete: 3 hours
- Start time: 13:30
- Finish time: 19:30
- Actual time needed: 6 hours

- Name of feature: Movie API
- Estimate of time needed to complete: 3 hours
- Start time: 14:30
- Finish time: 19:30
- Actual time needed: 8 hours
- needed quite a lot of time to figure out how to receive the correct data from Movie.

Web request-response cycle diagram:
![wrrcv2](https://user-images.githubusercontent.com/66106310/122146015-19569980-ce0b-11eb-8c5b-aec382451158.png)
