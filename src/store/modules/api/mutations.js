export default {
	setData(state, data) {
		state.data = data
	},
	setHistoricalData(state, data) {
		state.historicalData = data
	},
	setLoadingState(state, data) {
		state.isLoaded = data
	},
}
