<script>
  import { onMount } from 'svelte';

  let isNavOpen = false;
  let navRef;

  function toggleNav() {
    isNavOpen = !isNavOpen;
  }

  onMount(() => {
    const handleClickOutside = (event) => {
      if (navRef && !navRef.contains(event.target)) {
        isNavOpen = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<style>
  .nav-enter {
    opacity: 0;
    transform: translateY(-10px);
  }

  .nav-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.3s, transform 0.3s;
  }

  .nav-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .nav-exit-active {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s, transform 0.3s;
  }
</style>

<header class="bg-white shadow-md">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="text-xl font-bold text-gray-800 md:block">Logistip</a>

    <!-- Mobile Navigation Button -->
    <button
      class="md:hidden p-2 text-gray-800"
      on:click={toggleNav}
      aria-expanded={isNavOpen}
      aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>

    <!-- Backdrop -->
    {#if isNavOpen}
      <div
        class="fixed inset-0 bg-black bg-opacity-50 z-40"
        on:click={toggleNav}
      ></div>
    {/if}

    <!-- Navigation Links -->
    <nav
      bind:this={navRef}
      class={`md:flex md:items-center md:space-x-6 ${
        isNavOpen ? 'fixed inset-0 bg-white z-50 flex flex-col items-start justify-start pt-16 pl-4 nav-enter-active' : 'hidden nav-exit-active'
      }`}
      role="navigation"
    >
      {#if isNavOpen}
        <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
          <a href="/" class="text-xl font-bold text-gray-800">Logistip</a>
          <button class="p-2 text-gray-800" on:click={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      {/if}

      <!-- Links -->
      <a href="/" class="block py-2 px-4 text-gray-800 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-600">Home</a>
      <a href="/about" class="block py-2 px-4 text-gray-800 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-600">About Us</a>
      <a href="/services" class="block py-2 px-4 text-gray-800 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-600">Services</a>
      <a href="/contact" class="block py-2 px-4 text-gray-800 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-600">Contact</a>
      <a href="/tracking" class="block py-2 px-4 text-gray-800 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-600">Tracking</a>
    </nav>
  </div>
</header>
