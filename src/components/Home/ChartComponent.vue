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
const randomStats = () => {
	let arr = []
	for (let i = 1; i <= 31; i++) {
		arr.push(Math.floor(Math.random() * 2000 + 4000 + i * 200))
	}
	return arr
}
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
						// pointStyle: false,
						backgroundColor: context => {
							let gradient = context.chart.ctx.createLinearGradient(
								0,
								0,
								0,
								250
							)
							gradient.addColorStop(0, "rgba(116, 69, 251, 0.3)")
							gradient.addColorStop(1, "rgba(255,255,255, 0)")

							return gradient
						},
						borderColor: "#7445FB",
						// usePointStyle: false,
						fill: true,
						tension: 0.3,
					},
					{
						data: randomStats(),
						borderColor: "#858585",
						borderDash: [6, 2],
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
				maintainAspectRatio: false,
				scales: {
					x: {
						grid: {
							display: true,
							drawBorder: false,
							drawOnChartArea: false,
							drawTicks: false,
						},
						ticks: {
							display: false,
						},
					},
					y: {
						grace: "10%",
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
						caretPadding: 15,
						distance: 10,
						yAlign: "bottom",
						pointStyle: true,
						usePointStyle: true,
						displayColors: false,

						callbacks: {
							label: function (context) {
								return "$" + context.parsed.y
							},
						},
					},
				},
				elements: {
					point: {
						radius: 0,
						hoverRadius: 6,
						color: "rgba(151,187,205,1)",
						strokeColor: "#fff",
						highlightFill: "#fff",
						highlightStroke: "rgba(151,187,205,1)",
						pointBackgroundColor: "white",
						hoverBorderWidth: 3,
					},
				},
			},
		}
	},
}
</script>
