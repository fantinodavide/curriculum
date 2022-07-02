<script setup lang="ts">
	import tag from './tag.vue';
	import rangeElm from './range.vue';
</script>
<script lang="ts">
	/* eslint-disable */
	export default {
		props: {
			title: String,
			desc: {
				required: false,
				type: String,
			},
			subt: {
				required: false,
				type: String,
			},
			footer: {
				required: false,
				type: String,
			},
			array: {
				default: false,
				required: false,
				type: Boolean,
			},
			range: {
				default: false,
				required: false,
				type: Boolean,
			},
			skiptitle: {
				default: false,
				required: false,
				type: Boolean,
			},
			date: {
				required: false,
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
		created() {
			// console.log(JSON.parse(JSON.stringify(this.$props)));
			console.log(this.$slots._);
		},
	};
</script>

<template>
	<div>
		<h4 v-if="!skiptitle">
			<span class="date" v-if="date">{{ date }}</span
			>{{ title }}
		</h4>
		<h5 v-show="subt">{{ subt }}</h5>

		<div class="desc" v-if="desc" :class="{ array: array }">
			<p v-if="!array && !isUrl(desc)">{{ desc.replace("\\n","<br />") }}</p>
			<a v-else-if="!array && isUrl(desc)" :href="isEmail(desc) ? 'mailto:' : '' + desc" target="__blank">{{ desc.replace('https://', '').replace('www.', '') }}</a>
			<div v-else-if="range">
				<rangeElm v-for="t of desc.split(',')" :title="t.trim().split('=')[0]" :value="parseFloat(t.trim().split('=')[1])" />
			</div>
			<div v-else>
				<tag skew v-for="t of desc.split(',')" :value="t.trim()" />
			</div>
		</div>
		<div v-if="$slots._" class="desc">
			<slot></slot>
		</div>

		<h5 v-if="footer">{{ footer }}</h5>
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h4 {
		letter-spacing: 1px;
		text-transform: uppercase;
		font-weight: 600;
		margin-top: 30px;
		margin-bottom: 7px;
		width: 100%;
		line-height: 25px;
	}
	p,
	a {
		letter-spacing: 0.5px;
		word-spacing: 0px;
		word-break: keep-all;
	}
	.desc {
		margin-left: 5px;
		text-align: justify;
	}
	h5:first-of-type {
		margin-top: 0;
	}
	h5 {
		margin-left: 5px !important;
		font-style: italic;
		/* font-weight: 600; */
		color: #787878;
	}

	.date {
		background: var(--dark);
		color: #ddd;
		padding: 2px 5px;
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
		overflow: hidden;
		margin-right: 15px;
	}
	.date::after {
		content: "";
		position: absolute;
		width: 16.5px;
		height: 16.5px;
		transform: rotate(45deg);
		top: 3.3px;
		right: -7px;
		background: var(--dark);
		z-index: -1;
		border-radius: 3px;
	}
</style>
