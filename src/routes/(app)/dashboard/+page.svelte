<script lang="ts">
	const options: string[] = ['forms', 'users'];
</script>

<ul class="space-y-4 max-w-2xl">
	{#each options as option}
		<li>
			<a href={`/${option}`}>
				<div
					class="relative capitalize overflow-x-auto border backdrop-blur-sm p-4 rounded-lg hover:border-theme"
				>
					{option}
				</div>
			</a>
		</li>
	{/each}
</ul>
