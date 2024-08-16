<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
</script>

<div class="relative">
	<div
		class="sm:py-18 container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 pt-8 md:pt-16 overflow-hidden"
	>
		<div class="relative">
			<div class="mx-auto">
				<div
					class="mx-auto max-w-2xl lg:col-span-6 lg:flex lg:items-center justify-center text-center"
				>
					<div
						class="relative z-10 lg:h-auto pt-[90px] lg:pt-[90px] lg:min-h-[300px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8"
					>
						<div class="flex flex-col items-center">
							<h1
								class="text-foreground capitalize font-bold text-4xl sm:text-5xl sm:leading-none lg:text-7xl"
							>
								<span
									class="leading-[0.875] pb-3 font-heading-normal text-transparent bg-clip-text bg-gradient-to-br from-[#e1e1e1] to-[#b3b3b3] block md:ml-0"
									>404 Error</span
								>
								<span
									class="leading-[0.875] pb-3 font-heading-normal text-transparent bg-clip-text bg-gradient-to-br from-[#3ECF8E] via-[#3ECF8E] to-[#3ecfb2] block md:ml-0"
									>Page Not Found</span
								>
							</h1>
							<p
								class="pt-2 text-foreground font-display-medium my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg"
							>
								Sorry, there isn't a page at 
                                <span class="font-mono bg-stone-200 p-2 rounded-lg">{$page.url.pathname}</span>
								<br class="hidden md:block" />
							</p>
						</div>
						<div class="flex items-center gap-2">
							<a
								data-size="medium"
								type="button"
								class="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-brand-400 dark:bg-brand-500 hover:bg-brand/80 dark:hover:bg-brand/50 border-brand-500/75 dark:border-brand/30 hover:border-brand-600 dark:hover:border-brand focus-visible:outline-brand-600 data-[state=open]:bg-brand-400/80 dark:data-[state=open]:bg-brand-500/80 data-[state=open]:outline-brand-600 text-sm px-4 py-2 h-[38px] text-white"
								href="/"
								><span class="truncate capitalize text-slate-900 dark:text-white"
									>Go back to homepage</span
								></a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
