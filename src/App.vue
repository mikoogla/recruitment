<script setup>
import SideBar from "./components/SideBar/SideBar.vue"
</script>

<template>
	<v-app
		theme="light"
		style="max-height: 900px; height: 100%"
		:full-height="false"
	>
		<div class="d-flex">
			<SideBar />
			<router-view />
		</div>
	</v-app>
</template>
<style scoped lang="scss">
@import "@/styles/imports.scss";
.div {
	max-height: 900px;
}
.v-application__wrap,
.v-application {
	max-height: 900px;
	position: static;
}
</style>
<style lang="scss">
@import "@/styles/imports.scss";
</style>
