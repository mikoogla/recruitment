<template>
	<button
		class="button"
		:style="{
			backgroundColor: inverted ? textColor : backgroundColor,
			color: inverted ? backgroundColor : textColor,
		}"
	>
		<slot></slot>
	</button>
</template>
<script>
export default {
	name: "CustomButton",
	props: {
		inverted: {
			type: Boolean,
			default: false,
		},
		backgroundColor: {
			type: String,
			default: "#7445fb",
		},
		textColor: {
			type: String,
			default: "white",
		},
	},
}
</script>
<style scoped lang="scss">
.button {
	border: none;
	border-radius: 4px;
	padding: 0.5rem 1rem;
	cursor: pointer;
	border: 1px solid #ebebf3;
	font-weight: 500;

	&:hover {
		filter: brightness(0.9);
	}
}
</style>
