<script lang="ts">
	import TextInput from '$lib/components/TextInput.svelte';
</script>

<div class="relative overflow-x-auto border rounded-lg">
	<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
		<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				<th scope="col" class="px-6 py-4 border-b" colspan="4">
					<h3 class="text-lg capitalize">Transit System Information</h3>
				</th>
			</tr>
		</thead>
		<tbody>
			<!-- LEGAL NAME -->
			<tr
				class="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
			>
				<th
					scope="row"
					class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[300px]"
				>
					CTP Grantee's Legal Name
				</th>
				<td class="" colspan="3">
					<div class="flex">
						<span
							class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
						>
							<svg
								class="w-4 h-4 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
								/>
							</svg>
						</span>
						<!-- <input
							type="text"
							id="website-admin"
							class="rounded-none rounded-e-lg bg- border text-gray-900 focus:ring-theme focus:border-theme focus-visible:border-theme block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-theme dark:focus:border-theme focus-visible:border-theme"
							placeholder="Jack Traven"
						/> -->
						<input
							type="text"
							id="website-admin"
							class="block w-full rounded-none p-2.5 rounded-e-lg bg-white border border-gray-300 text-gray-900 focus:ring-theme focus:border-theme block flex-1 min-w-0 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-theme dark:focus:border-theme"
							placeholder="Jack Traven"
						/>
					</div>
				</td>
			</tr>
			<!-- CONTACT PERSON -->
			<tr
				class="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
			>
				<th
					scope="row"
					class="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
				>
					Transit's Contact Person
				</th>
				<td class="">
					<TextInput id="first-name" label="First Name" required={true} />
				</td>
				<td class="">
					<TextInput id="middle-name" label="Middle Name" required={false} />
				</td>
				<td class="">
					<TextInput id="last-name" label="Last Name" required={true} />
				</td>
			</tr>
			<!-- EMAIL ADDRESS -->
			<tr
				class="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
			>
				<th
					scope="row"
					class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white max-w-[100px]"
				>
					Contact Email
				</th>
				<td class="" colspan="3">
					<div class="flex">
						<span
							class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
								/></svg
							>
						</span>
						<input
							type="text"
							id="website-admin"
							class="rounded-none rounded-e-lg bg- border text-gray-900 focus:ring-theme focus:border-theme focus-visible:border-theme block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-theme dark:focus:border-theme focus-visible:border-theme"
							placeholder="manager@waketransit.gov"
						/>
					</div>
				</td>
			</tr>
			<!-- TRANSIT'S TELEPHONE NUMBER -->
			<tr
				class="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
			>
				<th
					scope="row"
					class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white max-w-[100px]"
				>
					Transit Telephone Number
				</th>
				<td class="" colspan="3">
					<div class="flex">
						<span
							class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M4.05 21q-.45 0-.75-.3t-.3-.75V15.9q0-.325.225-.587t.575-.363l3.45-.7q.35-.05.713.063t.587.337L10.9 17q.95-.55 1.8-1.213t1.625-1.437q.825-.8 1.513-1.662t1.187-1.788L14.6 8.45q-.2-.2-.275-.475T14.3 7.3l.65-3.5q.05-.325.325-.562T15.9 3h4.05q.45 0 .75.3t.3.75q0 3.125-1.362 6.175t-3.863 5.55t-5.55 3.863T4.05 21"
								/></svg
							>
						</span>
						<input
							type="tel"
							id="phone-number"
							class="rounded-none rounded-e-lg bg- border text-gray-900 focus:ring-theme focus:border-theme focus-visible:border-theme block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-theme dark:focus:border-theme focus-visible:border-theme"
							placeholder="919-212-7005"
						/>
					</div>
				</td>
			</tr>
			<!-- TRANSIT FAX -->
			<tr
				class="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
			>
				<th
					scope="row"
					class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white max-w-[100px]"
				>
					Transit Fax Number
				</th>
				<td class="" colspan="3">
					<div class="flex">
						<span
							class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M5 21q-1.25 0-2.125-.875T2 18v-7q0-1.25.875-2.125T5 8q.675 0 1.238.275T7.225 9H8V4h10v5h1q1.25 0 2.125.875T22 12v8H7.225q-.425.45-.987.725T5 21m0-2q.425 0 .713-.288T6 18v-7q0-.425-.288-.712T5 10t-.712.288T4 11v7q0 .425.288.713T5 19m5-10h6V6h-6zm-2 9h12v-6q0-.425-.288-.712T19 11H8zm7-4q.425 0 .713-.288T16 13t-.288-.712T15 12t-.712.288T14 13t.288.713T15 14m3 0q.425 0 .713-.288T19 13t-.288-.712T18 12t-.712.288T17 13t.288.713T18 14m-3 3q.425 0 .713-.288T16 16t-.288-.712T15 15t-.712.288T14 16t.288.713T15 17m3 0q.425 0 .713-.288T19 16t-.288-.712T18 15t-.712.288T17 16t.288.713T18 17m-9 0h4v-5H9zm-1 1v-7z"
								/></svg
							>
						</span>
						<input
							type="tel"
							id="fax"
							class="rounded-none rounded-e-lg bg- border text-gray-900 focus:ring-theme focus:border-theme focus-visible:border-theme block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-theme dark:focus:border-theme focus-visible:border-theme"
							placeholder="919-212-7000"
						/>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	table {
		backdrop-filter: blur(5px);
	}

	td {
		padding-top: 1.5rem;
		padding-bottom: 0.75rem;
		padding-right: 1rem;
	}
</style>
