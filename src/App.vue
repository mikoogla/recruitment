<template>
	<v-app theme="light" style="max-height: 900px">
		<v-main class="d-flex">
			<SideBar />

			<router-view />
		</v-main>
	</v-app>
</template>

<script>
import SideBar from "./components/SideBar/SideBar.vue"

export default {
	name: "App",
	data: () => ({
		//
	}),
	components: { SideBar },
}
</script>
<style scoped lang="scss">
@import "@/styles/imports.scss";
.v-main {
	max-height: 900px;
}
</style>
<style lang="scss">
@import "@/styles/imports.scss";
</style>
