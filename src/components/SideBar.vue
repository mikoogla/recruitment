<template>
	<div v-show="isExpanded" class="sidebar-container">
		<div class="logo-position">
			<v-img src="@/assets/logo-full.png" contain max-width="150" class="" />
		</div>
		<div class="items-container my-12">
			<SideBarItem
				v-for="item in sidebarItems"
				:key="item.name"
				:selected="item.selected"
				:icon="item.icon"
				:text="item.name"
				:notifications="item.notifications"
			/>
		</div>
	</div>
	<div class="expand">
		<v-btn @click="isExpanded = !isExpanded">
			<span v-if="!isExpanded" class="material-symbols-outlined">
				arrow_forward_ios
			</span>
			<span v-else class="material-symbols-outlined"> arrow_back_ios_new </span>
		</v-btn>
	</div>
</template>
<script>
import SideBarItem from "./SideBar/SideBarItem.vue"
import SideBarItemsData from "./SideBar/sidebarItemsData"

export default {
	name: "SideBar",
	data: () => ({
		isExpanded: true,
		sidebarItems: [],
	}),
	components: { SideBarItem },
	mounted() {
		this.sidebarItems = SideBarItemsData
	},
}
</script>
<style scoped lang="scss">
@import "@/styles/imports.scss";
.sidebar-container {
	position: absolute;
	left: 0;
	top: 0;
	width: 264px;
	height: 100%;
	max-height: 900px;
	background-color: $color-sidebar;
	padding: 2rem 0.5rem;
}
.expand {
	position: absolute;
	left: 0;
	bottom: 50px;
}
.logo-position {
	width: 100%;
	display: flex;
	padding: 0 1rem;
	justify-content: start;
}
.items-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
</style>
