<template>
	<div class="info-item w-100">
		<div class="name d-flex flex-column w-25">
			<div class="short">
				{{ name }}
			</div>
			<div class="long">
				{{ fullCurrencyName }}
			</div>
		</div>
		<div class="price">Price: ${{ price }}</div>
		<div class="price">
			Change:
			{{ percentchange }}
			%
		</div>
		<MiniChart :labels="history" :stats="history" />
		<div class="buttons d-flex">
			<CustomButton inverted>Sell</CustomButton>
			<CustomButton class="ml-2">Buy</CustomButton>
		</div>
	</div>
</template>
<script>
import CustomButton from "@/components/UI/CustomButton.vue"
import { mapGetters } from "vuex"
import fullNames from "./fullNames"
import MiniChart from "./miniChart.vue"

export default {
	name: "InfoItem",
	data() {
		return {
			history: [],
			price: (0).toLocaleString("en-US").replace(",", " "),
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
		console.log("name ", self.name)
		this.history = self.getHistoricalData[self.name].quotes.map(quote =>
			quote.quote.USD.price.toFixed(2)
		)
		this.price = self.getData[self.name][0].quote["USD"].price
			.toLocaleString("en-US")
			.replace(",", " ")
		this.percentchange =
			self.getData[self.name][0].quote["USD"].percent_change_24h.toFixed(2)
		this.fullCurrencyName = fullNames.find(
			translation => translation.name === self.name
		).fullName
	},
	components: { CustomButton, MiniChart },
}
</script>
<style lang="scss" scoped>
.info-item {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 0;
	background-color: #ffffff;
	border: 1px solid #ebebf3;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	margin-bottom: 0.5rem;
}
.name {
	& .short {
		color: #9896a1;
	}
	& .long {
		color: #0a041c;
		font-weight: 600;
	}
}
</style>
