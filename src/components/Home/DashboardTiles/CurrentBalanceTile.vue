<script setup>
import CustomButton from "@/components/UI/CustomButton.vue"
import BackgroundTile from "../../UI/BackgroundTile.vue"
import { useStore } from "vuex"
import { computed } from "vue"

const store = useStore()
const balance = computed(() => store.getters.getCurrentBalance)
</script>
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
			<CustomButton>Quick Invest</CustomButton>
			<CustomButton inverted>Show Raport</CustomButton>
		</div>
	</BackgroundTile>
</template>
<style lang="scss" scoped>
#current-balance {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem 2rem 2rem 2rem;
	overflow: hidden;
}
.title {
	width: 100%;
	display: flex;
	justify-content: space-between;
	h2 {
		font-weight: 600;
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
	font-weight: 600;
	white-space: nowrap;
	& p {
		color: #9896a1;
		font-weight: 400;
	}
}
.change {
	display: flex;
	align-items: center;
	color: #2dc78f;
	font-weight: 600;
	& p {
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
	white-space: nowrap;
}
</style>
