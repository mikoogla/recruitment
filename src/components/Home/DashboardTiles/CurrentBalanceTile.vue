<template>
	<BackgroundTile radius="1rem">{{ Object.keys(getData) }} </BackgroundTile>
</template>
<script>
// import { mapActions } from "vuex"
import { mapActions, mapGetters } from "vuex"
import BackgroundTile from "../../UI/BackgroundTile.vue"
export default {
	name: "SummaryTile",
	components: { BackgroundTile },
	methods: {
		...mapActions(["fetchData"]),
	},
	computed: {
		...mapGetters(["getData"]),
	},
	mounted() {
		this.fetchData().then(() => {
			console.log("data fetched")
			console.log(">>>>>data:", this.getData)
		})
	},
}
</script>
