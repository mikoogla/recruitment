<template>
	<div class="image-container">
		<img
			:src="require(`@/assets/images/${imgName}.png`)"
			alt="image"
			class="image"
		/>
	</div>
</template>
<script>
export default {
	name: "CustomImage",
	props: {
		imgName: {
			type: String,
			required: true,
			default: "BTC",
		},
	},
}
</script>
<style scoped lang="scss">
.image-container {
	width: 100%;
	aspect-ratio: 1 / 1;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	border-radius: 50%;
	border: 1px solid #ebebf3;
	.image {
		width: 80%;
		height: 80%;
		object-fit: contain;
	}
	&:hover {
		cursor: pointer;
	}
}
</style>
