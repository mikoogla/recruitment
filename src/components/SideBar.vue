<template>
	<div v-show="isExpanded" class="sidebar-container">
		<div class="logo-position">
			<v-img src="@/assets/logo-full.png" contain max-width="150" class="" />
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
export default {
	name: "SideBar",
	data: () => ({
		isExpanded: true,
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
	padding: 2rem 0.5rem;
}
.expand {
	position: absolute;
	left: 0;
	top: 50%;
}
.logo-position {
	width: 100%;
	display: flex;
	padding: 0 1rem;
	justify-content: start;
}
</style>
