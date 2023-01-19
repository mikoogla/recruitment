import { createStore } from "vuex"

import actions from "./actions.js"
import getters from "./getters.js"
import mutations from "./mutations.js"

import loginModule from "./modules/login/index.js"

const store = createStore({
	modules: {
		loginModule: loginModule,
	},
	state() {
		return {}
	},
	mutations: mutations,
	actions: actions,
	getters: getters,
})

export default store
