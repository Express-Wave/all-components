<script lang="ts">
	import { getContext } from 'svelte';
	import '../global.css';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import DiscoverSection from '$lib/components/DiscoverSection.svelte';

	export const prerender = true;
	export const trailingSlash = 'always';
	
	const numberOfColumns: string = getContext('columnWidth');
</script>

<HeroSection />
<DiscoverSection />
<section id="two" class="h-[800px] bg-slate-800">
	<!-- <h2>Section 2, ya'll</h2> -->
</section>
