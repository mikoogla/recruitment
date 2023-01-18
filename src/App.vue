<template>
	<v-app theme="light">
		<v-main>
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
