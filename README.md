# Brewvana

![Main Page](/public/screenshot.png)

## Project Description
Brewvana presents beer information from public API of brewerydb.com using React.js framework which is guided in react.js tutoral(https://github.com/wesbos/React-Beer-Me). It checks list of beer in API and display of beer's various information such as ABV, IBU, short description, and food pairing. It gives analysis of current API data itself such as data deposition activity, diversity of beer type and scattering chart of ABV vs. IBU information. You can watch your beer's youtube video review in link.

* Name of Project: Brewvana, web dictionary of beer industry
* Project’s Purpose or Goal: User can navigate the information about beer from API in single-page webapp environment.
* User can search/select beer by ABV or IBU or Hop, malt, yeast and etc....
* User can see the details of each beer based on API information including image and short description.
* http://api.react.beer/v2 (move permanently http://www.brewerydb.com/developers) is API for this app.
* Due to the limit of API access, chart in app is based on local json storage of API information. Please check the update in future (/src/components/db.json).
* This project uses materialize-css (https://materializecss.com/getting-started.html).

## Component and Route Structure
* This is starting component structure and eventually updated with more components as the project goes on.

![](component.png)

## Thinking in React (https://reactjs.org/docs/thinking-in-react.html)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About Crawler setup process
* This project has some packages for web crawling but unused in final project. For further usage, you may ignore or delete it in package.json.

* npm install request
* https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc?hl=en-US (for CORS error fix in local machine only)
* npm install jquery --save
* npm install cheerio
* npm install react-request

## About youtube video setup
* npm install url-parse
* npm install youtube-api-search
* npm install lodash

## About chart.js
* In order to learn about chart.js, the following page is greatly helpful.
* For scatter and donut chart, each object(data point) is clickable and redirect to the corresponding beer information page.
* https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react

## How to pass props to components in React
* https://www.robinwieruch.de/react-pass-props-to-component

## how to deploy react app to google cloud
* https://medium.com/tech-tajawal/deploying-react-app-to-google-app-engine-a6ea0d5af132

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Support and contact details
_Please contact us if you have any issues at: taebumlee@gmail.com_

## Technologies Used
* HTML/CSS/JavaScript
* React.js 16.9.0
* materialize-css 1.0.0-rc.2
* API information from http://api.react.beer/v2 (move permanently http://www.brewerydb.com/developers)

### License
_This software is licensed under MIT license._

Copyright (c) 2019 **Tae Lee**
