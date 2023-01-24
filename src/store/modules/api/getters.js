export default {
	getData(state) {
		return state.data
	},
	getHistoricalData(state) {
		return state.historicalData
	},
	getLoadingState(state) {
		return state.isLoaded
	},
}
