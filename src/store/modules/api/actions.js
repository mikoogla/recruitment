export default {
	fetchBTCPrice() {
		let myHeaders = new Headers()
		myHeaders.append(
			"X-CMC_PRO_API_KEY",
			"b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c"
		)
		myHeaders.append("Accept", "*/*")
		myHeaders.append(
			"Access-Control-Allow-Origin",
			"https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest"
		)
		let requestOptions = {
			method: "GET",
			headers: myHeaders,
		}

		fetch(
			"https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest",
			requestOptions
		)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log("error", error))
	},
}
