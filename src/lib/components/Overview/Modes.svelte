<!-- <script>
	let selectedMode = '';
	const modes = [
		'Fixed Route',
		'Dial-A-Ride',
		'Light Rail',
		'Street Car',
		'Vanpool',
		'Microtransit'
	];
</script>

<div class="relative overflow-x-auto border rounded-lg backdrop-blur-sm shadow-none">
	<table class="w-full text-sm text-gray-500 border border-spacing-0">
		<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th scope="col" colspan="2" class="px-6 py-4 border-b dark:border-gray-700">
					<h2 class="text-lg text-left capitalize">Operating Modes</h2>
				</th>
			</tr>
		</thead>
		<tbody>
			{#each modes as mode}
				<tr
					class="border dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="py-6 px-3 text-gray-900 dark:text-white">
						<label class="flex items-center ml-4 text-md">
							<input
								type="checkbox"
								name="mode"
								bind:group={selectedMode}
								value={mode}
								class="mr-2 h-4 w-4"
							/>
							<span class="text-md ml-2">{mode}</span>
							<div
								class="relative flex items-center ml-1"
								data-state="closed"
								type="button"
								aria-haspopup="dialog"
								aria-expanded="false"
								aria-controls="radix-:R79kd9m:"
							>
								<button
									data-size="tiny"
									type="button"
									id="help-popover-button"
									class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground hover:bg-surface-300 shadow-none focus-visible:outline-border-strong data-[state=open]:bg-surface-300 data-[state=open]:outline-border-strong border-transparent text-xs py-1 h-[26px] px-1"
									><div class="[&amp;_svg]:h-[14px] [&amp;_svg]:w-[14px] text-foreground-muted">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="sbui-icon text-foreground-light"
											><circle cx="12" cy="12" r="10"></circle><path
												d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
											></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg
										>
									</div>
								</button>
							</div>
						</label>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	table {
		border-collapse: collapse;
	}
</style> -->

<script lang="ts">
	let tooltipText: string = 'Default Tooltip'; // Default tooltip text
	let showTooltip: boolean = false;

	let selectedMode: string = '';

	const modes: string[] = [
		'Fixed Route',
		'Dial-A-Ride',
		'Light Rail',
		'Street Car',
		'Vanpool',
		'Microtransit'
	];

	function handleMouseEnter(mode: string): void {
		tooltipText = `Information about ${mode}`; // Update tooltip text dynamically
		showTooltip = true;
	}

	function handleMouseLeave(): void {
		showTooltip = false;
	}
</script>

<div class="relative overflow-x-auto border rounded-lg backdrop-blur-sm shadow-none">
	<table class="w-full text-sm text-gray-500 border border-spacing-0">
		<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th scope="col" colspan="2" class="px-6 py-4 border-b dark:border-gray-700">
					<h2 class="text-lg text-left capitalize">Operating Modes</h2>
				</th>
			</tr>
		</thead>
		<tbody>
			{#each modes as mode}
				<tr
					class="border dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="py-6 px-3 text-gray-900 dark:text-white">
						<label class="flex items-center ml-4 text-md">
							<input
								type="checkbox"
								name="mode"
								bind:group={selectedMode}
								value={mode}
								class="mr-2 h-4 w-4"
							/>
							<span class="text-md ml-2">{mode}</span>
						
								<button
									data-tooltip-target="tooltip-right" 
									data-tooltip-placement="right"
									data-size="tiny"
									type="button"
									id="help-popover-button"
									class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground hover:bg-surface-300 shadow-none focus-visible:outline-border-strong data-[state=open]:bg-surface-300 data-[state=open]:outline-border-strong border-transparent text-xs py-1 h-[26px] px-1"
								>
									<div class="[&amp;_svg]:h-[14px] [&amp;_svg]:w-[14px] text-foreground-muted">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="sbui-icon text-foreground-light"
										>
											<circle cx="12" cy="12" r="10"></circle>
											<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
											<line x1="12" y1="17" x2="12.01" y2="17"></line>
										</svg>
									</div>
								</button>
								<div id="tooltip-right" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
									{tooltipText}
									<div class="tooltip-arrow" data-popper-arrow></div>
								</div>
							
						</label>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.tooltip {
		transition: opacity 0.2s ease-in-out;
	}

	.tooltip-arrow {
		border-width: 6px;
		border-color: transparent;
		border-top-color: #4b5563;
		position: absolute;
		bottom: -12px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
