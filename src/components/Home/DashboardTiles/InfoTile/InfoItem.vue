<template>
	<div class="info-item w-100">
		{{ name }}
		<div class="price">
			Price: ${{ getData[name][0].quote["USD"].price.toFixed(2) }}
		</div>
		<div class="price">
			Change:
			{{ getData[name][0].quote["USD"].percent_change_24h.toFixed(2) }}
			%
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
	name: "InfoItem",
	props: {
		name: {
			type: String,
			required: true,
		},
	},
	computed: {
		...mapGetters(["getData"]),
	},
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
</style>
