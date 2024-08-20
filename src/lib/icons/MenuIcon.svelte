<script lang="ts">
	import { animationDuration } from '$lib/stores/animation.store';
	import { onDestroy } from 'svelte';

	let duration: number;

	// Subscribe to the animationDuration store
	const unsubscribe = animationDuration.subscribe((value) => {
		duration = Math.max(value - 200, 100); // Ensure duration doesn't go below 100ms
	});

	// Clean up subscription on component destroy
	onDestroy(() => {
		unsubscribe();
	});
</script>

<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<g
		fill="none"
		stroke="#39c294"
		stroke-dasharray="24"
		stroke-dashoffset="24"
		stroke-linecap="round"
		stroke-width="2"
	>
		<path d="M5 5H19">
			<animate
				fill="freeze"
				attributeName="stroke-dashoffset"
				dur={`${duration}ms`}
				values="24;0"
			/>
		</path>
		<path d="M5 12H19">
			<animate
				fill="freeze"
				attributeName="stroke-dashoffset"
				begin="0.2s"
				dur={`${duration}ms`}
				values="24;0"
			/>
		</path>
		<path d="M5 19H19">
			<animate
				fill="freeze"
				attributeName="stroke-dashoffset"
				begin="0.4s"
				dur={`${duration}ms`}
				values="24;0"
			/>
		</path>
	</g>
</svg>
