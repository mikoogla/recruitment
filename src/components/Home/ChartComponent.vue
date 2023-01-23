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
	Filler,
} from "chart.js"
import { Line } from "vue-chartjs"

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
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
						backgroundColor: context => {
							let gradient = context.chart.ctx.createLinearGradient(
								0,
								0,
								0,
								400
							)
							gradient.addColorStop(0, "rgba(116, 69, 251, 0.3)")
							gradient.addColorStop(1, "rgba(255,255,255, 0)")
							return gradient
						},
						borderColor: "#7445FB",
						usePointStyle: false,
						fill: true,
						tension: 0.3,
					},
				],
			},

			options: {
				interaction: {
					intersect: false,
					mode: "nearest",
				},

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
								if (value === 0) return value
								return value / 1000 + "k"
							},
						},
					},
				},
				plugins: {
					legend: {
						display: false,
					},
					tooltip: {
						usePointStyle: false,
						displayColors: false,
						callbacks: {
							label: function (context) {
								return "$" + context.parsed.y
							},
						},
					},
				},
			},
		}
	},
}
</script>
