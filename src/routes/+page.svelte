<script lang="ts">
	import '../global.css';
</script>

<div id="main" class="flex flex-col items-center mb-40 space-y-40 grow min-h-40">
	<section
		class="data-[size=md]:scale-[0.8] data-[size=sm]:scale-75 w-screen relative z-10 ease-in-out flex transition-all duration-700 will-change-auto items-center flex-col space-y-40"
	>
		<div class="relative flex-col items-center max-w-8xl" id="home">
			<!-- GRADIENTS -->
			<div aria-hidden="true" class="grid absolute inset-0 grid-cols-2 -space-x-52 opacity-40">
				<div class="blur-[106px] h-56 bg-gradient-to-br from-theme-800 to-purple-400"></div>
				<div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300"></div>
			</div>
			<!-- HERO SECTION -->
			<div class="flex-col items-center px-6 mx-auto w-full max-w-7xl md:px-12 xl:px-6">
				<div class="relative flex-col items-center pt-36 ml-auto">
					<div class="flex-col items-center mx-auto w-1/2 text-center lg:w-2/3">
						<h1 class="text-5xl font-bold text-gray-900 md:text-6xl xl:text-7xl">
							<span
								class="animate-fade-up animate-duration-700 animate-delay-500 animate-ease-linear"
								>Truth.</span
							>
							<br />
							<span
								class="animate-fade-up animate-duration-700 animate-delay-900 animate-ease-linear"
								>Hope.</span
							>
							<br />
							<span
								class="animate-fade-up animate-duration-700 animate-delay-1300 animate-ease-linear"
								>Community.</span
							>
						</h1>

						<p class="mt-8 text-gray-700">
							Emmanuel Baptist Church, a place for you offering timeless truth, lasting hope, and
							vibrant community in Jesus.
						</p>
						<!-- CALL-TO-ACTION BUTTONS -->
						<div class="flex flex-wrap gap-y-4 gap-x-6 justify-center mt-16">
							<a
								href="/plan-your-visit"
								class="flex relative justify-center items-center px-6 w-full h-12 md:h-14 md:w-64 before:absolute before:inset-0 before:rounded-full after:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max before:bg-gradient-to-tr before:from-blue-700 before:to-theme-900"
							>
								<span
									class="relative w-32 text-base font-semibold text-center text-white capitalize"
									>Plan your visit</span
								>
							</a>
							<a
								href="#discover"
								class="flex relative justify-center items-center px-6 w-full h-12 md:h-14 md:w-64 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-mono-200 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
							>
								<span class="relative w-32 text-base font-semibold capitalize">Learn more</span>
							</a>
						</div>
						<!-- INFORMATION SUBSECTION -->
						<div class="gap-x-12 justify-evenly py-8 mt-16 w-full border-gray-200 border-y sm:flex">
							<div class="text-center grow min-w-[300px]">
								<h6 class="mb-4 font-semibold text-gray-700 text-md">Service Times</h6>
								<div class="p-6 rounded-lg border border-gray-200">
									<ul class="pl-4 space-y-4 font-medium text-gray-500 md:pl-0">
										<li class="flex justify-between items-center">
											<span class="text-left">Sunday <br /> Bible Study</span>
											<span class="text-right">10:00 AM</span>
										</li>
										<li class="flex justify-between items-center">
											<span class="text-left">Sunday Worship</span>
											<span class="text-right">11:00 AM <br /> &amp; 6:30 PM</span>
										</li>
										<li class="flex justify-between items-center">
											<span class="text-left">Wednesday <br /> Prayer Meeting</span>
											<span class="text-right">7:00 PM</span>
										</li>
									</ul>
								</div>
							</div>

							<div class="text-center grow min-w-[300px]">
								<h6 class="mt-6 mb-4 font-semibold text-gray-700 text-md md:mt-0">Contact Info</h6>
								<div class="p-6 rounded-lg border border-gray-200">
									<ul class="pl-4 space-y-4 font-medium text-gray-500 md:pl-0">
										<li class="flex flex-col text-left md:flex-row md:justify-start">
											<a
												href="https://www.google.com/maps/search/?api=1&amp;query=5975+US+70+East+La+Grange,+NC+28551"
												target="_blank"
												rel="noopener noreferrer"
											>
												<div class="flex items-center space-x-2 cursor-pointer hover:underline">
													<svg
														class="h-8 max-w-[1.5rem]"
														xmlns="http://www.w3.org/2000/svg"
														width="auto"
														height="auto"
														viewBox="0 0 16 16"
													>
														<path
															fill="currentColor"
															fill-rule="evenodd"
															d="m7.539 14.841l.003.003l.002.002a.755.755 0 0 0 .912 0l.002-.002l.003-.003l.012-.009a6 6 0 0 0 .19-.153a15.6 15.6 0 0 0 2.046-2.082C11.81 11.235 13 9.255 13 7A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.6 15.6 0 0 0 2.046 2.082l.189.153zM8 8.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
															clip-rule="evenodd"
														></path>
													</svg>
													<p>5975 US 70 East <br /> La Grange, NC 28551</p>
												</div>
											</a>
										</li>
										<li class="flex flex-col text-left md:flex-row md:justify-between">
											<a href="tel:+12525662170">
												<div class="flex items-center space-x-2 cursor-pointer hover:underline">
													<svg
														class="h-8 max-w-[1.5rem]"
														xmlns="http://www.w3.org/2000/svg"
														width="auto"
														height="auto"
														viewBox="0 0 20 20"
													>
														<path
															fill="currentColor"
															fill-rule="evenodd"
															d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.54 11.54 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.02 13.02 0 0 1 2.43 8.327A13 13 0 0 1 2 5z"
															clip-rule="evenodd"
														></path>
													</svg>
													<p>Phone: (252) 566-2170</p>
												</div>
											</a>
										</li>
										<li class="flex flex-col text-left md:flex-row md:justify-between">
											<a href="mailto:ebclg@ebclg.org">
												<div class="flex items-center space-x-2 cursor-pointer hover:underline">
													<svg
														class="h-8 max-w-[1.5rem]"
														xmlns="http://www.w3.org/2000/svg"
														width="auto"
														height="auto"
														viewBox="0 0 20 20"
													>
														<path
															fill="currentColor"
															fill-rule="evenodd"
															d="M2 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5zm1 0v10h14V5H3z"
															clip-rule="evenodd"
														></path>
														<path fill="currentColor" d="M4 6.5l6 4l6-4V5l-6 4l-6-4v1.5z"></path>
													</svg>
													<p>Email: ebclg@ebclg.org</p>
												</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="discover" class="mt-40">
		<div class="px-6 mx-auto max-w-8xl md:px-12 xl:px-6">
			<div class="flex-col items-center mx-auto w-1/2 text-center lg:w-2/3">
				<h2 class="mt-8 text-3xl font-bold text-gray-700 md:text-4xl">Discover Emmanuel</h2>
				<p class="my-8 text-gray-700">
					Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum
					officia aliquid explicabo? Excepturi, voluptate?
				</p>
			</div>
			<div class="grid gap-8 max-w-5xl md:grid-cols-2 lg:grid-cols-3">
				<a
					href="/about#pastor"
					class="p-6 bg-white bg-opacity-50 rounded-3xl border border-gray-100 shadow-2xl cursor-pointer group sm:p-8 shadow-gray-600/10"
				>
					<div class="overflow-hidden relative rounded-xl">
						<img
							src="https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/mini-pastor-garner_FiOaKJ7bb.webp?updatedAt=1729398571290"
							alt="art cover"
							loading="lazy"
							width="1000"
							height="667"
							class="object-cover object-top w-full h-64 transition duration-500 group-hover:scale-105"
						/>
					</div>
					<div class="mt-6 group relative bg-white transition hover:z-[1">
						<h3 class="text-2xl font-semibold text-gray-800">Leadership</h3>
						<p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
							Pastor Ricky Garner, Senior Pastor of Emmanuel Baptist Church
						</p>
						<span class="flex justify-between items-center group-hover:text-mono-900">
							<span class="capitalize text-info">Learn more</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-5 h-5 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"
							>
								<path
									fill-rule="evenodd"
									d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
									clip-rule="evenodd"
								></path>
							</svg>
						</span>
					</div>
				</a>
				<a
					href="/about"
					class="p-6 bg-white bg-opacity-50 rounded-3xl border border-gray-100 shadow-2xl cursor-pointer group sm:p-8 shadow-gray-600/10"
				>
					<div class="overflow-hidden relative rounded-xl">
						<img
							src="https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/bible-study_yGo1gIIPF.jpeg?updatedAt=1730625294805"
							alt="art cover"
							loading="lazy"
							width="1000"
							height="667"
							class="object-cover object-top w-full h-64 transition duration-500 group-hover:scale-105"
						/>
					</div>
					<div class="mt-6 group relative bg-white transition hover:z-[1">
						<h3 class="text-2xl font-semibold text-gray-800">Beliefs</h3>
						<p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
							What motives us and what we believe
						</p>
						<span class="flex justify-between items-center group-hover:text-mono-900">
							<span class="capitalize text-info">Learn more</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-5 h-5 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"
							>
								<path
									fill-rule="evenodd"
									d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
									clip-rule="evenodd"
								></path>
							</svg>
						</span>
					</div>
				</a>
				<a
					href="/about"
					class="p-6 bg-white bg-opacity-50 rounded-3xl border border-gray-100 shadow-2xl cursor-pointer group sm:p-8 shadow-gray-600/10"
				>
					<div class="overflow-hidden relative rounded-xl">
						<img
							src="https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/children-ministry_csc99yE_h1.jpg?updatedAt=1730625297176"
							alt="art cover"
							loading="lazy"
							width="1000"
							height="667"
							class="object-cover object-top w-full h-64 transition duration-500 group-hover:scale-105"
						/>
					</div>
					<div class="mt-6 group relative bg-white transition hover:z-[1">
						<h3 class="text-2xl font-semibold text-gray-800">Ministries</h3>
						<p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
							Senior Pastor of Emmanuel Baptist Church
						</p>
						<span class="flex justify-between items-center group-hover:text-mono-900">
							<span class="capitalize text-info">Learn more</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-5 h-5 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:translate-x-0"
							>
								<path
									fill-rule="evenodd"
									d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
									clip-rule="evenodd"
								></path>
							</svg>
						</span>
					</div>
				</a>
			</div>
		</div>
	</section>
	<section id="media" class="relative mt-40">
		<video
			class="object-cover w-[95vw] h-full rounded-lg md:rounded-none md:w-screen"
			autoplay
			muted
			loop
			controls
		>
			<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		<div class="absolute inset-0 bg-white bg-opacity-50"></div>
		<div
			class="flex absolute inset-0 flex-col justify-center items-center space-y-4 text-white bg-black bg-opacity-50"
		>
			<h1 class="md:text-4xl md:font-bold">Featured Sermon</h1>
			<p class="md:text-center md:mx-auto md:w-6/12">
				Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia
				aliquid explicabo? Excepturi, voluptate?
			</p>
			<a href="/about">
				<button
					class="items-center px-6 w-32 h-12 rounded-full md:h-14 md:w-64 before:absolute before:inset-0 before:rounded-full after:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max border-mono-500"
					>View Past Sermons</button
				>
			</a>
		</div>
	</section>
</div>
