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
	<div class="pgBreak"></div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.pgBreak{
		page-break-after: always;
	}
</style>
