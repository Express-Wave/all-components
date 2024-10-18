<script lang="ts">
	// import pastor from "$lib/assets/pastor.jpg"
</script>

<section
	id="hero"
	class="grid custom-grid-cols gap-x-clamp grid-rows-[1fr_auto] col-span-3 col-start-1 row-span-1 row-start-1 w-full h-[95vh] min-h-[800px] bg-theme-100"
>
	<!-- <div class="flex flex-col justify-center flex-grow max-w-[875px] w-full"> -->
	<div
		id="discover"
		class="col-span-1 col-start-2 row-span-1 row-start-1 w-full h-full min-h-full debug-border"
	>
		<h2 class="pb-0 mt-16 text-4xl font-bold text-left text-theme-900 font-generalSansBold">
			About Us
		</h2>
		<div class="py-4">
			<div
				class="mt-4 grid gap-6 sm:grid-cols-1 lg:grid-cols-2 text-white text-[1.75rem] font-sans text-bold font-quilonBold uppercase"
			>
				<div
					class="relative block w-full h-64 rounded-[1.5rem] overflow-hidden border border-mono-800 transform transition-transform duration-300 ease-in-out hover:scale-105"
				>
					<a
						href="/discover/leadership"
						class="flex absolute inset-0 justify-start items-end p-6 bg-black bg-opacity-0"
					>
						our pastor
					</a>
					<!-- <enhanced:img -->
					<img 
						src="https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/pastor-garner_inCVxqsHs.jpg?updatedAt=1728804266725"
						alt="Our Pastor"
						class="w-full h-full object-cover rounded-[1.5rem]"
					/>
				</div>

				<div
					class="relative block w-full h-64 rounded-[1.5rem] overflow-hidden bg-cover bg-center border border-mono-800 transform transition-transform duration-300 ease-in-out hover:scale-105"
					style="background-image: url('https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/ebc-beliefs_CrRXR9_Ya.png?updatedAt=1725244787443');"
				>
					<a
						href="/about/history"
						class="flex absolute inset-0 justify-start items-end p-6 bg-black bg-opacity-0"
					>
						our beliefs
					</a>
				</div>
				<div
					class="relative block w-full h-64 rounded-[1.5rem] overflow-hidden bg-cover bg-center border border-mono-800 transform transition-transform duration-300 ease-in-out hover:scale-105"
					style="background-image: url('https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/ebc-involvement_Y6QcJk2QL.png?updatedAt=1725244786473');"
				>
					<a
						href="/about/history"
						class="flex absolute inset-0 justify-start items-end p-6 bg-black bg-opacity-0"
					>
						our ministries
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
