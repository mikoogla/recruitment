export default {
	async fetchData(context) {
		try {
			await fetch("/api")
				.then(response => response.json())
				.then(data => {
					console.log("action  data: ", data)
					context.commit("setData", data)
				})
		} catch (err) {
			console.log(err)
		}
	},
}
