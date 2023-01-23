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
		<div class="change py-4 w-100">
			<span class="material-symbols-outlined"> trending_up </span>
			<p>12%</p>
			vs last month
		</div>
		<div class="buttons">
			<v-btn class="btn btn-primary" variant="tonal" color="indigo"
				>Quick Invest</v-btn
			>
			<v-btn class="btn btn-primary" variant="outlined">Show Report</v-btn>
		</div>
	</BackgroundTile>
</template>
<script>
// import { mapActions } from "vuex"
import { mapGetters } from "vuex"
import BackgroundTile from "../../UI/BackgroundTile.vue"
export default {
	name: "SummaryTile",
	components: { BackgroundTile },

	computed: {
		...mapGetters({
			balance: "getCurrentBalance",
		}),
	},
}
</script>
<style lang="scss" scoped>
#current-balance {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem 2rem 2rem 2rem;
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
.change {
	display: flex;
	align-items: center;
	color: #2dc78f;
	& p {
		font-weight: 400;
		margin: 0 0.5rem;
	}
	& .material-symbols-outlined {
		font-size: 1.5rem;
	}
}
.buttons {
	display: flex;
	justify-content: start;
	align-items: flex-end;
	width: 100%;
	height: 100%;
	gap: 1rem;
}
</style>
