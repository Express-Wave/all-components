<script lang="ts">
	import Header from '$lib/components/MarketingHeader.svelte';
	import Navbar from '$lib/components/MarketingNavbar.svelte';
	import '../../app.css';
</script>

<Header>
	<Navbar />
</Header>
<!-- THE VIEW PRESENTED IN THIS SLOT 
 CAN BE FOUND AT: src\routes\+page.svelte  -->
<slot></slot>
