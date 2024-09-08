<script lang="ts">
	import { onMount } from 'svelte';

	// Define a type for the device if needed
	type Device = {
		deviceId: string;
		connectionStatus: boolean;
		fwVersion: string;
		ipAddress: string;
		location: string;
		model: string;
		name: string;
		newStatus: boolean;
		onboardedDateTime: string;
		serialNumber: string;
		tags: string[];
		type: string;
	};

	let devices: Device[] = [];
	let totalDevices: number = 0;
	let tableHeading: string[] = ["hostname", "model", "iP address", "serial number", "firmware"]
	let authToken: string = `id_token=eyJraWQiOiJEdmI1QnpsYnk1YnRqSHNGMFRsYlVrVklpeHpaVCs3WkdaTkhBbVM4RW80PSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206bW9kaWZpZWRCeSI6ImFyaXRlc3RhdXRvbWF0aW9uIiwiYXRfaGFzaCI6IkY2M25JX0hBbmZmTjRiSGU1V3VneFEiLCJzdWIiOiIxOWU5MzIyOC02NGE0LTRhNzctYWZmYy0xM2VkNTAwYzBlOWIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfaG5maU1abVc3IiwiY29nbml0bzp1c2VybmFtZSI6Im9hYnJldSIsImN1c3RvbTp0aWQiOiIwMTIzNDU2IiwiYXVkIjoiNmExN3Bqa2xucHY5aXIwYjRxMDc2OWZmMm8iLCJjdXN0b206Y3JlYXRlZEJ5IjoiYXJpdGVzdGF1dG9tYXRpb24iLCJldmVudF9pZCI6ImM3NWY1NDg3LTQyZDUtNGIzMy1iNGRjLWM5MTQxM2Q2ZGVhMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzI0Nzc0NDY0LCJuYW1lIjoiT2xpdmVyIEFicmV1IiwiZXhwIjoxNzI1MDUxMTMyLCJjdXN0b206cm9sZSI6IkFkbWluIiwiaWF0IjoxNzI1MDQ3NTMyLCJlbWFpbCI6Im9hYnJldUBleHRyb24uY29tIn0.ps-W5d8GYgpRt4_3HRM_3Q9kGjeq_Pwz9gLx6jJ39kVVIFl8W52vX0Ua3ggYvL3AL133bNF0OgUT2G1WZvNcnu3FrEHXh19mOmFDrM88x4HyGbvDS0CVdgB3c9BlAXEsqAJlPn5E8KgnqOozJi7PCMWQwTTj7JsV72GT1iO98ZjMa72PWmO1xoXMRCyTWEakU5DBcKkmzHsHKexOVvLhqnwT-XC0Lggzi-GXwlO_l1FHUCYCmXhQ43SukC-03EWqfSSt-hugPDxMkI9vv6D_ol4J4tTIkgMOhISYH9kI91AVh_dKGgP2YAWur0Dvk8TgaV28lUHkhG8Ddtzjk88nng&access_token=eyJraWQiOiJpNjI2ZHBZK2FDb3o2SVd1RWV1XC80YWZzV21DdUs3SzB2WllBT29YK2dxRT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxOWU5MzIyOC02NGE0LTRhNzctYWZmYy0xM2VkNTAwYzBlOWIiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9obmZpTVptVzciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI2YTE3cGprbG5wdjlpcjBiNHEwNzY5ZmYybyIsImV2ZW50X2lkIjoiYzc1ZjU0ODctNDJkNS00YjMzLWI0ZGMtYzkxNDEzZDZkZWExIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImF1dGhfdGltZSI6MTcyNDc3NDQ2NCwiZXhwIjoxNzI1MDUxMTMyLCJpYXQiOjE3MjUwNDc1MzIsImp0aSI6ImZlMTY4ZThhLTgwZWYtNGZlMy05M2E0LWI5NDE5ZThiYTM3YSIsInVzZXJuYW1lIjoib2FicmV1In0.SZcIAiGby0-uucnVp8sDOIOjaWbl45Km_xcV7P7dSNqrpKFh-bqyEXFh59r2yr-iudSNm1BTPPaOHuEWgx8R8mox6uWFk5NocVMHfeVEBRiWz96l4xdPYBMg9RX5XqeKRCZzpETy-VTJ8h32l6kMM_24rbsOeW9CjrhbnyHiWHUJKglk7Ec3sBzSK7jdr5JRdokgoe6YuBW8yqkApWhv5RRNYzFAnSSgC69RISj6Uj6fq5mEhDUpYHF-FEc35Emu9cx468LbzwHN0zxWw9xy7SaLTvFOrTkck1dhTTRa9v9o_re-pBi-D1QS5slRER6Pgw25v8RrTiHPay2k38wRCw`

	onMount(async () => {
		try {
			// const authToken = import.meta.env.VITE_AUTH_TOKEN;
			const response = await fetch(`https://device-indexing.api.e3stgcloud.com/v1/devices`, {
				headers: {
					Authorization: `Bearer ${authToken}`,
					'Content-Type': 'application/json'
				}
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const data = await response.json();
			devices = data.devices;
			console.log(devices); // Handle the fetched data as needed
		} catch (error) {
			console.error('Failed to fetch data:', error);
		}
	});
</script>


<div class="relative w-full overflow-x-scroll border rounded-lg h-[90vh] backdrop-blur-sm">
	<table class="w-full caption-bottom text-sm">
		<thead id="table-head" class="[&_tr]:border-b bg-white text-mono-700 text-md">
			<tr class="border-b transition-colors data-[state=selected]:bg-muted ">
				{#each tableHeading as heading}
					<th class="h-12 px-4 text-left align-middle font-xl font-semibold text-muted-foreground capitalize py-4"
						>{heading}</th
					>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each devices as device}
				<tr class="transition-colors data-[state=selected]:bg-muted bg-mono-50 hover:bg-theme-light cursor-pointer">
					<td class="h-12 px-4 text-left align-middle border-b py-4 text-theme hover:underline">{device.name}</td>
					<td class="h-12 px-4 text-left align-middle border-b py-4">{device.model}</td>
					<!-- <td class="h-12 px-4 text-left align-middle "
						>{device.connectionStatus ? 'Connected' : 'Disconnected'}</td
					> -->
					<td class="h-12 px-4 text-left align-middle border-b py-4 font-mono">{device.ipAddress}</td>
					<td class="h-12 px-4 text-left align-middle border-b py-4 font-mono">{device.serialNumber}</td>
					<td class="h-12 px-4 text-left align-middle border-b py-4 font-mono">{device.fwVersion}</td>
					<!-- <td class="h-12 px-4 text-left align-middle">{device.tags.join(', ') || 'None'}</td> -->
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	#table-head {
		position: sticky;
		top: 0;
		border-bottom: 1px solid currentColor;
	}

	/* tr:hover {
		background-color: #f0ffff;
	} */
</style>