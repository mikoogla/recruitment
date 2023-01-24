<template>
	<div class="chart-size mx-10">
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
	name: "miniChart",
	props: {
		labels: {
			type: Array,
			required: false,
		},
		chartName: {
			type: String,
			required: false,
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
						borderColor: "#7445FB",
						usePointStyle: false,
						tension: 0.3,
						borderWidth: 2,
					},
				],
			},

			options: {
				responsive: true,
				maintainAspectRatio: false,
				scales: {
					x: {
						grace: "10%",
						beginAtZero: false,
						grid: {
							display: false,
						},
						border: {
							display: false,
						},
						ticks: {
							display: false,
						},
					},
					y: {
						grace: "10%",
						grid: {
							display: false,
						},
						beginAtZero: false,
						ticks: {
							display: false,
						},
						border: {
							display: false,
						},
					},
				},
				plugins: {
					legend: {
						display: false,
					},
					tooltip: {
						enabled: false,
						caretPadding: 15,
						distance: 10,
						yAlign: "bottom",
						pointStyle: false,
						usePointStyle: false,
						displayColors: false,
					},
				},
				elements: {
					point: {
						radius: 0,
						hoverRadius: 0,
						color: "#fff",
						strokeColor: "#fff",
						highlightFill: "#fff",
						highlightStroke: "#fff",
						pointBackgroundColor: "white",
						hoverBorderWidth: 0,
					},
				},
			},
		}
	},
}
</script>

<style scoped>
.chart-size {
	max-height: 2rem;
	max-width: 10rem;
}
</style>