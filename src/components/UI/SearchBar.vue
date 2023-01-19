import BackgroundTile from './BackgroundTile.vue';

<template>
	<div class="search-container">
		<BackgroundTile>
			<span class="material-symbols-outlined mr-4 point"> search </span>
			<input type="text" class="search-input" placeholder="Search" />
		</BackgroundTile>

		<div class="icons-container">
			<span class="material-symbols-outlined"> notifications_active </span
			><span class="material-symbols-outlined"> notifications_active </span>
		</div>
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
