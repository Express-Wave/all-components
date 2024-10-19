<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import Navbar from './Navbar.svelte';

	export let styling: string = '';

	let mainWidth: string = 'grid col-span-3 col-start-1 row-span-1 row-start-1';
</script>

<header
	class="{styling} absolute grid custom-grid-cols gap-x-clamp grid-rows-[1fr_auto] col-span-3 col-start-1 row-span-2 row-start-1 top-0 z-10 w-full h-20 md:h-18 backdrop-blur-sm"
>
	<Banner bannerText="Register today for the 2024 Beacon Ladies Retreat" styling={mainWidth} />
	<Navbar />
</header>
