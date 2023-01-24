<script setup>
import BackgroundTile from "../../../UI/BackgroundTile.vue"
import InfoItem from "./InfoItem.vue"
import InfoTabs from "./InfoTabs.vue"
import { useStore } from "vuex"
import { computed, onMounted } from "vue"

const store = useStore()
const getLoadingState = computed(() => store.getters.getLoadingState)
onMounted(async () => {
	await store.dispatch("fetchData")
	await store.dispatch("fetchHistory")
	store.commit("setLoadingState", true)
})
</script>
<template>
	<BackgroundTile v-if="getLoadingState" radius="1rem" id="info-container"
		><InfoTabs />
		<hr class="mb-6" />
		<InfoItem
			v-for="currencyName in ['BTC', 'ETH', 'ADA', 'AVAX', 'XRP']"
			:key="currencyName"
			:name="currencyName"
		/>
	</BackgroundTile>
	<BackgroundTile
		v-else
		radius="1rem"
		class="d-flex flex-column justify-center align-center pa-10"
		><h2>Loading...</h2>
		<v-progress-circular class="ma-5" indeterminate color="#7445FB"
	/></BackgroundTile>
</template>
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

@media screen and (max-width: 768px) {
	#info-container {
		padding: 1rem 1rem 2rem 1rem;
	}
}
</style>
