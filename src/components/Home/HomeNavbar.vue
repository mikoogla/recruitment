<template>
	<div class="nav-container">
		<SearchBar />
	</div>
</template>
<script>
import SearchBar from "../UI/SearchBar.vue"
export default {
	name: "HomeNavbar",
	components: { SearchBar },
}
</script>
<style scoped lang="scss">
.nav-container {
	display: flex;
	flex-direction: column;
	min-height: 4rem;
	width: 100%;
}

.search-container {
	padding: 1rem;
	width: 232px;
}
</style>
