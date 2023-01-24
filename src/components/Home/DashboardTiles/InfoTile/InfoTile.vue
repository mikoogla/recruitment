<template>
	<BackgroundTile radius="1rem" id="info-container"
		><InfoTabs />
		<hr class="mb-6" />
		<InfoItem
			v-for="currencyName in ['BTC', 'ETH', 'ADA', 'AVAX', 'XRP']"
			:key="currencyName"
			:name="currencyName"
		/>
	</BackgroundTile>
</template>
<script>
import BackgroundTile from "../../../UI/BackgroundTile.vue"
import InfoItem from "./InfoItem.vue"
import InfoTabs from "./InfoTabs.vue"
import { mapActions, mapGetters } from "vuex"
export default {
	data() {
		return {}
	},
	name: "SummaryTile",
	components: { BackgroundTile, InfoTabs, InfoItem },
	methods: {
		...mapActions(["fetchData", "fetchHistory"]),
	},
	computed: {
		...mapGetters(["getData"]),
	},
	mounted() {
		this.fetchData()
		this.fetchHistory()
	},
}
</script>
<style lang="scss" scoped>
#info-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 1rem 2rem 2rem 2rem;
}
hr {
	border-top: 1px solid #9896a1;
	opacity: 0.2;
}
</style>
