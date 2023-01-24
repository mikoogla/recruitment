<template>
	<div class="account-container d-flex align-center justify-space-between pa-5">
		<div class="account d-flex">
			<div class="image-container mr-3">
				<img
					:src="require(`@/assets/images/profile.png`)"
					alt="profile picture"
					class="image"
				/>
			</div>
			<div class="account-info">
				<div class="name">Marc Webber</div>
				<div class="email">marc@riot.com</div>
			</div>
		</div>
		<span class="material-symbols-outlined"> more_horiz </span>
	</div>
</template>
<style scoped lang="scss">
.image-container {
	width: 40px;
	aspect-ratio: 1 / 1;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	border-radius: 50%;
	border: 1px solid #ebebf3;
	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&:hover {
		cursor: pointer;
	}
}

.account-info {
	& .name {
		/* font-size: 1.2rem; */
		font-weight: 600;
		color: #1e1e1e;

		&:hover {
			cursor: pointer;
		}
	}
	& .email {
		font-size: 0.8rem;
		color: #9896a1;
	}
}
.material-symbols-outlined {
	font-size: 1.5rem;
	color: #9896a1;

	&:hover {
		cursor: pointer;
	}
}
</style>
