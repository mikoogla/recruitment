<template>
	<BackgroundTile radius="1rem" id="summary"
		><div class="title w-100 text-start">
			<h2>Summary</h2>
			<span class="material-symbols-outlined"> more_horiz </span>
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
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
			chartName: "BTC Price",
			stats: [6335, 5339, 12000, 8331, 5326, 5115, 4011],
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
.title {
	width: 100%;
	display: flex;
	justify-content: space-between;
	h2 {
		font-weight: 500;
	}
	padding: 1rem;
	& .material-symbols-outlined {
		font-size: 1.5rem;
		cursor: pointer;
		color: #9896a1;
	}
}
</style>
