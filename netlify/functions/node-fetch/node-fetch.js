const express = require("express")
const axios = require("axios")
const app = express()
app.use(express.json())

const api = axios.create({
	method: "GET",
	baseURL:
		"https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC,ETH,ADA,AVAX,XRP",
	headers: {
		"X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API,
	},
})
const history7d = axios.create({
	method: "GET",
	baseURL:
		"https://sandbox-api.coinmarketcap.com/v2/cryptocurrency/quotes/historical?symbol=BTC,ETH,ADA,AVAX,XRP&count=7&interval=daily",
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
app.get("/history", (_, res) => {
	history7d()
		.then(response => response.data)
		.then(value => res.json(value.data))
		.catch(err => console.log(err))
})
app.listen(4000, () => {
	console.log("express server")
})
