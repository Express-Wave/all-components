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
	class="content h-[100vh] flex flex-col items-center justify-center scroll-snap-start bg-[url('https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/ebc_hero-img_FfmkTZ5oY.png?updatedAt=1725141140840')] bg-cover bg-center"
>
	<!-- DIV TO CONTAIN THE MAX WIDTH OF ALL ELEMENTS -->
	<div class="flex flex-col justify-center flex-grow max-w-[875px] w-full">
		<h1 class="text-mono-50 font-semibold text-left text-7xl mt-16 pb-8 pl-4">
			Helping Others <br />
			<!-- <a type="button" href="/find-jesus" class="hover:text-transparent bg-clip-text bg-gradient-to-tr to-cyan-500 from-blue-600 hover:underline hover:decoration-6">Find</a> -->
			<a
				type="button"
				href="/find-jesus"
				class="relative text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-blue-600 hover:to-cyan-500
			hover:font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[8px] after:bg-gradient-to-tr after:from-blue-600 after:to-cyan-500 after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:translate-y-1"
			>
				Find
			</a>

			<span class="font-sans font-[700]">&</span>
			<!-- <a type="button" href="/follow-jesus" class="hover:underline hover:text-transparent bg-clip-text bg-gradient-to-tr to-blue-500 from-theme">Follow</a> -->
			<a
				type="button"
				href="/follow-jesus"
				class="relative text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-theme hover:to-blue-500
			hover:font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[8px] after:bg-gradient-to-tr after:from-theme after:to-blue-500 after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:translate-y-1"
			>
				Follow
			</a>

			Jesus
		</h1>
		<div class="mt-6 space-x-4 pl-4">
			<button
				type="button"
				class="text-black bg-[#7CD0FF] hover:bg-theme hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-full text-xl px-5 py-2.5 text-center me-2 min-w-[275px] h-16 text-transparent mix-blend-screen"
				>Plan Your Visit</button
			>
			<button
				type="button"
				class="py-2.5 px-5 me-2 mb-2 text-xl font-semibold text-mono-100 focus:outline-none backdrop-blur-sm rounded-full border border-mono-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 min-w-[275px] h-16"
			>
				<a href="#discover">Learn More</a></button
			>
		</div>
	</div>
	<div class="flex justify-center items-center h-16 w-full bg-[#195285]">
		<div class="flex justify-center items-center max-w-[875px] w-full text-white text-lg">
			<div class="flex justify-center items-center flex-grow space-x-8">
				<Address />
				<Phone />
				<Email />
			</div>
			<Facebook />
		</div>
	</div>
</section>

<style>
	h1 {
		font-family: 'outfit', sans-serif;
	}
</style>
