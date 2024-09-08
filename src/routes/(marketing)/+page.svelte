<script lang="ts">
	import '../../app.css';
	import HeroSection from '$lib/sections/HeroSection.svelte';
	import AboutSection from '$lib/sections/AboutSection.svelte';
	import EventSection from '$lib/sections/EventSection.svelte';
</script>

<HeroSection />
<AboutSection />
<EventSection />
<div class="content h-[100vh] grid place-items-center scroll-snap-start bg-bisque">
	Section 4 - Full Width
</div>
<div class="content h-[100vh] grid place-items-center scroll-snap-start bg-lightgreen">
	Section 5 - Full Width
</div>
