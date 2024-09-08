<script lang="ts">
	import '../../app.css';
</script>

<section
	id="discover"
	class="content h-[100vh] flex flex-col items-center justify-center scroll-snap-start"
>
	<div class="flex flex-col justify-center flex-grow max-w-[875px] w-full">
		<h2 class="text-[dodgerblue] font-semibold text-left text-4xl mt-16 pb-8">About Us</h2>
		<div class="mt-4 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
			<!-- Card 1 -->

			<div
				class="relative block w-full h-64 rounded-lg overflow-hidden bg-cover bg-center"
				style="background-image: url('https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/ebc-leadership_pA-KyAqTZ.png?updatedAt=1725244785606');"
			>
				<a
					href="/discover/leadership"
					class="absolute inset-0 flex items-end justify-start bg-black bg-opacity-0 hover:bg-opacity-75 text-white text-2xl font-[800] capitalize p-6"
				>
					leadership team
				</a>
			</div>
            
			<!-- Card 2 -->
			<div
				class="relative block w-full h-64 rounded-lg overflow-hidden bg-cover bg-center"
				style="background-image: url('https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/ebc-building-img_xA1-ogNMB.jpg?updatedAt=1725244430526');"
			>
				<a
					href="/discover/history"
					class="absolute inset-0 flex items-end justify-start bg-black bg-opacity-0 hover:bg-opacity-50 text-white text-2xl font-bold capitalize p-6"
				>
					our history
				</a>
			</div>
			<!-- Card 3 -->
            
			<div
				class="relative block w-full h-64 rounded-lg overflow-hidden bg-cover bg-center"
				style="background-image: url('https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/ebc-beliefs_CrRXR9_Ya.png?updatedAt=1725244787443');"
			>
				<a
					href="/about/history"
					class="absolute inset-0 flex items-end justify-start bg-black bg-opacity-0 hover:bg-opacity-50 text-white text-2xl font-bold capitalize p-6"
				>
					our beliefs
				</a>
			</div>

			<!-- Card 4 -->
            
			<div
				class="relative block w-full h-64 rounded-lg overflow-hidden bg-cover bg-center"
				style="background-image: url('https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/ebc-involvement_Y6QcJk2QL.png?updatedAt=1725244786473');"
			>
				<a
					href="/about/history"
					class="absolute inset-0 flex items-end justify-start bg-black bg-opacity-0 hover:bg-opacity-50 text-white text-2xl font-bold capitalize p-6"
				>
					get involved
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	h2 {
		font-family: 'outfit', sans-serif;
	}

	section {
		background-color: #2d2d31;
		opacity: 0.8;
		background-image: radial-gradient(circle at center center, #6d6d6d, #2d2d31),
			repeating-radial-gradient(
				circle at right center,
				#6d6d6d,
				#6d6d6d,
				10px,
				transparent 20px,
				transparent 10px
			);
		background-blend-mode: multiply;
	}
</style>
