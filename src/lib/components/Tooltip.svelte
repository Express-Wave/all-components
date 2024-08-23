<script lang="ts">
	export let text: string; // The text to display in the tooltip
</script>

<div class="tooltip-container ml-2">
	<slot></slot>
	<span
		class="w-[300px] tooltip-text py-4 px-3 rounded-lg leading-5 bg-neutral-800 text-white text-center absolute"
	>
		{text}</span
	>
</div>

<style>
	.tooltip-container {
		position: relative;
		display: inline-block;
		cursor: pointer;
	}

	.tooltip-container .tooltip-text {
		visibility: hidden;
		z-index: 1;
		top: 50%; /* Align vertically with the SVG icon */
		left: 175%; /* Position to the right of the icon */
		transform: translateY(-50%);
		opacity: 0;
		transition: opacity 0.3s;
		z-index: 99;
	}

	.tooltip-container .tooltip-text::after {
		content: '';
		position: absolute;
		top: 50%; /* Center arrow vertically */
		right: 100%; /* Position arrow to the left of the tooltip */
		margin-top: -5px; /* Offset to align the center of the arrow */
		border-width: 5px;
		border-style: solid;
		border-color: transparent #555 transparent transparent; /* Arrow pointing left */
		z-index: 99;
	}

	.tooltip-container:hover .tooltip-text {
		visibility: visible;
		opacity: 1;
		z-index: 99;
	}
</style>
