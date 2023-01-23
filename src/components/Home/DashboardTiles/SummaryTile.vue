<template>
	<BackgroundTile radius="1rem" id="summary"
		><div class="title w-100 ml-4 text-start">
			<h1>Summary</h1>
		</div>
		<ChartComponent
			:labels="labels"
			:chartName="chartName"
			:stats="stats"
			class="chart"
		/>
	</BackgroundTile>
</template>
<script>
import BackgroundTile from "../../UI/BackgroundTile.vue"
import ChartComponent from "../ChartComponent.vue"
export default {
	data() {
		return {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			chartName: "BTC Price",
			stats: [6335, 5339, 8330, 8331, 5326, 5115, 4011],
		}
	},
	name: "SummaryTile",
	components: { BackgroundTile, ChartComponent },
}
</script>
<style lang="scss" scoped>
#summary {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.chart {
	width: 100%;
	height: 100%;
}
</style>
