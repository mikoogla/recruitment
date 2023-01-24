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

<script>
import CustomImage from "@/components/UI/CustomImage.vue"
import fullNames from "@/components/Home/DashboardTiles/InfoTile/fullNames"
import MiniChart from "../Home/DashboardTiles/InfoTile/miniChart.vue"
import { mapGetters } from "vuex"
export default {
	name: "FavoriteItem",
	props: {
		name: {
			type: String,
			required: true,
			default: "BTC",
		},
	},
	data() {
		return {
			fullCurrencyName: "",
			history: [],
			percentchange: 0,
		}
	},
	computed: {
		...mapGetters(["getData", "getLoadingState", "getHistoricalData"]),
	},
	beforeMount() {
		console.log("name prop:_" + this.name + "_")
		let self = this
		this.fullCurrencyName = fullNames.find(
			translation => translation.name === self.name
		).fullName
		this.percentchange =
			self.getData[self.name][0].quote["USD"].percent_change_24h.toFixed(2)
		this.history = self.getHistoricalData[self.name].quotes.map(quote =>
			quote.quote.USD.price.toFixed(2)
		)
	},
	components: { CustomImage, MiniChart },
}
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
	width: 5rem;
}
#chart-size {
	min-height: 100%;
	min-width: 100%;
}
.item-container {
	max-width: 264px;
}
</style>
