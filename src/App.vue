<template>
	<v-app theme="light">
		<v-main class="d-flex">
			<SideBar />
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
import SideBar from "./components/SideBar.vue"

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
</style>
<style lang="scss">
@import "@/styles/imports.scss";
</style>
