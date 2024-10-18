<script lang="ts">
	import '../global.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let fullWidthLayout: string = 'col-span-3 col-start-1';
</script>

<div class="row-start-1 grid grid-cols-custom grid-rows-[auto 1fr auto] min-h-screen">
	<Header styling="${fullWidthLayout} row-start-1 flex flex-col justify-center items-center" />
	<main class="${fullWidthLayout} row-span-2">
		<slot />
	</main>
	<Footer styling="${fullWidthLayout} row-start-3 text-white bg-theme-200" />
</div>
