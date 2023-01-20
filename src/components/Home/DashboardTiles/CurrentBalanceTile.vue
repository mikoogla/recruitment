<template>
	<BackgroundTile radius="1rem"
		>current balance
		<button @click="fetchBTCPrice">request</button>
	</BackgroundTile>
</template>
<script>
// import { mapActions } from "vuex"
import BackgroundTile from "../../UI/BackgroundTile.vue"
export default {
	name: "SummaryTile",
	components: { BackgroundTile },
	methods: {
		async fetchBTCPrice() {
			try {
				const res = await fetch("/api")
				console.log("response: ", res.json())
			} catch (err) {
				console.log(err)
			}
		},
	},
	mounted() {
		console.log("mounted")
		this.fetchBTCPrice()
	},
}
</script>
