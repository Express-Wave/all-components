<script lang="ts">
	import { page } from '$app/stores';

	// Initialize the type variable
	let type: 'urban' | 'rural' = 'urban'; // Default value

	// Reactive statement to update type based on the current pathname
	$: {
		const pathname = $page.url.pathname;
		if (pathname.includes('urban')) {
			type = 'urban';
		} else if (pathname.includes('rural')) {
			type = 'rural';
		} else {
			type = 'urban'; // Fallback or default value if neither is found
		}
	}

	// Reactive statement to get the last path segment
	$: lastPathSegment = $page.url.pathname.split('/').filter(Boolean).pop();
</script>

<aside id="helper-menu" class="flex flex-col space-y-4 space-x-6 w-full">
	<h3 class="capitalize text-xl px-6">
		About The
		<span class="ml-0 text-theme font-medium">{type} {lastPathSegment}</span>
		Section:
	</h3>
	<span>Section Details</span>
</aside>
