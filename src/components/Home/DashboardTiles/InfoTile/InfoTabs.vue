<template>
	<div id="tabs-container">
		<div
			v-for="tab in tabs"
			:key="tab.name"
			class="tab"
			:class="{ active: tab.active }"
			@click="activate(tab)"
		>
			{{ tab.name }}
		</div>
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
	methods: {
		activate(tab) {
			this.tabs.forEach(t => {
				t.active = false
			})
			tab.active = true
		},
	},
}
</script>
<style lang="scss" scoped>
#tabs-container {
	display: flex;
	flex-direction: row;
	gap: 1rem;
}
.tab {
	line-height: 2rem;
	font-weight: 400;
	color: #9896a1;
	cursor: pointer;
	&.active {
		color: #000000;
		font-weight: 500;
		padding-bottom: 0.5rem;
		border-bottom: 4px solid #7445fb;
	}
}
</style>
