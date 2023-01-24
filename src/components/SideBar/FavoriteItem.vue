<template>
	<div class="item-container">
		<CustomImage :imgName="name" style="width: 2.5rem" />
		<div class="box d-flex flex-column ml-3">
			<div class="short">
				{{ name }}
			</div>
			<div class="long">
				{{ fullCurrencyName }}
			</div>
		</div>

		<div class="chart">
			<MiniChart
				id="chart-size"
				:line-color="percentchange > 0 ? '#2DC78F' : '#EA4D4D'"
				:labels="history"
				:stats="history"
			/>
		</div>
	</div>
</template>
<script setup>
import CustomImage from "@/components/UI/CustomImage.vue"
import MiniChart from "../Home/DashboardTiles/InfoTile/miniChart.vue"
import fullNames from "@/components/Home/DashboardTiles/InfoTile/fullNames"
import { useStore } from "vuex"
import { ref, computed, onBeforeMount, defineProps } from "vue"
const props = defineProps({
	name: {
		type: String,
		required: true,
		default: "BTC",
	},
})
const store = useStore()

const fullCurrencyName = ref("")
const history = ref([])
const percentchange = ref(0)

const getData = computed(() => store.getters.getData)
const getHistoricalData = computed(() => store.getters.getHistoricalData)
// const getLoadingState = computed(() => store.getters.getLoadingState)

onBeforeMount(() => {
	fullCurrencyName.value = fullNames.find(
		translation => translation.name === props.name
	).fullName
	percentchange.value =
		getData.value[props.name][0].quote["USD"].percent_change_24h.toFixed(2)
	history.value = getHistoricalData.value[props.name].quotes.map(quote =>
		quote.quote.USD.price.toFixed(2)
	)
})
</script>
<style lang="scss" scoped>
.item-container {
	display: flex;
	flex-direction: row;
	align-items: center;

	&:hover {
		cursor: pointer;
		background-color: #f5f5f5;
	}
}
.box {
	& .short {
		color: #9896a1;
	}
	& .long {
		color: #0a041c;
		font-weight: 600;
	}
}
.chart {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 3rem;
	width: 6rem;
}
#chart-size {
	margin: 0 1rem;
	max-height: 100%;
	max-width: 100%;
}
.item-container {
	max-width: 264px;
}
</style>
