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
	margin-left: 264px;
	padding: 2rem 4rem;
	display: flex;
	flex-direction: column;
	max-height: 900px;
	width: 100%;
	overflow-y: auto;
}

@media (max-width: 968px) {
	.home-container {
		margin-left: 0;
		padding: 3rem 1rem;
	}
}
</style>
