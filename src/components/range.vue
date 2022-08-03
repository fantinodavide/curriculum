<script setup lang="ts"></script>
<script lang="ts">
	/* eslint-disable */
	export default {
		props: {
			value: Number,
			title: String,
			showValue: {
				type: Boolean,
				default: false,
			},
			max: {
				default: 5,
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
	};
</script>

<template>
	<span v-if="title != ''">
		{{ title }}
		<div>
			<span class="value" v-if="showValue">{{ value }}</span>
		</div>
	</span>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	span {
		white-space: no-break;
		flex-grow: 1;
		margin-bottom: 5px;
		display: flex;
		align-items: center;
		flex-direction: row;
		text-transform: capitalize;
	}
	div {
		position: relative;
		justify-self: flex-end;
		height: 10px;
		width: 100px;
		background: #eee;
		margin-left: auto;
		border-radius: 3px;
	}
	div::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: v-bind(100 / max * value + '%');
		background: var(--dark2);
		border-radius: 3px;
	}
	div span.value {
		position: absolute;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		top: 50%;
		left: v-bind(100 / max * value + '%');
		height: 20px;
		width: 20px;
		background: var(--dark2);
		transform: translate(-50%,-50%);
		font-size: 14px;
		color: #eee;
		z-index: 2;
		border-radius: 10px;
		/* box-shadow: 0 0 4px 0 #0004; */
	}
</style>
