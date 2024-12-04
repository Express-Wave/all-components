<script lang="ts">
	import { AccordionItem, Accordion } from 'flowbite-svelte';

	// FORMSUBMIT, NUCLEUS GIVING, WEB3FORMS,
	// ASTRO: https://preview.tailus.io/astrolus-free/

	const ACCESS_KEY: string = 'c585df36-f878-451f-918b-dc23e8941a76';
</script>

<div id="main" class="flex flex-col justify-center mt-0 grow min-h-80">
	<section
		class="data-[size=md]:scale-[0.8] data-[size=sm]:scale-75 w-screen relative z-10 ease-in-out flex transition-all duration-700 will-change-auto items-center flex-col space-y-40"
	>
		<div class="relative flex-col items-center max-w-8xl" id="home">
			<!-- GRADIENTS -->
			<div aria-hidden="true" class="grid absolute inset-0 grid-cols-2 -space-x-52 opacity-40">
				<div class="blur-[106px] h-56 bg-gradient-to-br from-theme-800 to-purple-400"></div>
				<div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
			</div>
			<!-- HERO SECTION -->
			<div class="flex-col items-center px-6 mx-auto w-full max-w-7xl md:px-12 xl:px-6">
				<div class="relative flex-col items-center pt-36 ml-auto">
					<div class="flex-col items-center mx-auto w-full text-center md:w-1/2 lg:w-2/3">
						<h1 class="text-5xl font-bold text-gray-900 md:text-6xl xl:text-7xl">
							<div class="m-auto mt-6 space-y-6 md:w-8/12 lg:w-full">
								<h1 class="text-4xl font-black md:text-5xl">Plan Your Visit</h1>
							</div>
						</h1>

						<h3 class="mt-8 text-lg text-gray-700">
							Welcome! Our desire is that your visit to our church should be spiritually refreshing
							and stress-free. To that end, we've created this page with answers to frequently asked
							questions. If you son't see your question here: feel free to ask using the <a
								href="/plan-your-visit#contact"
								class="underline">form below!</a
							>
						</h3>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
