<template>
	<div
		class="item"
		:class="{
			selected: selected,
		}"
	>
		<span class="material-symbols-outlined"> {{ icon }} </span>
		{{ text }}
		<div v-if="notifications" class="notifications">
			{{ notifications > 9 ? "9+" : notifications }}
		</div>
	</div>
</template>
<script setup>
import { defineProps } from "vue"
defineProps({
	selected: {
		type: Boolean,
		default: false,
	},
	icon: {
		type: String,
		default: "home",
	},
	text: {
		type: String,
		default: "Item",
	},
	notifications: {
		type: Number,
		default: 0,
	},
})
</script>
<style scoped lang="scss">
.item {
	font-weight: 400;
	color: #9896a1;
	display: flex;
	align-items: center;
	justify-content: start;
	gap: 1rem;
	padding: 0.5rem;
	cursor: pointer;
	& .material-symbols-outlined {
		font-size: 1.5rem;
		font-weight: 400;
	}
	&:hover {
		background-color: #ffffff;
		transition: all 0.2s ease-in-out;
	}
}
.selected {
	background-color: #ffffff;
	border: 1px solid #ebebf3;
	border-radius: 4px;
	color: #0a041c;
	font-weight: 600;
	& .material-symbols-outlined {
		color: #7445fb;
	}
	&:hover {
		background-color: #ebebf3;
	}
}
.notifications {
	position: absolute;
	right: 1rem;
	background-color: #ff5e5e;
	color: white;
	border-radius: 30px;
	padding: 0.1rem 0.5rem;
	font-size: 0.75rem;
	font-weight: 600;
}
</style>
