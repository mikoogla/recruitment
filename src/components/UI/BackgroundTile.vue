<template>
	<div
		class="card-container"
		:class="hover ? 'hover' : ''"
		:style="{
			borderRadius: radius || '0.5rem',
		}"
	>
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: "BackgroundTile",
	props: {
		radius: {
			type: String,
			default: "0.5rem",
		},
		hover: {
			type: Boolean,
			default: false,
		},
	},
}
</script>
<style scoped lang="scss">
.card-container {
	display: flex;
	flex-direction: row;
	background-color: #f7f7f9;
	padding: 1rem;

	&.hover {
		transition: all 0.2s ease-in-out;
		cursor: pointer;
		&:hover {
			filter: brightness(0.97);
		}
	}
}
</style>
