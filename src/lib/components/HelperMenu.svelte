<script lang="ts">
	import { page } from '$app/stores';

	$: lastPathSegment = $page.url.pathname.split('/').filter(Boolean).pop();
</script>

<aside id="helper-menu" class="flex flex-col space-y-4 space-x-6 w-full">
	<h3 class="text-xl px-6">{lastPathSegment} Section</h3>
	<span>Here's some Menu stuff!</span>
</aside>
