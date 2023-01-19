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
<script>
export default {
	name: "SideBarItem",
	props: {
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
	},
}
</script>

<style scoped lang="scss">
.item {
	font-weight: 400;
	font-size: 1.125rem;
	color: #9896a1;

	display: flex;
	align-items: center;
	justify-content: start;
	gap: 1rem;
	padding: 0.5rem;
	cursor: pointer;
	& .material-symbols-outlined {
		font-size: 2rem;
		font-weight: 400;
	}
	&:hover {
		background-color: #f7f7f9;
		transition: background-color 0.2s ease-in-out;
	}
}
.selected {
	background-color: #ffffff;
	border: 1px solid #ebebf3;
	border-radius: 4px;
	color: #0a041c;
	& .material-symbols-outlined {
		color: #7445fb;
	}
}
.notifications {
	position: absolute;
	right: 1rem;
	background-color: #ff5e5e;
	color: white;
	border-radius: 30px;
	padding: 0.25rem 0.5rem;
	font-size: 0.75rem;
	font-weight: 600;
}
</style>
