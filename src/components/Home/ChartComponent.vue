<template>
	<div>
		<Line :data="data" :options="options" />
	</div>
</template>

<script>
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js"
import { Line } from "vue-chartjs"

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

export default {
	name: "App",
	props: {
		labels: {
			type: Array,
			required: true,
		},
		chartName: {
			type: String,
			required: true,
		},
		stats: {
			type: Array,
			required: true,
		},
	},
	components: {
		Line,
	},
	data() {
		return {
			data: {
				labels: this.labels,
				datasets: [
					{
						label: this.chartName,
						pointStyle: "circle",
						backgroundColor: "#00ff6a",
						borderColor: "#00ff6a",
						data: this.stats,
						tension: 0.3,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: true,
				scales: {
					y: {
						beginAtZero: true,
						ticks: {
							callback: function (value) {
								if (value < 1000) return value
								return value / 1000 + "k"
							},
						},
					},
				},
			},
		}
	},
}
</script>
