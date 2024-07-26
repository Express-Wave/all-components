<!-- LAYOUT FOR ALL APP PAGES -->
<script lang="ts">
	import '../../app.css';
	import { page } from '$app/stores';
	import { removePrependSlash } from '$lib/utils/pathnamePipe.ts';
	import AppSidebar from '$lib/components/AppSidebar.svelte';
	// import ProjectSection from '$lib/sections/ProjectSection.svelte';
</script>

<div class="h-full">
	<div class="min-h-full flex flex-col">
		<div class="flex-none"></div>
		<div class="h-screen min-h-[0px] basis-0 flex-1">
			<div class="flex h-full">
				<AppSidebar />
				<div class="flex flex-1 flex-col">
					<div
						class="flex min-h-[3.5rem] max-h-12 items-center justify-between py-4 px-5 border-b border-default"
					>
						<div class="-ml-2 flex items-center text-md">
							<button
								class="text-gray-1100 block px-2 py-4 text-lg leading-5 focus:bg-gray-100 focus:text-gray-900 focus:outline-none capitalize"
							>
								{#if $page.url.pathname == '/dashboard'}
									Welcome!
								{:else}
									{removePrependSlash($page.url.pathname)}
								{/if}
							</button>
						</div>
						<div class="flex items-center gap-x-2">
							<span
								class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground bg-transparent border-strong hover:border-foreground-muted focus-visible:outline-border-strong data-[state=open]:border-stronger data-[state=open]:outline-border-strong text-xs px-2.5 py-4 h-[26px] hidden md:flex"
								data-size="tiny"
								type="button"
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
								<!-- -->
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
								type="button"
								aria-haspopup="dialog"
								aria-expanded="false"
								aria-controls="radix-:R3kqcpm:"
							>
								<button
									data-size="tiny"
									type="button"
									id="help-popover-button"
									class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border text-foreground hover:bg-surface-300 shadow-none focus-visible:outline-border-strong data-[state=open]:bg-surface-300 data-[state=open]:outline-border-strong border-transparent text-xs py-4 h-[26px] px-1"
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
									<!-- -->
								</button>
							</div>
						</div>
					</div>
					<!-- <ProjectSection /> -->
                     <slot></slot>
				</div>
			</div>
		</div>
	</div>
</div>
