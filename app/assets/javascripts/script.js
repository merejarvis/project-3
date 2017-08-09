$(document).on('ready page:load', function(event) {

  console.log('javascript is running')

  /*------------------------------------------------*/
  var currencySym = 'BTC' //default is bitcoin
  var timeDigit = 80 //default is 1 hrs + 20min
  var timeFrame = 'minute'

  // update chart based on selection changes
  $('select').change(function() {
    currencySym = $(':selected')[0].id
    timeDigit = $(':selected')[1].id //number of time periods
    timeFrame = $(':selected')[1].className
    //which api to call. min/hr/day
    // console.log(currencySym)
    // console.log(timeDigit)
    // console.log(timeFrame)

    var histoQuery =`https://min-api.cryptocompare.com/data/histo${timeFrame}?tsym=USD&fsym=${currencySym}&limit=${timeDigit - 1}`
    console.log(histoQuery)

    $.get(histoQuery).done(function(x) {
      apidata = x.Data
      // console.log(apidata)
      //for prices remove day -20 to 0 (those for SMA)
      close = JSON.parse(JSON.stringify(apidata.splice(20)))

      close.forEach(function(e) {
        e.time =  new Date(e.time * 1000)
        e.value = e.close
      })
      // console.log(close)

      var closeSort = close.sort(function(a,b) {
        return a.value - b.value
      })
      // console.log(closeSort)

      dataArr = [close]
      // console.log(dataArr)

      // right now min/max depend on
      MG.data_graphic({
        title: 'Historical Price',
        description: 'Closing',
        data: dataArr,
        width: 1000,
        height: 500,
        target: '#graph',
        x_accessor: 'time',
        y_accessor: 'value',
        x_label: 'Time',
        y_label: 'USD',
        yax_format: d3.format('2'),
        min_y: closeSort[0].value, //sets axis min to min v
        max_y: closeSort[closeSort.length - 1].value,
        area: false,
        aggregate_rollover: true
      })
    })
  })

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
}) //close doc.ready
/*------------------------------------------------*/
