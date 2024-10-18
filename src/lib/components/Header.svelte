<!-- <script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import Navbar from './Navbar.svelte';

	export let styling: string = '';

	let fullWidth: string = 'col-span-3 col-start-1 row-start-1 flex flex-col justify-center items-center';
	let mainWidth: string = 'col-span-1 col-start-2 row-span-1 row-start-1'
</script>

<header
	class={`${styling} absolute top-0 z-10 w-full backdrop-blur-sm text-mono-100 h-[fit-content] min-h-[4rem] max-h-[8rem] grid grid-cols-[1fr_minmax(0,80ch)_1fr] gap-x-[clamp(1rem,6vw,3rem)] grid-rows-[1fr_auto] col-span-3 col-start-1 row-span-1 row-start-1 bg-transparent`}
>
	<div
		class={fullWidth}
	>
		<Banner bannerText="Register for the 2024 Ladies Retreat!" styling={mainWidth} />
		<Navbar styling={mainWidth}/>
	</div>
</header> -->

<script lang="ts">
	import { getContext } from 'svelte';
	import Banner from '$lib/components/Banner.svelte';
	import Navbar from './Navbar.svelte';

	export let styling: string = '';

	let fullWidth: string =
		'col-span-3 col-start-1 row-start-1 flex flex-col justify-center items-center';
	let mainWidth: string = 'col-span-1 col-start-2 row-span-1 row-start-1';

</script>

<!-- <header
	class={`${styling} absolute top-0 z-10 w-full backdrop-blur-sm text-mono-100 h-[fit-content] min-h-[4rem] max-h-[8rem] grid grid-rows-[1fr_auto] col-span-3 col-start-1 row-span-1 row-start-1 bg-transparent`}
>
	<div
		class={fullWidth}
	>
		<Banner bannerText="Register for the 2024 Ladies Retreat!" styling={mainWidth} />
		<Navbar styling={mainWidth}/>
	</div>
</header> -->

<header
	class={`${styling} absolute grid custom-grid-cols gap-x-clamp grid-rows-[1fr_auto] col-span-3 col-start-1 row-span-1 top-0 z-10 w-full h-16 backdrop-blur-sm text-mono-100 bg-slate-500`}
>
	<div
		id="hero-info"
		class="col-span-1 col-start-2 row-span-1 row-start-1 w-full h-full min-h-full border-4 border-green-600"
	>
		<p>Header Here</p>
	</div>
</header>
