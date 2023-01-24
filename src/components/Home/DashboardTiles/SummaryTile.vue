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
		<hr />
		<div class="legend d-flex w-100 ml-10 justify-start">
			<div class="item">
				<span class="dot" style="background-color: #7445fb" />
				<span class="text">This Month</span>
			</div>
			<div class="item">
				<span class="dot" style="background-color: #d5d5d6" />
				<span class="text">Last Month</span>
			</div>
		</div>
	</BackgroundTile>
</template>
<script>
import BackgroundTile from "../../UI/BackgroundTile.vue"
import ChartComponent from "../ChartComponent.vue"

const monthArray = () => {
	let arr = []
	for (let i = 1; i <= 31; i++) {
		arr.push(i + " May")
	}
	console.log("array" + arr)
	return arr
}

const randomStats = () => {
	let arr = []
	for (let i = 1; i <= 31; i++) {
		arr.push(Math.floor(Math.random() * 5000 + 5000 + i * 400))
	}
	return arr
}

export default {
	data() {
		return {
			//create array from 1 May to 31 May
			labels: monthArray(),
			chartName: "default name",
			stats: randomStats(),
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
hr {
	border-top: 1px solid #9896a1;
	opacity: 0.2;
}
.chart {
	width: 100%;
	height: 100%;
}
.title {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	h2 {
		font-weight: 600;
	}
	padding: 1rem;
	& .material-symbols-outlined {
		font-size: 1.5rem;
		cursor: pointer;
		color: #9896a1;
	}
}
.dot {
	height: 8px;
	width: 8px;

	border-radius: 50%;
	display: inline-block;
	margin-right: 0.8rem;
}
.text {
	color: #9896a1;
}
.legend {
	gap: 1rem;
	font-size: small;
}
</style>
