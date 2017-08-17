# KryptoKnight

A cryptocurrency analysis & trading tool which allow users to view other users’ portfolios and transactions.

## User Stories

* View price and volume stats of 5 cryptocurrencies
  - Bitcoin, Ethereum, Ripple, Litecoin, DASH
* View technical indicators such as Bollinger Bands against currency price
* Simulated trading of cryptocurrencies with virtual US$
* User portfolio of cryptocurrencies
* View user past transactions
* View ranking of fellow traders by 'Most Active'
* View portfolio and past transactions of fellow traders and learn/ mimic their trading strategies/ results



## Features list
* Sign up, login, logout
* View graphical data of top 5 cryptocurrencies over XX timelines:
* View XX technical indicators:
* Comparison of performances of top 5 cryptocurrencies over specific timelines
* Trader portfolio of cryptocurrencies
* Buy and sell top ten cryptocurrencies with provided XX virtual credits
* View portfolio performance data such as profit & loss
* View performances of other traders

## ERD
![ERD](ERD-3.jpg)

## Model Schemas
* User => user_id: email: password: credits_remaining:
* Currency => currency_id: currency_name:
* Portfolio => portfolio_id: user_id: currency_id: total_units:  
* Transactions => transactions_id: user_id: currency_id: type: units: amount/unit: amount:

## Wireframes
* Graph page
* Portfolio & transactions page

## How to Use

1. Run bundle install:
2. If customizing metricsgraphics styling (eg: specifying background colors, line thickness etc), fork the gem 'metrics-graphics-rails' on GitHub. Modify the css stylesheet as needed. Modify the Gemfile to `'metrics-graphics-rails', :git => 'your forked gem repo url'`


## Challenges (Resolved!)

- Time conversion from server to local computer time
- Customizing chart for dark backgrounds

## Features we wished we could include for this Version

- Realtime update on cryptocurrency prices
- Chat feature with other traders
- User guide on the website, FAQs section
- Email to confirm account upon registering


## Future Improvements
- Use of ActionCable to update prices without the use of a page refresh
- Actual trading Site with a different business model
- Automated algorithmic trading
- Scale up number of cryptocurrencies & technical indicators
- Greater statistical analysis of portfolio
- Social trading to have more features: follow, chat with fellow traders
- Using more powerful charting library such as D3, for a greater variety of visual representation

## Working in a Team
- Pair programming
- Planning and working in phases
- Task tracker: Trello
- Scrum
- Feature Driven development
- AGILE framework


## Live Version

https://kryptoknight.herokuapp.com


## Built With

* HTML, JS, CSS
* jQuery
* jQuery data tables
* Ruby on Rails
* CryptoCompare API
* Graphing Module: MetricsGraphics.js



## Authors

* **Jerald** - *Responsible for wireframing, finance knowledge, HTML, CSS* - [karl-x](https://github.com/karl-x)
* **Jer Kwang** - *Responsible for Social Trading, jQuery data table* - [kepler62f](https://github.com/kepler62f)
* **Rebecca** - *Responsible for Analysis, Cryptocompare API integration, GraphicsMetrics, Technical indicators * - [rebeccatay92](https://github.com/rebeccatay92)


## Acknowledgments

* Hat tip to anyone who's code was used, for example [this was a useful starting point for creating this template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
