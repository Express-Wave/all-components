<script lang="ts">
	import '../../../app.css';
	import NumberInput from '../NumberInput.svelte';

	let runsSaturday: boolean = false;
	let runsSunday: boolean = false;

	function toggleSaturday(event: Event) {
		event.preventDefault();
		runsSaturday = !runsSaturday;
	}

	function toggleSunday(event: Event) {
		event.preventDefault();
		runsSunday = !runsSunday;
	}
</script>

<div class="relative overflow-x-auto border rounded-lg">
	<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
		<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th scope="col" class="px-6 py-4 border-b" colspan="5">
					<h3 class="text-lg capitalize">Operating Hours</h3>
				</th>
			</tr>
			<tr>
				<th scope="col" class="text-right pr-6 py-4 border-b" colspan="2">
					<h5 class="text-base capitalize">Applicable?</h5>
				</th>
				<th scope="col" class="px-6 py-4 border-b" colspan="1">
					<h5 class="text-base capitalize">Start Time</h5>
				</th>
				<th scope="col" class="px-6 py-4 border-b" colspan="1">
					<h5 class="text-base capitalize">End Time</h5>
				</th>
				<th scope="col" class="px-6 py-4 border-b" colspan="1">
					<h5 class="text-base capitalize">No. of Peak Routes</h5>
				</th>
			</tr>
		</thead>
		<tbody>
			<!-- WEEKDAY -->
			<tr
				class="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
			>
				<th
					scope="row"
					colspan="1"
					class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[300px]"
				>
					Weekday
				</th>
				<!-- TOGGLE -->
				<td colspan="1">
					<label class="inline-flex items-center cursor-not-allowed">
						<input type="checkbox" value="" class="sr-only peer" checked disabled />
						<div
							class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--clr-theme-color)] dark:peer-focus:ring-[var(--clr-theme-color)] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[var(--clr-theme-color)]"
						></div>
						<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
							<!-- Yes -->
						</span>
					</label>
				</td>
				<!-- START TIME -->
				<td colspan="1" class="w-40">
					<div class="relative flex flex-col">
						<div class="relative">
							<input
								type="time"
								id="start-time"
								class="block bg-white border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 pr-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								min="04:00"
								max="23:00"
								value="05:45"
								required
							/>
							<svg
								class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									fill-rule="evenodd"
									d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</div>
				</td>
				<!-- END TIME -->
				<td colspan="1" class="w-40">
					<div class="relative flex flex-col">
						<div class="relative">
							<input
								type="time"
								id="start-time"
								class="block bg-white border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 pr-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								min="04:00"
								max="23:00"
								value="18:30"
								required
							/>
							<svg
								class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									fill-rule="evenodd"
									d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</div>
				</td>
				<td colspan="1">
					<NumberInput id="wkdy-peaks" required={true} />
				</td>
			</tr>
			<!-- SATURDAY -->
			<tr
				class="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
			>
				<th
					scope="row"
					colspan="1"
					class="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
				>
					Saturday
				</th>
				<th scope="col" colspan="1" class="">
					<div class="flex items-center">
						<label class="inline-flex items-center">
							<input type="checkbox" value="" class="sr-only peer" />
							<div
								class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--clr-theme-color)] dark:peer-focus:ring-[var(--clr-theme-color)] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[var(--clr-theme-color)]"
							></div>
							<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
								<!-- Yes -->
							</span>
						</label>
					</div>
				</th>
				{#if runsSaturday}
					<!-- START TIME -->
					<td colspan="1" class="w-40">
						<div class="relative flex flex-col">
							<div class="relative">
								<input
									type="time"
									id="start-time"
									class="block bg-white border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 pr-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									min="09:00"
									max="18:00"
									value="00:00"
									required
								/>
								<svg
									class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fill-rule="evenodd"
										d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>
					</td>
					<!-- END TIME -->
					<td colspan="1" class="w-40">
						<div class="relative flex flex-col">
							<div class="relative">
								<input
									type="time"
									id="start-time"
									class="block bg-white border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 pr-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									min="09:00"
									max="18:00"
									value="00:00"
									required
								/>
								<svg
									class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fill-rule="evenodd"
										d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>
					</td>
					<td colspan="1">
						<NumberInput id="wkdy-peaks" required={true} />
					</td>
				{/if}
			</tr>
			<!-- SUNDAY -->
			<tr
				class="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
			>
				<th
					scope="row"
					colspan="1"
					class="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
				>
					Sunday
				</th>
				<th scope="col" colspan="1" class="">
					<div class="flex items-center">
						<label class="inline-flex items-center">
							<input type="checkbox" value="" class="sr-only peer" />
							<div
								class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--clr-theme-color)] dark:peer-focus:ring-[var(--clr-theme-color)] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[var(--clr-theme-color)]"
							></div>
							<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
								<!-- Yes -->
							</span>
						</label>
					</div>
				</th>
				{#if runsSunday}
					<!-- START TIME -->
					<td colspan="1" class="w-40">
						<div class="relative flex flex-col">
							<div class="relative">
								<input
									type="time"
									id="start-time"
									class="block bg-white border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 pr-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									min="09:00"
									max="18:00"
									value="00:00"
									required
								/>
								<svg
									class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fill-rule="evenodd"
										d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>
					</td>
					<!-- END TIME -->
					<td colspan="1" class="w-40">
						<div class="relative flex flex-col">
							<div class="relative">
								<input
									type="time"
									id="start-time"
									class="block bg-white border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 pr-4 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									min="09:00"
									max="18:00"
									value="00:00"
									required
								/>
								<svg
									class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fill-rule="evenodd"
										d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>
					</td>
					<td colspan="1">
						<NumberInput id="wkdy-peaks" required={true} />
					</td>
				{/if}
			</tr>
		</tbody>
	</table>
</div>

<style>
	table {
		backdrop-filter: blur(10px);
	}

	td {
		padding-top: 1.5rem;
		padding-bottom: 0.75rem;
		padding-right: 1rem;
	}
</style>
