const Binance = require('binance-api-node').default;




module.exports.getpricehome = async (req, res) => {

  const client = Binance()
  async function salman() {
    const data = await client.prices();
    const BNBUSDT = await client.dailyStats({
      symbol: 'BNBUSDT'
    })
    const BTCUSDT = await client.dailyStats({
      symbol: 'BTCUSDT' 
    })
    const ETHUSDT = await client.dailyStats({
      symbol: 'ETHUSDT'
    })
    const SOLUSDT = await client.dailyStats({
      symbol: 'SOLUSDT'
    })
    const DOGEUSDT = await client.dailyStats({
      symbol: 'DOGEUSDT'
    })

    console.log(BNBUSDT)
    return {

      "0": {
        "name": "BNBUSDT",
        "price": data["BNBUSDT"],
        "priceChangePercent": BNBUSDT["priceChangePercent"],
        "priceChange": BNBUSDT["priceChange"],
      },

      "1": {

        "name": "BTCUSDT",
        "price": data["BTCUSDT"],
        "priceChangePercent": BTCUSDT["priceChangePercent"],
        "priceChange": BTCUSDT["priceChange"],
      },
      "2":
      {
        "name": "ETHUSDT",
        "price": data["ETHUSDT"],
        "priceChangePercent": ETHUSDT["priceChangePercent"],
        "priceChange": ETHUSDT["priceChange"],
      },
      "3":
      {
        "name": "SOLUSDT",
        "price": data["SOLUSDT"],
        "priceChangePercent": SOLUSDT["priceChangePercent"],
        "priceChange": SOLUSDT["priceChange"],
      },
      "4":
      {
        "name": "DOGEUSDT",
        "price": data["DOGEUSDT"],
        "priceChangePercent": DOGEUSDT["priceChangePercent"],
        "priceChange": DOGEUSDT["priceChange"],
      },


    }

  }
  salman().then(data => {
    res.send(data)
  }).catch((e) => {
    console.log(e)
  })

}