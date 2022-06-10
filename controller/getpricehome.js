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
      "1": {
        "BNBUSDT": data["BNBUSDT"],
        "priceChangePercent": BNBUSDT["priceChangePercent"],
        "priceChange": BNBUSDT["priceChange"],
      },

      "BTCUSDT": {
        "BTCUSDT": data["BTCUSDT"],
        "priceChangePercent": BTCUSDT["priceChangePercent"],
        "priceChange": BTCUSDT["priceChange"],
      },
      "ETHUSDT": {
        "ETHUSDT": data["ETHUSDT"],
        "priceChangePercent": ETHUSDT["priceChangePercent"],
        "priceChange": ETHUSDT["priceChange"],
      },

      "SOLUSDT": {
        "SOLUSDT": data["SOLUSDT"],
        "priceChangePercent": SOLUSDT["priceChangePercent"],
        "priceChange": SOLUSDT["priceChange"],
      },
      "DOGEUSDT": {
        "DOGEUSDT": data["DOGEUSDT"],
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