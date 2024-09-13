<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="scroll-container h-screen overflow-x-hidden overflow-y-auto lg:scroll-snap-y lg:scroll-snap-mandatory">
	<Header>
		<Navbar />
	</Header>
	<slot />
</div>

<style>
	:global(.scroll-container) {
		scroll-snap-type: y mandatory;
	}

	:global(.content) {
		scroll-snap-align: start;
	}
</style>
