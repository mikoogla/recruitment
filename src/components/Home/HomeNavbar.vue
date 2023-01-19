<template>
	<div class="nav-container">
		<SearchBar />
		<div class="icons-container">
			<BackgroundTile hover
				><span class="material-symbols-outlined">
					notifications_active
				</span></BackgroundTile
			>
			<BackgroundTile hover="true">
				<span class="material-symbols-outlined"> menu </span>
			</BackgroundTile>
		</div>
	</div>
</template>
<script>
import BackgroundTile from "../UI/BackgroundTile.vue"
import SearchBar from "../UI/SearchBar.vue"
export default {
	name: "HomeNavbar",
	components: { SearchBar, BackgroundTile },
}
</script>
<style scoped lang="scss">
.nav-container {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	min-height: 4rem;
	width: 100%;
}
.icons-container {
	display: flex;
	gap: 1rem;

	& .material-symbols-outlined {
		cursor: pointer;
		color: #9896a1;
	}
}
</style>
