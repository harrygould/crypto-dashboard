# crypto-dashboard

Mini Project 1: A simple, easy-to-read free public API based dashboard for cryptocurrency data. The data will be displayed in a visual format, utilising charts & graphs that best represent each metric.

## Features

-_Market Price Chart_: Visualisation of the live market prices of the top 10 Cryptocurrencies by market cap. **NOTE** This data will be presented using a logarithmic chart to better visualise the data, as Bitcoin has a markedly larger market price than the rest of the cryptocurrency industry.

-_Trading Volume Chart_: Visualisation of the 24-hour trading volumes of the top 10 Cryptocurrencies by market cap. **NOTE** This data will be presented using a logarithmic chart to better visualise the data, as Bitcoin has a markedly larger 24-hour trading volume than the rest of the cryptocurrency industry.

-_Market Cap Chart_: Representation of the Market Cap of the top 10 cryptocurrencies, represented using a pie chart, to better understand the scale of each cryptocurrency in the top 10.

-**EXTRA**-_Live Price Chart via Search_: Using a search feature to allow for the population of the real-time live price chart of a chosen cryptocurrrency. **NOTE** Only one chart can be populated at any one time.

## Branch Organisation

### Main Branch (`main`)

Contains the main stable version of the project.

### Feature Branches

The feature branches will fetch the required data from the public API and be visualised using charts, via CDN in the Javascript code.

- `ui-layout`: Creates the basic structure of the HTML & CSS of the web page.
- `feature/market-price`: Adds the vanilla Javascript for the market price & represents this using a column chart.
- `feature/trading-volume`: Adds the vanilla Javascript for trading volume & represents this using a line chart.
- `feature/market-cap`: Adds the vanilla Javascript for the market cap & represents this using a pie chart.
- **EXTRA** `feature/live-price`: Adds the vanilla Javascript, using a search bar to allow the user to search for the live price chart of their chosen cryptocurrency, which will pull a real-time chart from a TradingView embedded widget, rather than a public API, as TradingView doesn't offer free public API's.

### **Workflow Summary**

1. Keep the `main` branch stable. _do not work directly on to develop features_
2. Develop features in dedicated branches.
3. Use pull requests to merge features into `main`.
4. Update the `README.md` as new features are added.
