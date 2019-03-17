## Overview
Weather web application. It uses Dark Sky API to gather weather information and OpenCage to gather geo-information.
A user can type a zip code or a place name to see specific geolocational information with his or her choice of weather unit.

## Development
Initially, I used Wunderground API. It comes with both weather and geo-information so that I don't have to use other API for geo-information. Unfortunately, the API is no longer support free-tier option.

According to Dark Sky API, they have disabled CORS for security reason. To bypass CORS, I made the proxy API server. It takes a request from a client, and respond to a client with information that gathers from Dark Sky API. It also has the advantage of hiding a secret key since the client doesn't need to send an API call with a secret key.


### Stack
- Front-End: React, Bootstrap
- Back-End: Node, Express
- API: [Dark Sky](https://darksky.net/dev), [OpenCage](https://opencagedata.com/)
- Recourse: icons by [@adamwhitcroft](http://adamwhitcroft.com/climacons/)