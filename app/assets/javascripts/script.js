$(document).on('ready page:load', function(event) {

  console.log('javascript is running')

  /*------------------------------------------------*/
  var currencySym = 'BTC'
  var timeDigit = 60
  var timeFrame = 'minute'
  var bufferPeriods = 20
  var dataArr = []
  var indicator1 = ''
  var indicator1data = []
  /*------------------------------------------------*/
  // update chart based on selection changes
  $('select').change(function() {
    currencySym = $(':selected')[0].id
    timeDigit = $(':selected')[1].id
    timeFrame = $(':selected')[1].className
    indicator1 = $(':selected')[2].id
    //which api to call. min/hr/day

    // console.log(indicator1)
    totalTimePeriods = parseInt(timeDigit) + bufferPeriods - 1
    var histoQuery =`https://min-api.cryptocompare.com/data/histo${timeFrame}?tsym=USD&fsym=${currencySym}&limit=${totalTimePeriods}`

    $.get(histoQuery).done(function(x) {
      apidata = x.Data
      // console.log(apidata)

      //for prices remove day -20 to 0
      close = JSON.parse(JSON.stringify(apidata)).splice(20)
      close.forEach(function(e) {
        e.time =  new Date(e.time * 1000)
        e.value = e.close
      })

      //always chart the price
      dataArr = [close]

      // finding min.max value for y axis
      closeSort = close.sort(function(a,b) {
        return a.value - b.value
      })
      // console.log(closeSort)

      if (indicator1 === 'SMA5') {
        sma5 = JSON.parse(JSON.stringify(apidata)).splice(0)
        for (i = 20; i < sma5.length; i++) {
          var arr5days = sma5.slice(i-5,i)
          var sum = arr5days.reduce(function(a,b) {
            return {close: (a.close + b.close)}
          })
          var avg = sum.close/5
          sma5[i].value = avg
          sma5[i].time = new Date(sma5[i].time * 1000)
        }
        indicator1data = sma5.splice(20)
        dataArr[1] = indicator1data
      } else {
        indicator1 = ''
        indicator1data = []
        dataArr.splice(1,1) //removes indicator1 line
      }

      console.log(dataArr)
      plot()

    })
  })

  /*------------------------------------------------*/
  function plot() {
    MG.data_graphic({
      // title: 'Historical Price',
      // description: 'Closing',
      data: dataArr,
      width: 1000,
      height: 500,
      target: '#graph',
      x_accessor: 'time',
      y_accessor: 'value',
      x_label: 'Time',
      y_label: 'USD',
      yax_format: d3.format('2'),
      min_y: closeSort[0].value,
      //sets axis min
      max_y: closeSort[closeSort.length - 1].value,
      area: false,
      aggregate_rollover: true
    })
  }

  /*------------------------------------------------*/
  var currentPriceApi = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,BCH,XEM,LTC,GNO,EOS,NEO,DASH&tsyms=USD`

  function getCurrentPrice(){
    $.get(currentPriceApi).done(function(data){
      // console.log(data)
      for (var key in data) {
        // console.log(key) //coin symbol
        // console.log(data[key].USD) //price
        $(`#live${key}`).text(`${key}: ${data[key].USD}`)
      }
    }) // close api call
  } // close fn
  getCurrentPrice()
  setInterval(getCurrentPrice, 10000)
  /*------------------------------------------------*/
}) //close doc.ready
