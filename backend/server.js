require("dotenv").config()
const express = require("express")
const axios = require("axios")
const app = express()
app.use(express.json())

const api = axios.create({
	method: "GET",
	baseURL:
		"https://sandbox-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC,ETH,XRP,LTC,BCH,EOS,BSV,XLM,TRX,USDT",
	headers: {
		"X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
	},
})
app.get("/api", (_, res) => {
	api()
		.then(response => response.data)
		.then(value => res.json(value.data))
		.catch(err => console.log(err))
})
app.listen(4000, () => {
	console.log("express server")
})
