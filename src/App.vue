<script setup lang="ts">
	import Section from './components/section.vue';
	import SectionDesc from './components/section-desc.vue';
	import tag from './components/tag.vue';
	import PageBreak from './components/pagebreak.vue';
</script>
<script lang="ts">
	export default {
		name: 'App',
		data() {
			return {
				dark2: '',
			};
		},
		methods: {
			print: function () {
				window.print();
			},
		},
		created() {
			console.log(this.axios);
		},
	};
</script>

<template>
	<header>
		<h1 style="margin-top: 0">Fantino Davide</h1>
		<h2>Full Stack Developer</h2>
	</header>
	<div id="main">
		<aside>
			<Section title="info">
				<SectionDesc title="address" desc="Viale Vittorio Veneto 13, 12061 Carr&uacute; (CN), Piedmont, Italy" />
				<SectionDesc title="phone" desc="+39 3914639240" />
				<SectionDesc title="email" desc="fantinodavide02@gmail.com" />
				<SectionDesc title="github" desc="https://github.com/fantinodavide" />
				<SectionDesc title="linkedin" desc="https://www.linkedin.com/in/fantino-davide" />
				<SectionDesc title="curriculum vitae" desc="https://cv.fantinodavide.it" />
				<SectionDesc title="birthday" desc="28 Jan 2002" />
			</Section>

			<Section title="education">
				<SectionDesc title='Higher Education Institute "G. Vallauri" Fossano CN' desc="Informatics and Telecommunications - Specialization: Informatics" footer="2016-2021" />
			</Section>

			<Section title="skills">
				<SectionDesc title="web client-side" desc="HTML, CSS, JavaScript, Vue.JS, Angular.JS, JQuery" array />
				<SectionDesc title="web server-side" desc="Node.JS, PHP" array />
				<SectionDesc title="other" desc="C, C#, C++, Python" array />
				<SectionDesc title="Databases" desc="MongoDB, MySQL,SQLite,MariaDB" array />
				<SectionDesc title="softwares" desc="Proxmox,Docker,Nginx,TrueNAS,ZFS,RAID,FileZilla, Fusion 360, IdeaMaker, SuperSlicer, Simplify3D, AutoCAD, PhotoShop" array />
				<SectionDesc title="Operating Systems" desc="Linux=5,Windows=5,MacOS=2" array range />
				<SectionDesc title="personality" desc="Relationing=4,Strategy=5,Communication=3.5,dedication=5,design=4" array range />
				<SectionDesc title="languages" desc="English=3.5,Italian=5,French=1" array range />
			</Section>

			<Section title="patents">
				<SectionDesc title="Authorization for defibrillation with Automatic External Defibrillator" subt="July 2021" />
				<SectionDesc title="Driving License" desc="A1,B" array />
			</Section>
		</aside>
		<div id="rightSide">
			<Section title="about myself">
				<SectionDesc desc="I'm a 20 years old italian IT specialist and student. During my student career I've been working on a variety of projects, which are mainly websites. I'm focusing my efforts to bring into my project the most up-to-date features and technologies as long as the higher simplicity. I've been learning and using C, C#, Python, HTML, CSS, JavaScript, PHP, NodeJS for years, followed by a short immersion in Angular.JS and lately I started to deepen and mastering Vue.JS. I am doing and I will do my best to keep offering the higher quality and performance in every aspect of the knowledge I put at your disposal." />
			</Section>

			<Section title="experience">
				<SectionDesc title="Manfrinato Gioielli" subt="Full Stack Web Developer" desc="https://manfrinatogioielli.it" date="Jul 2019 - Dec 2021">
					<p>Development of management website and public website e-commerce.</p>
					<p>
						<tag v-for="c of ['HTML', 'CSS', 'JavaScript']" :value="c" skew />
						<tag v-for="c of ['PHP', 'SQL']" :value="c" skew />
					</p>
				</SectionDesc>
				<SectionDesc title="Greenspace E-mobility" subt="Full Stack Web Developer" date="Jul 2021 - Sep 2021">
					<p>Development of the first version and no more active management website and public website.</p>
					<p>Configuration of a VPS for website hosting and database hosting.</p>
					<p>
						<tag v-for="c of ['HTML', 'CSS', 'JavaScript']" :value="c" skew />
						<tag v-for="c of ['PHP', 'SQL', 'Bash']" :value="c" skew />
					</p>
				</SectionDesc>
				<SectionDesc title="Olos Massaggi e Formazione Ayurvedica" subt="Full Stack Web Developer" desc="https://olostrattamentiolistici.eu" date="jan 2017 - Jun 2019">
					<p>Development of management website and public website.</p>
					<p>Configuration of a VPS for website hosting</p>
					<p>
						<tag v-for="c of ['HTML', 'CSS', 'JavaScript']" :value="c" skew />
						<tag v-for="c of ['PHP', 'Bash']" :value="c" skew />
					</p>
				</SectionDesc>
				<SectionDesc title="Calzolaio Maurizio Calignano" subt="Frontend Developer" desc="https://www.calzolaiomaurizio.it" date="Jun 2016 - Oct 2017">
					<p>Development of the public website.</p>
					<p>
						<tag v-for="c of ['HTML', 'CSS', 'JavaScript']" :value="c" skew />
					</p>
				</SectionDesc>
			</Section>

			<Section title="projects">
				<SectionDesc title="Whitelister" desc="https://github.com/fantinodavide/Squad_Whitelister" date="Apr 2022">
					<span>I started this project because of the constantly increasing demand of Vue.JS developers so that I could study it in its deepest aspects.<br />The project has sparked the interest in the communities of the games Squad, Post Scriptum and Beyond the Wire. It solves one of the most demanding problems of these games, the permission management of every user of the game servers.<br />With this tool the server admins can have more control while giving community leaders more freedom.<br />Server admins can invite the leaders of the partner communities to register to this tool and (if needed) set them as "managers" on the tool website to give clan permissions to users. Permission groups are created and given to the communities by server admins that can choose to require an approval when a community member is added to a group.<span class="white-space-pre"> </span><br />A demonstrative website is available at: <a href="https://sqwl.fantinodavide.it/">sqwl.fantinodavide.it</a> with the following admin credentials:<br />Username: demoadmin<br />Password: demo<br />To let people easily get in touch with me, to receive support or to follow the project development I have created the following Discord server: <a href="https://discord.com/invite/5hfcjNYdCP">discord.com/invite/5hfcjNYdCP</a></span>
				</SectionDesc>
				<SectionDesc title="DCS Mission Booking" desc="https://github.com/fantinodavide/DCS_MissionBooking" date="Feb 2022">
					<span aria-hidden="true">The project is born after the necessity of a better and quicker management of the people who intend to take part in a virtual mission through the flight simulator Digital Combat Simulator.<br />The tool parses missions files and generates the booking table.<br />User authentication and management is based on a database of the forum in which all the members of a community are registered to reduce users' accounts.<br />Booking tables and their settings (ex. date and time, restrictions) are managed and stored with MongoDB.<br />The security side of this project has been widely studied, especially at the time of password encryption and validation for which I've chosen to use Argon2.<br />The aim was to reduce the amount of work of the community leader. OTA updates have been one of the most important features, after a release is published on the GitHub repository page the tool automatically downloads and installs it.</span>
				</SectionDesc>
				<SectionDesc title="DogTracker" desc="https://github.com/fantinodavide/DogTracker" date="Aug 2020 - jan 2021">
					<span aria-hidden="true">Hardware choice.<br />Designing and 3D printing of the outer plastic shell.<br />Firmware development for two micro-controllers.<br />Android app development and publishment through the Play Store.<br />The project was born to help locating a blind dog in a wide-open area. Radio transmissions are almost absent not to disorient the dog that already has limited orientation ability.<br />The system is based on two ESP32 868Mhz devices with custom-developed firmware.<br />The "Base" device connects with the android application and communicates with the "Collar" device, it sends the virtual fence coordinates and stores the latest location of the "Collar".<br />The "Collar" device has a lighter firmware that gathers the GPS position, which is sent to the "Base" device, an alarm is triggered if the position is outside of the virtual fence.<br />Radio transmissions are based on a custom protocol that offers error detection and message acknowledgment.</span>
				</SectionDesc>
				<SectionDesc title="Home Server" date="Apr 2021">
					<p>Hardware and Software configuration of the enterprise server HP ProLiant DL380 G7.<br />Set up with the hypervisor Proxmox and configured to work as a NAS, Reverse Proxy and Host for many projects.<br />The kerner of the hypervisor has been patched to unlock the IT HBA mode of the hardware RAID controller HP P410i with an unofficial but working tool. With the capability of bypassing the hardware raid I have been able to create a software ZFS RAID trhough the TrueNas OS installed in a virtual machine.</p>
				</SectionDesc>
			</Section>

			<Section title="certifications">
				<SectionDesc title="Introduction to Web Development with HTML, CSS, JavaScript" desc="IBM" footer="Dec 2021" />
				<SectionDesc title="Introduction to Cloud Computing" desc="IBM" footer="Dec 2021" />
				<SectionDesc title="CCNAv7: Enterprise Networking, Security, and Automation" desc="Cisco Networking Academy" footer="Jun 2021" />
				<SectionDesc title="CCNAv7: Switching, Routing, and Wireless Essentials" desc="Cisco Networking Academy" footer="Jun 2021" />
				<SectionDesc title="Cambridge English Level 1 Certificate in ESOL International" desc="Cambridge University Press & Assessment" footer="Feb 2021" />
				<SectionDesc title="CCNA: Routing and Switching: Introduction to Networks" desc="Cisco Networking Academy" footer="May 2020" />
			</Section>
		</div>
	</div>
	<button id="print" @click="print">Print</button>
</template>

<style>
	:root {
		--dark: #2c3e50;
		--dark: #404650;
		--dark2: #707880;
		--lighter: #00000025;
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
		flex-direction: row;
		min-height: 100%;
	}
	#rightSide {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		padding: 50px;
		padding-top: 0;
		padding-right: 0;
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
		padding-bottom: 20px;
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
		font-weight: 600;
		letter-spacing: 3px;
		font-size: 50px;
		margin-bottom: 0;
	}
	header h2,
	header h3 {
		font-weight: 100;
	}
	aside {
		/* width: 200px; */
		width: min-content;
		min-height: 100%;
		/* flex-grow: 1; */
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
	aside div {
		display: flex;
		flex-wrap: wrap;
	}

	@media print {
		body {
			zoom: 80%;
			margin: 10px;
		}
		h2 {
			break-before: all;
			page-break-before: all;
			-webkit-column-break-before: all;
		}
		#print {
			display: none;
		}

		#skills {
			margin-top: 95px;
			margin-bottom: 5px;
		}

		#experience {
			margin-top: 0px;
			margin-bottom: 30px;
		}
		#projects {
			margin-top: 0px;
			margin-bottom: 0px;
		}
		#projects #homeserver{
			margin-top: 1px;
		}
		#certifications {
			margin-top: 0px;
		}
		#patents h2{
			margin-top: 0;
		}
		aside {
			padding-bottom: 945px;
		}
	}
	#education * {
		text-align: left;
	}
	@page {
		margin: 50px;
	}
	button {
		border: none;
		background: var(--dark);
		color: #ddd;
		border-radius: 5px;
		cursor: pointer;
		transition: all 100ms ease-in-out;
	}
	button:hover {
		opacity: 0.95;
	}
	#print {
		padding: 10px 20px;
	}
</style>
