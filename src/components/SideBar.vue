<template>
	<div v-show="isExpanded" class="sidebar-container">sidebar</div>
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
export default {
	name: "SideBar",
	data: () => ({
		isExpanded: false,
	}),
}
</script>
<style scoped lang="scss">
@import "@/styles/imports.scss";
.sidebar-container {
	width: 30%;
	max-width: 264px;
	height: 100%;
	background-color: $color-sidebar;
}
.expand {
	position: absolute;
	left: 0;
	top: 50%;
}
</style>
