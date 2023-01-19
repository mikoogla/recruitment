<template>
	<div
		class="card-container"
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
	},
}
</script>
<style scoped lang="scss">
.card-container {
	display: flex;
	flex-direction: row;
	background-color: #f7f7f9;
	padding: 1rem;
}
</style>
