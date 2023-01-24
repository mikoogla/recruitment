<script setup>
import SideBarItem from "./SideBarItem.vue"
import FavoriteItem from "./FavoriteItem.vue"
import AccountInfo from "./AccountInfo.vue"

import SideBarItemsData from "./sidebarItemsData"
import { useStore } from "vuex"
import { ref, computed } from "vue"

const store = useStore()

const isExpanded = ref(false)
const sidebarItems = computed(() => SideBarItemsData)
const favorites = ref(["BTC", "XRP"])
const loadingState = computed(() => store.getters.getLoadingState)
</script>

<template>
	<div
		v-show="isExpanded || $vuetify.display.width > 968"
		class="sidebar-container"
	>
		<div class="logo-position">
			<v-img src="@/assets/logo-full.png" contain max-width="100" class="" />
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
		<hr />
		<div class="favorites-container w-100">
			<div class="favorites-title">
				Favorites
				<span class="material-symbols-outlined"> more_horiz </span>
			</div>
			<div v-if="loadingState" class="items-list my-5">
				<FavoriteItem v-for="it in favorites" :name="it" :key="it" />
			</div>
			<div v-else class="loading w-100">
				<v-progress-circular indeterminate color="#7445FB" />
			</div>
		</div>
		<AccountInfo id="account-info" />
	</div>
	<div class="expand">
		<v-btn color="#7445FB" @click="isExpanded = !isExpanded">
			<span v-if="!isExpanded" class="material-symbols-outlined">
				arrow_forward_ios
			</span>
			<span v-else class="material-symbols-outlined"> arrow_back_ios_new </span>
		</v-btn>
	</div>
</template>
<style scoped lang="scss">
@import "@/styles/imports.scss";
#account-info {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
}
hr {
	border-top: 1px solid #9896a1;
	opacity: 0.2;
}
.sidebar-container {
	position: absolute;
	left: 0;
	top: 0;
	width: 264px;
	height: 100vh;
	max-height: 900px;
	overflow: hidden;
	background-color: $color-sidebar;
	padding: 2rem 0.5rem;
	z-index: 1;
}
.expand {
	visibility: hidden;
	position: absolute;
	left: 0.5rem;
	top: 0.5rem;
	color: #fff;
	z-index: 2;
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
.favorites-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
}
.favorites-title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: 600;
	color: #9896a1;

	& .material-symbols-outlined {
		cursor: pointer;
	}
}
.items-list {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

@media (max-width: 968px) {
	.sidebar-container {
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 3rem 0 0 0;
	}
	.expand {
		visibility: visible;
	}
}
</style>
