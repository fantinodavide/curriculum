<script setup lang="ts"></script>
<script lang="ts">
	/* eslint-disable */
	export default {
		props: {
			title: String,
			desc: {
				required: true,
				type: String,
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
	<h4>{{ title }}</h4>
	<p v-if="!isUrl(desc)">{{ desc }}</p>
	<a v-else :href='isEmail(desc)?"mailto:":""+desc' target="__blank">{{ desc.replace("https://","").replace("www.","") }}</a>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h4 {
		letter-spacing: 3px;
		text-transform: uppercase;
		font-weight: 600;
		margin-top: 35px;
		margin-bottom: 7px;
	}
	p,a {
		letter-spacing: 0.5px;
		word-spacing: 0px;
		word-break: keep-all ;
		margin-left: 5px
	}
</style>
