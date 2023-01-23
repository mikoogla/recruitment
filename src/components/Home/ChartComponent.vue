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
						data: this.stats,
						pointStyle: false,
						backgroundColor: "#7445FB",
						borderColor: "#7445FB",
						tension: 0.3,
						spanGaps: false,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: true,
				scales: {
					x: {
						grid: {
							display: true,
							drawBorder: false,
							drawOnChartArea: false,
							drawTicks: false,
						},
					},
					y: {
						grid: {
							display: true,
							drawBorder: true,
							drawTicks: false,
							lineWidth: 1,
							color: "#858585",
							zeroLineColor: "rgba(0, 0, 0, 0.1)",
							zeroLineWidth: 1,

							borderDash: [2, 5],
							tickColor: "blue",
						},
						border: {
							dash: [1, 6],
						},

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
