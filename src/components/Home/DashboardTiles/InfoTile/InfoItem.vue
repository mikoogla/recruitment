<template>
	<div class="info-item w-100">
		<div class="segment a">
			<CustomImage
				:img-name="name"
				style="min-width: 3rem; width: 3rem"
				class="image"
			/>
			<div class="box d-flex flex-column w-25">
				<div class="short">
					{{ name }}
				</div>
				<div class="long">
					{{ fullCurrencyName }}
				</div>
			</div>
		</div>
		<div class="segment b">
			<div class="box">
				<div class="short">Price:</div>
				<div class="long">${{ price }}</div>
			</div>

			<div class="box">
				<div class="short">Change:</div>
				<div
					class="long"
					:style="percentchange > 0 ? 'color: #2DC78F' : 'color: #EA4D4D'"
				>
					{{ percentchange > 0 ? `+${percentchange}%` : `${percentchange}%` }}
					<span class="material-symbols-outlined">
						{{ percentchange > 0 ? "arrow_circle_up" : "arrow_circle_down" }}
					</span>
				</div>
			</div>
		</div>
		<div class="segment c">
			<MiniChart
				id="mini-chart"
				:line-color="percentchange > 0 ? '#2DC78F' : '#EA4D4D'"
				:labels="history"
				:stats="history"
			/>
			<div class="buttons">
				<CustomButton inverted>Sell</CustomButton>
				<CustomButton>Buy</CustomButton>
			</div>
		</div>
	</div>
</template>
<script>
import CustomButton from "@/components/UI/CustomButton.vue"
import CustomImage from "@/components/UI/CustomImage.vue"
import { mapGetters } from "vuex"
import fullNames from "./fullNames"
import MiniChart from "./miniChart.vue"

export default {
	name: "InfoItem",
	data() {
		return {
			history: [],
			price: (0).toLocaleString("en-US"),
			percentchange: 0,
			fullCurrencyName: "",
		}
	},
	props: {
		name: {
			type: String,
			required: true,
		},
	},
	computed: {
		...mapGetters(["getData", "getHistoricalData"]),
	},
	async beforeMount() {
		let self = this
		this.history = self.getHistoricalData[self.name].quotes.map(quote =>
			quote.quote.USD.price.toFixed(2)
		)
		this.price =
			self.getData[self.name][0].quote["USD"].price.toLocaleString("en-US")

		this.percentchange =
			self.getData[self.name][0].quote["USD"].percent_change_24h.toFixed(2)
		this.fullCurrencyName = fullNames.find(
			translation => translation.name === self.name
		).fullName
	},
	components: { CustomButton, MiniChart, CustomImage },
}
</script>
<style lang="scss" scoped>
.info-item {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	padding: 0.5rem 0;
	background-color: #ffffff;
	border: 1px solid #ebebf3;
	padding: 1rem;
	border-radius: 0.5rem;
	margin-bottom: 0.5rem;
	overflow: hidden;
}
.image {
	margin: 0 1rem 0 0;
}
.segment {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: nowrap;

	&.a {
		justify-content: flex-start;
	}
	&.b {
		justify-content: space-between;
	}
	&.c {
		justify-content: flex-start;
		align-items: end;
		&.buttons {
			width: 100%;
		}
	}
}
.box {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	& .short {
		color: #9896a1;
	}
	& .long {
		color: #0a041c;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
	}
}
.buttons {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	gap: 1rem;
}
.material-symbols-outlined {
	font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
@media (max-width: 1220px) {
	.image {
		margin: 0;
	}
	.info-item {
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.segment {
		display: grid;
		text-align: center;
		&.a {
			display: flex;
			justify-content: center;
			flex-direction: column;
			gap: 1rem;
			grid-row-start: 1;
			grid-column-start: 1;

			grid-row-end: 3;
			grid-column-end: 2;
		}
		&.b {
			display: flex;
			justify-content: center;
			flex-direction: column;
			gap: 1rem;
			grid-row-start: 1;
			grid-column-start: 2;

			grid-row-end: 3;
			grid-column-end: 3;
		}
		&.c {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: space-between;
			grid-row-start: 1;
			grid-column-start: 3;

			grid-row-end: 3;
			grid-column-end: 4;
		}
	}
	.buttons {
		width: 100%;
		margin-top: 1rem;
		justify-content: flex-end;
		align-items: center;
		padding: 0 2rem;
	}
	.box {
		align-items: center;
	}
}
@media (min-width: 700px) {
	#mini-chart {
		margin: 0 3rem;
	}
}
@media (max-width: 700px) {
	.info-item {
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr;
		gap: 0;
	}
	.segment {
		display: grid;
		&.a {
			grid-row-start: 1;
			grid-column-start: 1;

			grid-row-end: 2;
			grid-column-end: 3;
		}
		&.b {
			grid-row-start: 2;
			grid-column-start: 1;

			grid-row-end: 3;
			grid-column-end: 3;
		}
		&.c {
			justify-content: flex-start;
			align-items: center;

			grid-row-start: 3;
			grid-column-start: 1;

			grid-row-end: 4;
			grid-column-end: 3;
		}
	}
	.buttons {
		width: 100%;
		margin-top: 1rem;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
}
</style>
