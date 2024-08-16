<!-- LAYOUT FOR ALL APP PAGES
<script lang="ts">
	import '../../app.css';
	import { page } from '$app/stores';
	import BreadcrumbIcon from '$lib/icons/BreadcrumbIcon.svelte';

	let pathname = $page.url.pathname;

	const parts = pathname.split('/').filter((part) => part); 
</script>

<div
	class="flex min-h-[3.5rem] max-h-12 items-center justify-between py-4 px-5 border-b border-default backdrop-blur-sm"
>
	<div class="ml-2 flex items-center text-md">
		<h2 class="font-[heading-normal] text-xl text-slate-700">Opstats Web Form</h2>
		{#if $page.url.pathname !== '/dashboard'}
			<div class="flex items-center min-w-[40vw] ml-6">
				{#each parts as part, index}
					{#if index > 0}
						<BreadcrumbIcon />
					{/if}
					<span class="capitalize">{part}</span>
				{/each}
			</div>
		{/if}
	</div>
	<div class="flex items-center gap-x-2">
		<span
			class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-transparent border-strong hover:border-foreground-muted focus-visible:outline-border-strong data-[state=open]:border-stronger data-[state=open]:outline-border-strong text-xs py-4 px-6 h-[26px] hidden md:flex"
			data-size="tiny"
			aria-haspopup="dialog"
			aria-expanded="false"
			aria-controls="radix-:R1kqcpm:"
			data-state="closed"><span class="truncate">Feedback</span></span
		><button
			data-size="tiny"
			type="button"
			class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground hover:bg-surface-300 shadow-none focus-visible:outline-border-strong data-[state=open]:bg-surface-300 data-[state=open]:outline-border-strong border-transparent text-xs py-4 h-[26px] group px-1"
			aria-haspopup="dialog"
			aria-expanded="false"
			aria-controls="radix-:R2kqcpm:"
			data-state="closed"
		>
			<div class="[&amp;_svg]:h-[14px] [&amp;_svg]:w-[14px] text-foreground-muted">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-inbox transition group-hover:text-foreground text-foreground-light"
					><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path
						d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
					></path></svg
				>
			</div></button
		>
		<div
			class="relative flex items-center"
			data-state="closed"
			aria-haspopup="dialog"
			aria-expanded="false"
			aria-controls="radix-:R3kqcpm:"
		>
		</div>
	</div>
</div> -->

<script lang="ts">
	import { afterUpdate } from "svelte";
	import { page } from '$app/stores';
	import BreadcrumbIcon from '$lib/icons/BreadcrumbIcon.svelte';
  
	// Initialize an array to hold breadcrumb data
	let breadcrumbs: { label: string; url: string }[] = [];
  
	// Function to create breadcrumbs from the current path
	function createBreadcrumbs(path: string): void {
	  const parts = path.split("/").filter((part) => part !== "");
	  let url = "";
	  breadcrumbs = parts.map((part, index) => {
		url += `/${part}`;
		return { label: part, url: url };
	  });
	}
  
	// Watch for changes in the URL and update breadcrumbs accordingly
	$: {
	  const { pathname } = $page.url;
	  createBreadcrumbs(pathname);
	}
  </script>
  
  <div
  class="flex min-h-[3.5rem] max-h-12 items-center justify-between py-4 px-5 border-b border-default backdrop-blur-sm"
>
  <div class="ml-2 flex items-center text-md">
	  <h2 class="font-[heading-normal] text-xl text-slate-700">Opstats Web Form</h2>
	  {#if $page.url.pathname !== '/dashboard'}
		<div class="flex items-center min-w-[40vw] ml-6">
		  {#each breadcrumbs as breadcrumb, index}
			{#if index > 0}
			  <BreadcrumbIcon />
			{/if}
			<a href="{breadcrumb.url}" class="capitalize text-neutral-500 hover:underline font-semibold hover:text-blue-600">
			  {breadcrumb.label}
			</a>
		  {/each}
		</div>
	  {/if}
	</div>
	<div class="flex items-center gap-x-2">
	  <!-- Feedback Button -->
	  <span
		class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-transparent border-strong hover:border-foreground-muted focus-visible:outline-border-strong data-[state=open]:border-stronger data-[state=open]:outline-border-strong text-xs py-4 px-6 h-[26px] hidden md:flex"
		data-size="tiny"
		aria-haspopup="dialog"
		aria-expanded="false"
		aria-controls="radix-:R1kqcpm:"
		data-state="closed"><span class="truncate">Feedback</span></span>
	  <!-- Inbox Button -->
	  <button
		data-size="tiny"
		type="button"
		class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground hover:bg-surface-300 shadow-none focus-visible:outline-border-strong data-[state=open]:bg-surface-300 data-[state=open]:outline-border-strong border-transparent text-xs py-4 h-[26px] group px-1"
		aria-haspopup="dialog"
		aria-expanded="false"
		aria-controls="radix-:R2kqcpm:"
		data-state="closed"
	  >
		<div class="[&amp;_svg]:h-[14px] [&amp;_svg]:w-[14px] text-foreground-muted">
		  <svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-inbox transition group-hover:text-foreground text-foreground-light"
		  ><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path
			d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
		  ></path></svg>
		</div>
	  </button>
	</div>
  </div>
  