<script lang="ts">
	import '../../app.css';
</script>

<section
	id="events"
	class="content h-[100vh] flex flex-col items-center justify-center scroll-snap-start relative"
>
	<!-- Background Image and Overlay -->
	<div
		class="absolute inset-0 bg-[url('https://cdn.monkplatform.com/image/czoxOTc6Imh0dHBzJTNBJTJGJTJGYWNjb3VudC1tZWRpYS5zMy5hbWF6b25hd3MuY29tJTJGMTk0MDYlMkZ1cGxvYWRlZCUyRnclMkYwZTE4MjEyODk1XzE3MjAwMTU2ODNfd29tZW5zLXJvdGF0b3ItdGVhbS5qcGclM0ZxJTNEOTAlMjZ3JTNEMTYwMCUyNmglM0Q5MDAlMjZmaXQlM0Rjcm9wJTI2cyUzRDUyMjhlNmU1Y2Q1NTM3NmU2ZTA0MzQwMTExMDE4ZjdlIjs=/womens-rotator-team.jpg')] bg-cover bg-center"
	></div>
	<!-- Overlay with opacity -->
	<div class="absolute inset-0 bg-[dodgerblue] bg-opacity-15"></div>
	


	<!-- Content -->
	<div class="flex flex-col justify-start flex-grow max-w-[875px] w-full top-16 relative z-10">
		<div class="mt-4 space-x-4">
			<div class="relative">
				<!-- LINE (LEFT) -->
				<div
					class="before:content-[''] before:absolute before:w-[calc(100vw-1.5rem)] before:left-[-100vw] before:top-1/2 before:h-[3px] before:bg-theme-600 rounded-full"
				>
					<div
						class="text-3xl font-bold font-heading-bold text-theme-600 -ml-6 px-6 py-5 relative w-[fit-content]"
					>
						Upcoming Events
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-col justify-end flex-grow max-w-[875px] w-full bottom-12 relative z-10">
		<div class="mt-4 space-x-4">
			<div class="relative ">
				<div
					class="text-3xl font-bold font-heading-bold text-black px-6 py-4 relative w-[fit-content] text-right ml-auto"
				>
					View All Events
				</div>
				<!-- LINE (RIGHT)-->
				<div
					class="before:content-[''] before:absolute before:w-[calc(100vw-1.5rem)] before:right-[-100vw] before:top-1/2 before:h-[3px] before:bg-black rounded-full"
				></div>
			</div>
		</div>
	</div>
</section>
