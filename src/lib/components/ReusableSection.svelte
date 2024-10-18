<script lang="ts">
    export let id: string = '';
	export let contentClass: string = '';
	export let bgImage: string = ''; 
	export let bgColor: string = '';
	export let rows: string = '';
    export let additionalSlot: boolean = false;

	let backgroundStyle = bgImage ? `bg-[url('${bgImage}')] bg-cover bg-center` : `${bgColor}`;
</script>

<section
	{id}
	class={`grid grid-cols-[1fr_minmax(clamp(1rem,6vw,3rem),80ch)_1fr] gap-x-[clamp(1rem,6vw,3rem)] w-full h-[95vh] min-h-[800px] ${backgroundStyle}`}
    style={`grid-template-rows: ${rows};`}
>
	<div class="row-start-1 row-span-1 col-span-1 col-start-2 min-h-full {contentClass}">
		<slot />
	</div>
	{#if additionalSlot}
		<div class="col-span-3 row-span-1 row-start-2">
			<slot name="additionalSlot" />
		</div>
	{/if}
</section>
