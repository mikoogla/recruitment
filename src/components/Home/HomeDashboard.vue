<template>
	<div class="dashboard-container mt-10">
		<CurrentBalanceTile class="single-grid one" />
		<SummaryTile class="single-grid two" />
		<InfoTile class="double-grid" />
	</div>
</template>
<script>
import CurrentBalanceTile from "./DashboardTiles/CurrentBalanceTile.vue"
import SummaryTile from "./DashboardTiles/SummaryTile.vue"
import InfoTile from "./DashboardTiles/InfoTile/InfoTile.vue"

export default {
	name: "MenuComponent",
	components: { CurrentBalanceTile, SummaryTile, InfoTile },
}
</script>

<style scoped lang="scss">
.dashboard-container {
	gap: 1rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2rem;
}
.single-grid {
	height: 336px;
	&.one {
		grid-row-start: 1;
		grid-column-start: 1;

		grid-row-end: 2;
		grid-column-end: 2;
	}
	&.two {
		grid-row-start: 1;
		grid-column-start: 2;

		grid-row-end: 2;
		grid-column-end: 3;
	}
}
.double-grid {
	grid-row-start: 2;
	grid-column-start: 1;

	grid-row-end: 3;
	grid-column-end: 3;
}
</style>
