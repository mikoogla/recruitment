export default {
	async fetchData(context) {
		try {
			const response = await fetch("/api")
			const data = await response.json()
			context.commit("setData", data)
		} catch (err) {
			console.log(err)
		}
	},
}
