<template>
	<div class="dashboard-container mt-10">
		<CurrentBalanceTile />

		<SummaryTile />

		<InfoTile class="double-grid" />
	</div>
</template>
<script>
import CurrentBalanceTile from "./DashboardTiles/CurrentBalanceTile.vue"
import SummaryTile from "./DashboardTiles/SummaryTile.vue"
import InfoTile from "./DashboardTiles/InfoTile.vue"

export default {
	name: "MenuComponent",
	components: { CurrentBalanceTile, SummaryTile, InfoTile },
}
</script>

<style scoped lang="scss">
.dashboard-container {
	gap: 1rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 2rem;
}
.double-grid {
	grid-area: 2 / 1 / 3 / 3;
}
</style>
