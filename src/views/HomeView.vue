<template>
	<div class="home-container">
		<HomeNavbar />
		<HomeDashboard />
	</div>
</template>

<script>
import HomeDashboard from "@/components/Home/HomeDashboard.vue"
import HomeNavbar from "@/components/Home/HomeNavbar.vue"
import { defineComponent } from "vue"

// Components

export default defineComponent({
	name: "HomeView",

	components: { HomeNavbar, HomeDashboard },
})
</script>
<style scoped lang="scss">
.home-container {
	margin: 2rem 4rem;
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
}
</style>
