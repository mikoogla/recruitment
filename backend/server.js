require("dotenv").config()
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
app.get("/api", (_, res) => {
	api()
		.then(response => response.data)
		.then(value => res.json(value.data))
		.catch(err => console.log(err))
})
app.listen(4000, () => {
	console.log("express server")
})
