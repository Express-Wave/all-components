<script>
	import Contractor from '$lib/components/Overview/Contractor.svelte';
	import Hours from '$lib/components/Overview/Hours.svelte';
	import Modes from '$lib/components/Overview/Modes.svelte';
	import TransitInfo from '$lib/components/Overview/TransitInfo.svelte';
</script>

<br />
<TransitInfo />
<br />
<Modes />
<br />
<Hours />
<br />
<Contractor />
<br />
<button
	type="button"
	class="text-white bg-theme hover:bg-neutral-800 focus:ring-4 focus:ring-theme-300 font-semibold rounded-lg text-sm px-12 py-2.5 me-2 ml-2 mb-2 dark:hover:bg-theme-700 focus:outline-none dark:focus:ring-theme-800"
	>Save</button
>
