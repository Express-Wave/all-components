<script lang="ts">
	import Address from '$lib/components/Address.component.svelte';
	import Phone from '$lib/components/Phone.component.svelte';
	import Email from '$lib/components/Email.component.svelte';
	import '../../app.css';
	import Facebook from '$lib/components/Facebook.components.svelte';
</script>

<!-- HERO SECTION OF THE SITE TAKES UP FULL VSISIBLE PAGE WIDTH -->
<section
	id="hero"
	class="content h-[100vh] flex flex-col items-center justify-center scroll-snap-start
	bg-[url('https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/ebc_hero-img_FfmkTZ5oY.png?updatedAt=1725141140840')]
	 bg-cover bg-center"
>
	<div class="absolute inset-0 bg-mono-300 bg-opacity-10"></div>
	<!-- DIV TO CONTAIN THE MAX WIDTH OF ALL ELEMENTS -->
	<div
		class="flex flex-col justify-center flex-grow max-w-[875px] w-full space-y-8 sm:w-[90%] z-10"
		style="padding-left: 1rem;"
	>
		<h1
			class="
			text-mono-50 font-outfitMedium font-bold text-left
			leading-tight z-
			mt-16 mb-8 md:mb-4
			text-[3.25rem] md:text-7xl
			whitespace-none sm:
			"
		>
			Helping Others <br />
			<a
				type="button"
				href="/find-jesus"
				class="hidden md:inline relative text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-blue-600 hover:to-cyan-500
  				after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[8px] after:bg-gradient-to-tr after:from-blue-600 after:to-cyan-500 after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:translate-y-1"
			>
				Find
			</a>

			<a
				type="button"
				href="/find-jesus"
				class="md:hidden text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-cyan-500"
			>
				Find
			</a>

			<span class="font-sans font-[700]">&</span>
			<a
				type="button"
				href="/follow-jesus"
				class="hidden md:inline relative text-white hover:text-transparent hover:bg-clip-text
				hover:bg-gradient-to-tr
				hover:from-theme-400 hover:to-blue-600
				after:content-['']
				after:absolute after:left-0 after:bottom-0 after:w-full after:h-[8px] after:bg-gradient-to-tr after:from-theme-400 after:to-blue-600 after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:translate-y-1
				"
			>
				Follow
			</a>
			<a
				type="button"
				href="/follow-jesus"
				class="md:hidden text-transparent bg-clip-text bg-gradient-to-tr from-theme-300 to-blue-500 font-bold"
			>
				Follow
			</a>
			<span class="">Jesus</span>
		</h1>
		<div
			class="flex flex-col space-y-4 items-start md:flex-row md:space-y-0 md:space-x-4 md:items-center mt-12 font-outfitMedium"
		>
			<button
				type="button"
				class="text-white rounded-full text-xl py-2.5 px-5 text-center me-2 w-[95%] md:max-w-[275px] h-16 bg-[dodgerblue] font-heading-medium  focus:outline-none focus:ring-4 focus:ring-blue-300 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-cyan-500 hover:text-white
				"
			>
				Plan Your Visit
			</button>
			<button
				type="button"
				class="text-white py-2.5 px-5 text-center me-2 text-xl text-mono-100 focus:outline-none backdrop-blur-sm rounded-full border border-mono-200 hover:bg-gray-100 hover:text-theme-900 focus:z-10 focus:ring-4 focus:ring-gray-100 w-[95%] md:max-w-[275px] h-16 transform transition-transform duration-300 ease-in-out hover:scale-105"
			>
				<a href="#discover">Learn More</a>
			</button>
		</div>
	</div>
	<!-- BOTTOM BANNER -->
	<div class="hidden md:flex justify-center items-center h-16 w-full bg-theme-600 text-white font-outfitMedium">
		<div class="flex justify-center items-center max-w-[875px] w-full text-lg">
			<div class="flex justify-center items-center flex-grow space-x-8">
				<Address />
				<Phone />
				<Email />
			</div>
			<Facebook />
		</div>
	</div>
</section>
