<template>
	<BackgroundTile radius="1rem" id="info-container"
		><div>tabs</div>
		<hr />
		<div>items</div>
	</BackgroundTile>
</template>
<script>
import BackgroundTile from "../../../UI/BackgroundTile.vue"
export default {
	name: "SummaryTile",
	components: { BackgroundTile },
}
</script>
<style lang="scss" scoped>
#info-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 1rem 2rem 2rem 2rem;
}
hr {
	border-top: 1px solid #9896a1;
	opacity: 0.2;
}
</style>
