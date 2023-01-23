import { createStore } from "vuex"

import actions from "./actions.js"
import getters from "./getters.js"
import mutations from "./mutations.js"

import apiModule from "./modules/api/index.js"

const store = createStore({
	modules: {
		apiModule: apiModule,
	},
	state() {
		return {
			currentBalance: 21432.23,
		}
	},
	mutations: mutations,
	actions: actions,
	getters: getters,
})

export default store
