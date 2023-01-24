<script setup>
import BackgroundTile from "./BackgroundTile.vue"
</script>

<template>
	<div class="search-container">
		<BackgroundTile>
			<span class="material-symbols-outlined mr-4 point"> search </span>
			<input type="text" class="search-input" placeholder="Search" />
		</BackgroundTile>
	</div>
</template>

<style scoped lang="scss">
.search-container {
	display: flex;
	max-width: 232px;
	color: #9896a1;
}
.point {
	cursor: pointer;
}
.icons-container {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
input {
	border: none;
	outline: none;
	background-color: transparent;
	height: 100%;
}
</style>
