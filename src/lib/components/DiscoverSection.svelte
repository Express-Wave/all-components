<script lang="ts">
	import ReusableSection from '$lib/components/ReusableSection.svelte';
	// import {
	// 	Card,
	// 	// CardContent,
	// 	CardDescription,
	// 	CardFooter,
	// 	CardHeader,
	// 	CardTitle
	// } from '$lib/components/ui/card';
	// // import { Separator } from '$lib/components/ui/separator';
	// import { Button } from '$lib/components/ui/button';

	// const sections = [
	// 	{
	// 		title: 'Our Pastor',
	// 		description: 'Meet Pastor John Doe, who has been leading our congregation for over 15 years.',
	// 		image: 'https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/pastor-garner_inCVxqsHs.jpg?updatedAt=1728804266725',
	// 		action: 'Meet Our Pastor'
	// 	},
	// 	{
	// 		title: 'Our Beliefs',
	// 		description: 'Discover the core values and beliefs that guide our faith community.',
	// 		image: 'https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/ebc-beliefs_CrRXR9_Ya.png?updatedAt=1725244787443',
	// 		action: 'Learn More'
	// 	},
	// 	{
	// 		title: 'Our Ministries',
	// 		description:
	// 			'Explore the various ministries and outreach programs we offer to serve our community.',
	// 		image: 'https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/ebc-involvement_Y6QcJk2QL.png?updatedAt=1725244786473',
	// 		action: 'View Ministries'
	// 	}
	// ];
</script>

<ReusableSection
	id="hero"
	rows="1fr"
	additionalSlot={false}
	bgColor="#3F3F3F"
	contentClass="border border-transparent"
>
	<div class="flex flex-col justify-center flex-grow max-w-[875px] w-full">
		<h2 class="pb-0 mt-16 text-4xl font-bold text-left text-theme-900 font-generalSansBold">
			About Us
		</h2>
		<div class="py-4">
			<div
				class="mt-4 grid gap-6 sm:grid-cols-1 lg:grid-cols-2 text-white text-[1.75rem] font-sans text-bold font-quilonBold uppercase"
			>
			<div class="relative block w-full h-64 rounded-[1.5rem] overflow-hidden border border-mono-800 transform transition-transform duration-300 ease-in-out hover:scale-105">
				<a href="/discover/leadership" class="flex absolute inset-0 justify-start items-end p-6 bg-black bg-opacity-0">
					our pastor
				</a>
				<img loading="lazy" src="https://ik.imagekit.io/bip1v395ybp/Emmanuel%20Baptist%20Church/ebc-leadership_pA-KyAqTZ.png?updatedAt=1725244785606" alt="Our Pastor" class="w-full h-full object-cover rounded-[1.5rem]" />
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
</ReusableSection>
