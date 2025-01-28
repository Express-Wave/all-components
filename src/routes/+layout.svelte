<script lang="ts">
    import '../global.css';
    import Footer from '$lib/components/Footer.svelte';
</script>

<main>
    <!-- This slot will render the content of the specific page -->
    <slot />
</main>

<!-- Include the Footer component at the bottom of the layout -->
<Footer />
