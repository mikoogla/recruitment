<template>
	<div id="tabs-container">
		<div v-for="tab in tabs" :key="tab.name" class="tab">{{ tab.name }}</div>
	</div>
</template>
<script>
export default {
	name: "InfoTabs",
	data() {
		return {
			tabs: [
				{
					name: "Summary",
					active: true,
				},
				{
					name: "Table",
					active: false,
				},
				{
					name: "Charts",
					active: false,
				},
				{
					name: "Reporting",
					active: false,
				},
				{
					name: "Analysis",
					active: false,
				},
			],
		}
	},
}
</script>
<style lang="scss" scoped>
#tabs-container {
	display: flex;
	flex-direction: row;
	gap: 1rem;
}
</style>
