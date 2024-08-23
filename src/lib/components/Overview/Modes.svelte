<script lang="ts">
	import Tooltip from '$lib/components/Tooltip.svelte';
	let selectedMode: ModeType[] = [];

	const modeOptions = [
		'Fixed Route',
		'Dial-A-Ride',
		'Light Rail',
		'Street Car',
		'Vanpool',
		'Microtransit'
	] as const;

	type ModeType = (typeof modeOptions)[number];

	const modes: Record<ModeType, string> = {
		'Fixed Route': 'Buses operate on a predetermined route according to a fixed schedule.',
		'Dial-A-Ride':
			'Demand Response Service - Shared-use transit service operating in response to calls from passengers or their agents to the transit operator, who schedules a vehicle to pick up the passengers to transport them to their destinations.',
		'Light Rail': 'Electrically powered urban railway system.',
		'Street Car': 'A smaller scale urban railway service operating primarily on streets.',
		Vanpool: 'A service where a group of passengers share a ride to a common destination in a van.',
		Microtransit:
			'A flexible transportation service that uses shuttles or vans on non-fixed routes.'
	};

	// Convert modes to a tuple to ensure type safety
	const modeEntries = Object.entries(modes) as [ModeType, string][];

	function getTooltipText(mode: ModeType): string {
		return modes[mode];
	}
</script>

<div class="relative overflow-none border rounded-lg backdrop-blur-sm shadow-none">
	<table class="w-full text-sm text-gray-500 border border-spacing-0">
		<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th scope="col" colspan="2" class="px-6 py-4 border-b dark:border-gray-700">
					<h2 class="text-lg text-left capitalize">Operating Modes</h2>
				</th>
			</tr>
		</thead>
		<tbody>
			{#each Object.keys(modes) as mode}
				<tr
					class="border dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="py-6 px-3 text-gray-900 dark:text-white">
						<label class="flex items-center ml-4 text-md">
							<input type="checkbox" name="mode" value={mode} class="mr-2 h-4 w-4" />
							<span class="text-md ml-2">{mode}</span>
							<Tooltip text={getTooltipText(mode)}>
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
								</Tooltip
							>
						</label>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
