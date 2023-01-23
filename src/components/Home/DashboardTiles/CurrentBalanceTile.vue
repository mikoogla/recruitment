<template>
	<BackgroundTile radius="1rem" id="current-balance"
		><div class="title w-100 text-start">
			<h2>Current Balance</h2>
			<span class="material-symbols-outlined"> more_horiz </span>
		</div>
		<div class="balance w-100">
			<p>$</p>
			{{ balance.toLocaleString("en-US").replace(",", " ") }}
		</div>
	</BackgroundTile>
</template>
<script>
// import { mapActions } from "vuex"
import { mapActions, mapGetters } from "vuex"
import BackgroundTile from "../../UI/BackgroundTile.vue"
export default {
	name: "SummaryTile",
	components: { BackgroundTile },
	methods: {
		...mapActions(["fetchData"]),
	},
	computed: {
		...mapGetters({
			balance: "getCurrentBalance",
			getData: "getData",
		}),
	},
	mounted() {
		this.fetchData().then(() => {
			console.log("data fetched")
			console.log(">>>>>data:", this.getData)
		})
	},
}
</script>
<style lang="scss" scoped>
#current-balance {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem 2rem;
}
.title {
	width: 100%;
	display: flex;
	justify-content: space-between;
	h2 {
		font-weight: 500;
	}
	padding: 1rem 0;
	& .material-symbols-outlined {
		font-size: 1.5rem;
		cursor: pointer;
		color: #9896a1;
	}
}
.balance {
	display: flex;
	align-items: center;
	font-size: 3.2rem;
	font-weight: 500;
	& p {
		color: #9896a1;
		font-weight: 400;
	}
}
</style>
