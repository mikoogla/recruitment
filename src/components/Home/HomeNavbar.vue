<template>
	<div class="nav-container">
		<SearchBar />
		<div class="icons-container">
			<v-badge dot color="#EA4D4D">
				<BackgroundTile :hover="true"
					><span class="material-symbols-outlined">
						notifications_active
					</span></BackgroundTile
				></v-badge
			>
			<BackgroundTile :hover="true" @click="openMenu()">
				<span class="material-symbols-outlined"> menu </span>
			</BackgroundTile>
		</div>
		<MenuComponent v-if="menuVisible" @qwe="closeMenu" />
	</div>
</template>
<script>
import MenuComponent from "../MenuComponent.vue"
import BackgroundTile from "../UI/BackgroundTile.vue"
import SearchBar from "../UI/SearchBar.vue"
export default {
	name: "HomeNavbar",
	components: { SearchBar, BackgroundTile, MenuComponent },
	emits: ["qwe"],
	data() {
		return {
			menuVisible: false,
		}
	},
	methods: {
		closeMenu() {
			this.menuVisible = false
		},
		openMenu() {
			this.menuVisible = true
		},
	},
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
