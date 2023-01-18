import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"

// Vuetify
import { createVuetify } from "vuetify"

const light = {
	primary: "#FFC107",
	secondary: "#FF9800",
	accent: "#FF5722",
	error: "#F44336",
	warning: "#FFEB3B",
	info: "#2196F3",
	success: "#4CAF50",
	colors: {
		font: "#FFC107",
		accent: "#3B8CD8",
	},
}

export default createVuetify({
	theme: {
		themes: {
			light,
		},
	},
})
