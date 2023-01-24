<template>
	<div class="dashboard-container mt-10">
		<CurrentBalanceTile class="single-grid one" />
		<SummaryTile v-if="$vuetify.display.width > 968" class="single-grid two" />
		<InfoTile class="double-grid" />
		<SummaryTile v-if="$vuetify.display.width <= 968" class="single-grid two" />
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
	grid-template-columns: repeat(2, minmax(0, 1fr));
	grid-gap: 2rem;
}
.single-grid {
	height: 336px;
	&.one {
		grid-column: 1fr;
		min-width: 100%;
	}
	&.two {
		grid-column: 1fr;
	}
}
.double-grid {
	grid-row-start: 2;
	grid-column-start: 1;

	grid-row-end: 3;
	grid-column-end: 3;
}

@media (max-width: 968px) {
	.dashboard-container {
		display: flex;
		flex-direction: column;
	}
}
@media (min-width: 968px) {
	.dashboard-container {
		display: grid;
	}
}
</style>
