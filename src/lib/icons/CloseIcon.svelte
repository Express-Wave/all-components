<script lang="ts">
    import { animationDuration } from '$lib/stores/animation.store';
    import { onDestroy } from 'svelte';

    let duration: number;

    // Subscribe to the animationDuration store
    const unsubscribe = animationDuration.subscribe(value => {
        duration = Math.max(value - 200, 100); // Ensure duration doesn't go below 100ms
    });

    // Clean up subscription on component destroy
    onDestroy(() => {
        unsubscribe();
    });
</script>

<svg class="text-red" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
        <path d="M5 5L12 5L19 5">
            <animate
                fill="freeze"
                attributeName="d"
                dur={`${duration}ms`}
                values="M5 5L12 5L19 5;M5 5L12 12L19 5"
            />
        </path>
        <path d="M5 12H19">
            <animate fill="freeze" attributeName="d" dur={`${duration}ms`} values="M5 12H19;M12 12H12" />
        </path>
        <path d="M5 19L12 19L19 19">
            <animate
                fill="freeze"
                attributeName="d"
                dur={`${duration}ms`}
                values="M5 19L12 19L19 19;M5 19L12 12L19 19"
            />
        </path>
    </g>
</svg>
