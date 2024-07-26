<script lang="ts">
	let height: string = '3.5rem';
	import '../../app.css';
</script>

<div
	id="with-sidebar"
	class="h-[100vh] min-h-full bg-[#f8f8f8] hide-scrollbar w-64 overflow-auto border-r border-nuetral-200 dark:border-nuetral-700"
>
	<div class="mb-2">
		<div
			class={`flex min-h-[${height}] max-h-12 items-center border-b px-6 border-nuetral-200 dark:border-nuetral-700`}
		>
			<h3 class="mb-0 text-2xl truncate font-medium font-heading-medium" title="Dashboard">
				Dashboard
			</h3>
		</div>
	</div>
	<div class="-mt-1">
		<div
			role="menu"
			aria-label="Sidebar"
			aria-orientation="vertical"
			aria-labelledby="options-menu"
		>
			<ul>
				<div class="border-b py-5 px-6 border-nuetral-200 dark:border-nuetral-700">
					<div class=" flex space-x-3 mb-2 font-normal">
						<h4><span class="text-lg text-neutral-800 w-full">Projects</span></h4>
					</div>
					<ul class="space-y-1">
						<a class="block" target="_self" href="/dashboard/projects"
							><span
								class="group flex max-w-full cursor-pointer items-center space-x-2 border-nuetral-200 dark:border-nuetral-700 py-1 font-normal outline-none focus-visible:z-10 focus-visible:ring-1"
								><span title="All projects" class="w-full truncate text-sm transition"
									>All projects</span
								></span
							></a
						>
					</ul>
				</div>
				<div class="border-b py-5 px-6 border-nuetral-200 dark:border-nuetral-700">
					<div class=" flex space-x-3 mb-2 font-normal">
						<h4><span class="text-lg text-neutral-800 w-full">Users</span></h4>
					</div>
					<ul class="space-y-1">
						<a class="block" target="_self" href="/dashboard/org/rsqbwqnldlfovzitakfd/general"
							><span
								class="group flex max-w-full cursor-pointer items-center space-x-2 border-nuetral-200 dark:border-nuetral-700 py-1 font-normal outline-none focus-visible:z-10 focus-visible:ring-1"
								><span title="Durham County Transit" class="w-full truncate text-sm transition"
									>Durham County Transit</span
								></span
							></a
						>
					</ul>
				</div>
				<div class="border-b py-5 px-6 border-nuetral-200 dark:border-nuetral-700">
					<div class=" flex space-x-3 mb-2 font-normal">
						<span class="text-sm w-full">Account</span>
					</div>
					<ul class="space-y-1">
						<a class="block" target="_self" href="/dashboard/account/me"
							><span
								class="group flex max-w-full cursor-pointer items-center space-x-2 border-nuetral-200 dark:border-nuetral-700 py-1 font-normal outline-none focus-visible:z-10 focus-visible:ring-1"
								><span title="Preferences" class="w-full truncate text-sm transition"
									>Preferences</span
								></span
							></a
						><a class="block" target="_self" href="/dashboard/account/tokens"
							><span
								class="group flex max-w-full cursor-pointer items-center space-x-2 border-nuetral-200 dark:border-nuetral-700 py-1 font-normal outline-none focus-visible:z-10 focus-visible:ring-1"
								><span title="Access Tokens" class="w-full truncate text-sm transition"
									>Access Tokens</span
								></span
							></a
						><a class="block" target="_self" href="/dashboard/account/security"
							><span
								class="group flex max-w-full cursor-pointer items-center space-x-2 border-nuetral-200 dark:border-nuetral-700 py-1 font-normal outline-none focus-visible:z-10 focus-visible:ring-1"
								><span title="Security" class="w-full truncate text-sm transition">Security</span
								></span
							></a
						><a class="block" target="_self" href="/dashboard/account/audit"
							><span
								class="group flex max-w-full cursor-pointer items-center space-x-2 border-nuetral-200 dark:border-nuetral-700 py-1 font-normal outline-none focus-visible:z-10 focus-visible:ring-1"
								><span title="Audit Logs" class="w-full truncate text-sm transition"
									>Audit Logs</span
								></span
							></a
						>
					</ul>
				</div>
				<div class="border-b py-5 px-6 border-nuetral-200 dark:border-nuetral-700">
					<div class=" flex space-x-3 mb-2 font-normal">
						<h4><span class="text-lg text-neutral-800 w-full">Documentation</span></h4>
					</div>
					<ul class="space-y-1">
						<a class="block" target="_blank" href="https://supabase.com/docs"
							><span
								class="group flex max-w-full cursor-pointer items-center space-x-2 border-nuetral-200 dark:border-nuetral-700 py-1 font-normal outline-none focus-visible:z-10 focus-visible:ring-1"
								><span class="truncate text-sm transition group-hover"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="sbui-icon"
										><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"
										></polyline></svg
									></span
								><span title="Guides" class="w-full truncate text-sm transition">Guides</span></span
							></a
						><a class="block" target="_blank" href="https://supabase.com/docs/guides/api"
							><span
								class="group flex max-w-full cursor-pointer items-center space-x-2 border-nuetral-200 dark:border-nuetral-700 py-1 font-normal outline-none focus-visible:z-10 focus-visible:ring-1"
								><span class="truncate text-sm transition group-hover"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="sbui-icon"
										><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"
										></polyline></svg
									></span
								><span title="API Reference" class="w-full truncate text-sm transition"
									>API Reference</span
								></span
							></a
						>
					</ul>
				</div>
				<div class="border-b py-5 px-6 border-nuetral-200 dark:border-nuetral-700">
					<ul class="space-y-1">
						<li
							role="menuitem"
							class="cursor-pointer flex space-x-3 items-center outline-none focus-visible:ring-1-muted focus-visible:z-10 group py-1 font-normal border-nuetral-200 dark:border-nuetral-700"
							style="margin-left: 0rem;"
						>
							<div class="transition truncate text-sm group-hover min-w-fit">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="sbui-icon"
									><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline
										points="16 17 21 12 16 7"
									></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg
								>
							</div>
							<span class="transition truncate text-sm w-full">Log out</span>
						</li>
					</ul>
				</div>
			</ul>
		</div>
	</div>
</div>
