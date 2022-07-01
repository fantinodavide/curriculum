<script setup lang="ts"></script>
<script lang="ts">
	export default {
		props: {
			title: String,
		},
	};
</script>

<template>
	<div :id="title.replace(/\s/g,'')">
		<h2>{{ title }}</h2>
		<slot />
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h2,
	h3 {
		letter-spacing: 3px;
		text-transform: uppercase;
		font-weight: 500;
		/* margin-bottom: 0px; */
		margin-top: 50px;
	}
	h2::after,
	h3::after {
		position: absolute;
		top: calc(100% + 5px);
		left: 0;
		content: '';
		height: 3px;
		width: 50px;
		background: var(--dark);
	}
	div{
		display: flex;
		flex-direction: column;
		margin-bottom: 30px;
	}
</style>
