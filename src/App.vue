<script setup lang="ts">
	import SectionTitle from './components/section-title.vue';
	import SectionDesc from './components/section-desc.vue';
</script>
<script lang="ts">
	export default {
		name: 'App',
	};
</script>

<template>
	<header>
		<h1 style="margin-top: 0">Fantino Davide</h1>
		<h3>Full Stack Developer</h3>
	</header>
	<div id="main">
		<aside>
			<SectionTitle title="info" />
			<SectionDesc title="address" desc="Viale Vittorio Veneto 13, 12061 Carr&uacute; (CN), Pedmont, Italy" />
			<SectionDesc title="phone" desc="+39 3914639240" />
			<SectionDesc title="email" desc="fantinodavide02@gmail.com" />
			<SectionDesc title="github" desc="https://github.com/fantinodavide/" />
			<SectionDesc title="linkedin" desc="https://www.linkedin.com/in/fantino-davide/" />

			<SectionTitle title="skills" />
			<SectionDesc title="web client-side" desc="HTML, CSS, JavaScript, Vue.JS, Angular.JS, JQuery" array="true" />
			<SectionDesc title="web server-side" desc="Node.JS, PHP" array="true" />
			<SectionDesc title="others" desc="C, C#, C++, Python" array="true" />
			<SectionDesc title="softwares" desc="Fusion 360, AutoCAD, PhotoShop, Word, PowerPoint, Excel" array="true" />
		</aside>
	</div>
</template>

<style>
	:root {
		--dark: #2c3e50;
		--lighter: #2c3e5040;
	}
	* {
		position: relative;
		margin: 0;
		padding: 0;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: var(--dark);
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}
	#main {
		min-height: 100%;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}
	html {
		min-height: 100vh;
	}
	body {
		min-height: 100%;
		/* min-width: 100vw; */
		margin: 75px;
		flex-grow: 1000;
	}
	html {
		display: flex;
	}
	header {
		display: flex;
		flex-direction: column;
		padding-bottom: 40px;
		border-bottom: 2px solid var(--lighter);
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: normal;
		margin: 10px 0px;
	}
	h1 {
		text-transform: uppercase;
		font-weight: 500;
		letter-spacing: 3px;
	}

	aside {
		/* width: 200px; */
		width: min-content;
		min-height: 100%;
		flex-grow: 1;
		border-right: 2px solid var(--lighter);
		display: flex;
		flex-direction: column;
		padding-right: 30px;
		padding-bottom: 50px;
	}

	a:link {
		color: var(--dark);
	}

	a:visited {
		color: var(--dark);
	}

	a:hover {
		color: #888;
	}

	a:active {
		color: var(--dark);
	}
	a {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	div {
		display: flex;
		flex-wrap: wrap;
	}

	@media print {
		body {
			zoom: 80%;
		}
	}
</style>
