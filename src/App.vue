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
			// console.log(this.axios);
		},
	};
</script>

<template>
	<header>
		<h1 style="margin-top: 0">Fantino Davide</h1>
		<h2>Software Developer</h2>
	</header>
	<div id="main">
		<aside>
			<Section title="info">
				<SectionDesc title="address" desc="Viale Vittorio Veneto 13, 12061 Carr&uacute; (CN), Piedmont, Italy" />
				<SectionDesc title="phone" desc="+39 3914639240" />
				<SectionDesc title="email" desc="fantinodavide02@gmail.com" />
				<SectionDesc title="pec" desc="fantinodavide@pec.it" />
				<SectionDesc title="github" desc="https://github.com/fantinodavide" />
				<SectionDesc title="linkedin" desc="https://www.linkedin.com/in/fantino-davide" />
				<SectionDesc title="curriculum vitae" desc="https://cv.fantinodavide.it" />
				<SectionDesc title="birthday" desc="28 Jan 2002" />
			</Section>

			<Section title="education">
				<SectionDesc title='Higher Education Institute "G. Vallauri" Fossano CN' desc="Informatics and Telecommunications - Specialization: Informatics" footer="2016-2021" />
			</Section>

			<Section title="skills">
				<SectionDesc title="programming Languages" desc="Node.js, JavaScript, TypeScript, HTML, CSS, Bash, C, C#, C++, Python, PHP" array />
				<SectionDesc title="Frameworks" desc="NestJS, Vue.js, Angular, JQuery, Express.js, Prisma ORM, Crypto, Argon2, Puppeteer, Axios, Discord.js, Webpack" array />
				<SectionDesc title="cloud" desc="Amazon Web Services,IBM Cloud" array />
				<!-- <SectionDesc title="other" desc="C, C#, C++, Python" array /> -->
				<SectionDesc title="Databases" desc="MongoDB, MySQL,SQLite,MariaDB" array />
				<SectionDesc title="softwares" desc="Jira,Postman,Proxmox,Docker,Nginx,Wireshark,TrueNAS,ZFS,RAID,FTP,Fusion 360,CPanel,WHMCS,Bitwarden,Termius" array />
			</Section>

			<Section title="expertise">
				<SectionDesc title="years of experience" desc="Node.JS=4,Vue.JS=2,JavaScript=6,TypeScript=2,Bash=3,HTML CSS=6,AWS=1" array range showValue />
				<SectionDesc title="Operating Systems" desc="Linux=5,Windows=5,MacOS=2" array range />
			</Section>

			<Section title="personality">
				<SectionDesc desc="Relationing=4,Strategy=5,Communication=3.5,dedication=5,design=4" array range />
			</Section>

			<Section title="languages">
				<SectionDesc desc="English=3.5,Italian=5,French=1" array range />
			</Section>

			<Section title="patents">
				<SectionDesc title="Authorization for defibrillation with Automatic External Defibrillator" subt="July 2021" />
				<SectionDesc title="Driving License" desc="A1,B" array />
			</Section>
		</aside>
		<div id="rightSide">
			<Section title="about myself">
				<SectionDesc
					desc="I'm an IT Specialist committed to implementing the latest technologies to enhance project outcomes and user experience. Skilled in a diverse set of programming languages, my current focus is on NodeJS, Vue.JS, TypeScript, and JavaScript. I'm actively expanding my network security skills, specifically in sampling and analyzing DDoS attacks. I developed a custom-built script for continuous network traffic monitoring and leverage Wireshark for in-depth data analysis."
				/>
			</Section>

			<Section title="experience">
				<SectionDesc title="Sellup" subt="Software Developer" desc="https://sellup.cloud" date="Apr 2023 - Current">
					<p>Architected and developed full-stack software solutions utilizing REST APIs, data modeling, and frontend interfaces.</p>
					<p>
						<tag
							v-for="c of ['NestJS', 'TypeScript', 'JavaScript', 'Vue.js', 'Angular', 'SQL', 'MongoDB', 'Docker', 'AWS', 'Stripe', 'Express.js', 'Prisma ORM', 'Jira', 'Swagger']"
							:key="c"
							:value="c"
							skew
						/>
					</p>
				</SectionDesc>
				<SectionDesc title="Sellup" subt="Backend Developer Intern" desc="https://sellup.cloud" date="Nov 2022 - Apr 2023">
					<p>REST APIs, backend-to-backend proxy and data model development. API and code documentation.</p>
					<p>
						<tag v-for="c of ['NestJS', 'TypeScript', 'JavaScript', 'SQL', 'Docker', 'AWS', 'Stripe', 'Express.js', 'Prisma ORM', 'Jira', 'Swagger']" :key="c" :value="c" skew />
					</p>
				</SectionDesc>
				<SectionDesc title="Manfrinato Gioielli" subt="Full Stack Web Developer" desc="https://manfrinatogioielli.it" date="Jul 2019 - Dec 2021">
					<p>Development of management website and public website e-commerce.</p>
					<p>
						<tag v-for="c of ['HTML', 'CSS', 'JavaScript']" :value="c" :key="c" skew />
						<tag v-for="c of ['PHP', 'SQL']" :value="c" :key="c" skew />
					</p>
				</SectionDesc>
				<!-- <SectionDesc title="Greenspace E-mobility" subt="Full Stack Web Developer" date="Jul 2021 - Sep 2021">
					<p>Development of the first version and no more active management website and public website.</p>
					<p>Configuration of a VPS for website hosting and database hosting.</p>
					<p>
						<tag v-for="c of ['HTML', 'CSS', 'JavaScript']" :value="c" :key="c" skew />
						<tag v-for="c of ['PHP', 'SQL', 'Bash']" :value="c" :key="c" skew />
					</p>
				</SectionDesc> -->
				<SectionDesc title="Olos Massaggi e Formazione Ayurvedica" subt="Full Stack Web Developer" desc="https://olostrattamentiolistici.eu" date="jan 2017 - Jun 2019">
					<p>Development of management website and public website.</p>
					<p>Configuration of a VPS for website hosting</p>
					<p>
						<tag v-for="c of ['HTML', 'CSS', 'JavaScript']" :value="c" :key="c" skew />
						<tag v-for="c of ['PHP', 'Bash']" :value="c" :key="c" skew />
					</p>
				</SectionDesc>
				<SectionDesc title="Calzolaio Maurizio Calignano" subt="Frontend Developer" desc="https://www.calzolaiomaurizio.it" date="Jun 2016 - Oct 2017">
					<p>Development of the public website.</p>
					<p>
						<tag v-for="c of ['HTML', 'CSS', 'JavaScript']" :value="c" :key="c" skew />
					</p>
				</SectionDesc>
			</Section>

			<Section title="projects">
				<SectionDesc title="Squad-Log-To-Graph" desc="https://github.com/fantinodavide/Squad-Log-To-Graph" date="May 2023">
					<span
						>Initially developed as a standalone tool for Squad server log analysis, this application provides server statistics, cheat reports, and graph generation. An upcoming update
						will introduce a SquadJS plugin and a static web page, both currently in closed testing. The project also features a custom Discord client to integrate the latest Discord
						functionalities. The SquadJS plugin is made user-friendly through Webpack bundling.</span
					>
				</SectionDesc>
				<SectionDesc title="PSG-Hosting" desc="https://psg-hosting.com" date="Feb 2023">
					<span
						>Ascended quickly to a critical technical role, becoming the highest-ranked individual after the company owners. Engineered NetDump, a script that monitors and intelligently
						dumps network traffic, triggering Discord notifications for unauthorized or malicious activity. Tasked with the comprehensive management of dedicated servers, hosting various
						game server instances. Routinely interface with datacenter and hosting providers to ensure operational excellence. Leading the initiative for the company's expansion into
						European markets.</span
					>
				</SectionDesc>
				<SectionDesc title="Whitelister" desc="https://github.com/fantinodavide/Squad_Whitelister" date="Apr 2022">
					<span
						>Built with Node.js, Vue.js, and MongoDB, supports game server integrations. The Whitelister tool offers a new way to manage user permissions. Gained traction in the gaming
						community, used by many since its beta release on 09 Jun 2022. Demo site: <a href="https://sqwl.fantinodavide.it/">sqwl.fantinodavide.it</a> (Username: demoadmin, Password:
						demo). Contact for support or project updates via Discord: <a href="https://discord.com/invite/5hfcjNYdCP">discord.com/invite/5hfcjNYdCP</a>.</span
					>
				</SectionDesc>
				<SectionDesc title="DCS Mission Booking" desc="https://github.com/fantinodavide/DCS_MissionBooking" date="Feb 2022">
					<span aria-hidden="true"
						>Developed a tool for efficient mission management in the Digital Combat Simulator. The application parses LUA mission files to generate booking tables. It integrates with a
						community forum database for user authentication and employs MongoDB for data storage. Focused on security, using Argon2 for password encryption. Designed to minimize community
						leader workload, the tool features automated OTA updates from its GitHub repository.</span
					>
				</SectionDesc>
				<SectionDesc title="DogTracker" desc="https://github.com/fantinodavide/DogTracker" date="Aug 2020 - jan 2021">
					<span aria-hidden="true"
						>A project born to help locating a blind dog in a wide-open area.<br />The main steps have been the hardware choice, the designing and 3D printing of the protective shell, the
						firmwares development, and the android app development and publishment on the Play Store.<br />A close collaboration with veterinary experts has been extremely important to
						reduce the sources of disorientation for the blind dog.<br />The system is based on two ESP32 868Mhz devices with a custom-developed firmware. Radio transmissions are based on
						a custom protocol that offers error detection and message acknowledgment.</span
					>
				</SectionDesc>
				<SectionDesc title="Home Server" date="Apr 2021">
					<p>
						Hardware and Software configuration of the enterprise server HP ProLiant DL380 G7.<br />Set up with the hypervisor Proxmox and configured to work as a NAS, Reverse Proxy and
						Host for many projects.<br />The kerner of the hypervisor has been patched to unlock the IT HBA mode of the hardware RAID controller HP P410i to take advantage of the software
						ZFS RAID.
					</p>
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
			<Section title="privacy">
				<SectionDesc
					subt=""
					desc="I authorize the processing of my personal data pursuant to Legislative Decree 101/2018 and art. 13 GDPR (EU Regulation 2016/679) for the purposes of personnel research and selection"
				/>
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
		margin: 60px;
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
			margin: 0px;
		}
		h2 {
			break-before: all;
			page-break-before: all;
			-webkit-column-break-before: all;
		}
		#print {
			display: none;
		}

		#expertise {
			margin-top: 160px;
		}

		#skills {
			margin-top: 12px;
			margin-bottom: 0px;
		}
		#skills div h4 {
			margin-top: 27px;
		}

		/* #personality {
			margin-top: 0px;
		}
		#personality h2 {
			margin-top: 0px;
		} */

		#experience {
			margin-top: 0px;
			/* margin-bottom: 0px; */
		}
		#experience h2 {
			margin-top: 0px;
			margin-bottom: 0px;
		}
		#experience h4 {
			margin-top: 25px;
			margin-bottom: 0px;
		}
		#projects {
			margin-top: 0px;
			/* margin-bottom: 0px; */
		}
		#projects h2 {
			margin-top: 0px;
			/* margin-bottom: 0px; */
		}
		#projects h4 {
			margin-top: 25px;
		}
		#projects #homeserver {
			/* margin-top: 10px; */
		}
		#projects #homeserver h4 {
			/* margin-top: 0px; */
		}
		#certifications {
			margin-top: 0px;
		}
		#certifications h2 {
			margin-top: 0px;
		}
		#certifications h4 {
			margin-top: 30px;
		}
		#patents h2 {
			/* margin-top: 0; */
			/* margin-bottom: 0; */
		}
		#personality h2 {
			margin-top: 30px;
		}
		#languages h2 {
			margin-top: 30px;
		}
		#privacy {
			margin-top: 290px;
			margin-bottom: 10px;
		}
		#patents {
			margin-bottom: 0;
		}
		aside {
			padding-bottom: 140px;
			min-height: 0;
		}
		#rightSide {
			padding-bottom: 45px;
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

	.desc p {
		margin-bottom: 5px;
	}
</style>
