<script lang="ts">
	import '../../app.css';
</script>

<section
	id="discover"
	class="content min-h-[100vh] flex flex-col items-center justify-center scroll-snap-start bg-[url('https://img.freepik.com/free-vector/topographic-map-background_23-2148596457.jpg?w=1800&t=st=1726118546~exp=1726119146~hmac=a23bb6f09cae96716be34db096f3fad0472d35bda6245e69b020d5ce20e5681f')] bg-cover bg-center bg-opacity-50"
>
	<div class="flex flex-col justify-center flex-grow max-w-[875px] w-full">
		<h2 class="text-theme-900 text-theme-900 font-generalSansBold font-bold text-left text-5xl mt-16 pb-0">About Us</h2>
		<!-- Service Times Section -->
		<div class="py-4">
			
			<!-- Card Grid Layout -->
			<div class="mt-4 grid gap-6 sm:grid-cols-1 lg:grid-cols-2 text-white text-[1.75rem] font-sans text-semibold font-quilonMedium uppercase">
				<!-- Card 1 -->
				<div
					class="relative block w-full h-64 rounded-[2rem] overflow-hidden bg-cover bg-center border border-mono-800 border-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
					style="background-image: url('https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/ebc-leadership_pA-KyAqTZ.png?updatedAt=1725244785606');"
				>
					<a
						href="/discover/leadership"
						class="absolute inset-0 flex items-end justify-start bg-black bg-opacity-0 p-6"
					>
						leadership team
					</a>
				</div>

				<!-- Card 2 -->
				<div
					class="relative block w-full h-64 rounded-[2rem] overflow-hidden bg-cover bg-center border border-mono-800 border-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
					style="background-image: url('https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/ebc-building-img_xA1-ogNMB.jpg?updatedAt=1725244430526');"
				>
					<a
						href="/discover/history"
						class="absolute inset-0 flex items-end justify-start bg-black bg-opacity-0 p-6"
					>
						our history
					</a>
				</div>

				<!-- Card 3 -->
				<div
					class="relative block w-full h-64 rounded-[2rem] overflow-hidden bg-cover bg-center border border-mono-800 border-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
					style="background-image: url('https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/ebc-beliefs_CrRXR9_Ya.png?updatedAt=1725244787443');"
				>
					<a
						href="/about/history"
						class="absolute inset-0 flex items-end justify-start bg-black bg-opacity-0 p-6"
					>
						our beliefs
					</a>
				</div>

				<!-- Card 4 -->
				<div
					class="relative block w-full h-64 rounded-[2rem] overflow-hidden bg-cover bg-center border border-mono-800 border-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
					style="background-image: url('https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/ebc-involvement_Y6QcJk2QL.png?updatedAt=1725244786473');"
				>
					<a
						href="/about/history"
						class="absolute inset-0 flex items-end justify-start bg-black bg-opacity-0 p-6"
					>
						get involved
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	h2 {
		font-family: 'outfit', sans-serif;
	}

	/* section {
		background-color: #222;
		opacity: 0.8;
		background-image: radial-gradient(circle at center center, #fff, #222),
			repeating-radial-gradient(
				circle at left center,
				#222,
				#222,
				1rem,
				transparent 20px,
				transparent 10px
			);
		background-blend-mode: multiply;
	} */
</style>
