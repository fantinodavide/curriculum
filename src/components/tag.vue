<script setup lang="ts"></script>
<script lang="ts">
	/* eslint-disable */
	export default {
		props: {
			value: String,
			skew: {
				required: false,
				type: Boolean,
			},
			arrow: {
				required: false,
				type: Boolean,
			},
		},
		methods: {
			isUrl: function (txt: string) {
				const r = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
				return txt.match(r);
			},
			isEmail: function (txt: string) {
				const r = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return txt.match(r);
			},
		},
		created() {
			console.log(JSON.parse(JSON.stringify(this.$props)));
		},
	};
</script>

<template>
	<span v-if="!arrow" :class="{ skew: skew }">{{ value }}</span>
	<span v-else-if="arrow" class="arrow">{{ value }}<span class="arrowTip"></span></span>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	span {
		padding: 5px 10px;
		/* transform: skewX(-20deg); */
		/* background: var(--dark); */
		color: #eee;
		margin-right: 3px;
		margin-bottom: 5px;
		margin-left: 7px;
		display: inline-block;
	}
	span.skew::before {
		content: '';
		position: absolute;
		width: calc(100% - 15px);
		height: calc(100% - 10px);
		top: 50%;
		left: 50%;
		padding: 5px 10px;
		transform: translate(-50%, -50%) skewX(-15deg);
		background: var(--dark2);
		z-index: -1;
		border-radius: 3px;
	}

	span.arrow {
		margin: 0;
		background: var(--dark);
		color: #ddd;
		padding: 0px 5px;
		padding-right: 0;
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
		/* overflow: hidden; */
		margin-right: 15px;
		display: inline-flex;
	}
	span.arrow .arrowTip {
		--size: 19px;
		content: '';
		position: absolute;
		height: var(--size);
		width: var(--size);
		transform: translate(50%, -50%) rotate(45deg);
		top: 50%;
		right: 0;
		background: var(--dark);
		z-index: -1;
		border-radius: 3px;
		padding: 0;
		margin: 0;
	}
</style>
