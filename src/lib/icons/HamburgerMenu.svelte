<script lang="ts">
	export let size: number | 10;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	fill="none"
    class={`h-${size} w-${size} p-2`}
><g
		fill="none"
		stroke="currentColor"
		stroke-dasharray="16"
		stroke-dashoffset="16"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		><path d="M5 5h14"
			><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0" /></path
		><path d="M5 12h14"
			><animate
				fill="freeze"
				attributeName="stroke-dashoffset"
				begin="0.2s"
				dur="0.2s"
				values="16;0"
			/></path
		><path d="M5 19h14"
			><animate
				fill="freeze"
				attributeName="stroke-dashoffset"
				begin="0.4s"
				dur="0.2s"
				values="16;0"
			/></path
		></g
	></svg
>
