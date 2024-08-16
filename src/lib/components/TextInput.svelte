<script lang="ts">
	export let id: string;
	export let label: string;
	export let required: boolean;
</script>

<div class="relative">
	<input
		{id}
		type="text"
        {required}
		placeholder=" "
		class="peer block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-0 focus:border-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 sm:text-sm bg-white"
	/>
	<label
		for={id}
		class="absolute -top-1 left-3 text-gray-500 text-sm transition-transform transform -translate-y-2 scale-75 origin-top-left peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
	>
		{label}
	</label>
</div>

<style>
    input {
        background-color: white;
    }
</style>