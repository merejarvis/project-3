# KryptoKnight

A cryptocurrency analysis & trading tool.

## User Stories

* View graphical stats of top performing cryptocurrencies over multiple timelines
* Analysis of cryptocurrency data via technical indicators
* User portfolio of cryptocurrencies
* Simulated trading of cryptocurrencies with virtual credits


## Features list
* Signin, login, logout
* View graphical data of top XX cryptocurrencies over XX timelines:
* View XX technical indicators:
* Comparison of performances of top XX cryptocurrencies over specific timelines
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

A step by step guide on how to install and use the project, for example if this is a game, how do we play it.


## Challenges

**Convert UTC server time to user's local time**

* When the user requests the page "show.html.erb" which shows the user's account overview, a timestamp by Heroku's server is generated indicating the effective date and time for the market values of portfolios. The market values are obtained by API calls in the backend. Together with timestamp (also generated backend), they are passed to client's browser. Problem: How to convert that timestamp to the user's browser's local time? 

* Firstly the question is where to store the timestamp and make it available for  display. The following shows the social_trading_controller.rb assigning the timestamp to @variable.

```

    # generate timestamp on Heroku server (UTC)
    t = Time.now
    t = t.to_f * 1000

    # ruby server date/time
    @date_time_now = t

```

* The @date_time_now is then passed to HTML page:
```
<%= content_tag :div, class: "dtn", data: {dateTimeNow: @date_time_now} do %>
<% end %>

```

* Then by jQuery, the front-end javascript gets @date_time_now and converts the timestamp into local timezone through Date() class and then render it:
```
    var d = $('.dtn').data('datetimenow') 
    var d_converted = new Date(d)
    var dataDate = d_converted.toISOString().slice(0, 10)
    var dataTime = d_converted.toTimeString().slice(0, 5)
    $('.overview-date-time').text('Overview (as of '+dataDate+', '+dataTime+')')
```




More steps...

```
until finished
```

## Future Improvements

## Workflow

Task tracking: Trello

## Live Version

Heroku link:





## Built With

* HTML, JS, CSS
* jQuery
* Ruby on Rails
* CSS Framework:
* APIs: Cryptocompare, Quandl
* Graphing Module: Graphicsmetrics



## Authors

Did you collaborate with others on this project, list them here

* **John McClain** - *Responsible for keeping vests white* - [GithubUserName](https://github.com/GithubUserName)

## Acknowledgments

* Hat tip to anyone who's code was used, for example [this was a useful starting point for creating this template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
