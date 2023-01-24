import SideBarItem from './SideBar/SideBarItem.vue';

<template>
	<div class="menu-container">
		<span @click="close" class="material-symbols-outlined"> close </span>
		<SideBarItem
			selected
			text="Account Settings"
			icon="settings"
			class="menu-item"
		/>
		<SideBarItem selected text="Preferences" icon="tune" class="menu-item" />
		<SideBarItem selected text="Dark Mode" icon="dark_mode" class="menu-item" />
		<SideBarItem selected text="Log Out" icon="logout" class="menu-item" />
	</div>
</template>
<script>
import SideBarItem from "./SideBar/SideBarItem.vue"
export default {
	name: "MenuComponent",
	components: { SideBarItem },
	methods: {
		close() {
			this.$emit("qwe")
		},
	},
}
</script>
<style scoped lang="scss">
.menu-container {
	position: absolute;
	top: 0;
	right: 0;
	width: 264px;
	height: 50%;
	gap: 1rem;
	padding: 2rem 0;
	background-color: #f7f7f9;
	z-index: 3;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
}
.material-symbols-outlined {
	cursor: pointer;
	color: #9896a1;
	font-size: 2rem;
	transition: all 0.3s ease-in-out;
	&:hover {
		color: #000;
		transform: rotate(180deg);
	}
}
.menu-item {
	width: 80%;
}
</style>
