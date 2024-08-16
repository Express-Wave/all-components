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
	class="text-white bg-[var(--clr-theme-color)] hover:bg-neutral-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-12 py-2.5 me-2 ml-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
	>Save</button
>
