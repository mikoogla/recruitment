<template>
	<div class="card-container">
		<slot></slot>
	</div>
</template>
<style scoped lang="scss">
.card-container {
	display: flex;
	flex-direction: row;
	background-color: #f7f7f9;
	border-radius: 0.5rem;
	padding: 1rem;
}
</style>
