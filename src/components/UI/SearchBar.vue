import BackgroundTile from './BackgroundTile.vue';

<template>
	<div class="search-container">
		<BackgroundTile>
			<span class="material-symbols-outlined mr-4 point"> search </span>
			<input type="text" class="search-input" placeholder="Search" />
		</BackgroundTile>
	</div>
</template>

<script>
import BackgroundTile from "./BackgroundTile.vue"
export default {
	name: "SearchBar",
	components: { BackgroundTile },
}
</script>

<style scoped lang="scss">
.search-container {
	display: flex;
	max-width: 232px;
	color: #9896a1;
}
.point {
	cursor: pointer;
}
input {
	border: none;
	outline: none;
	background-color: transparent;
	height: 100%;
}
</style>
