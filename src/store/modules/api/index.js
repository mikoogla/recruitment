import actions from "./actions.js"
import getters from "./getters.js"
import mutations from "./mutations.js"

export default {
	namespaced: false,
	state() {
		return {
			data: {},
			historicalData: {},
			isLoaded: false,
		}
	},
	mutations: mutations,
	actions: actions,
	getters: getters,
}
