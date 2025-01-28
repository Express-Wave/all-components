<script>
  let isNavOpen = false;

  function toggleNav() {
    isNavOpen = !isNavOpen;
  }
</script>

<header class="bg-white shadow-md">
  <div class="container mx-auto px-4 py-4 flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="text-xl font-bold text-gray-800">Logistip</a>

    <!-- Navigation Button for Mobile -->
    <button class="md:hidden p-2 text-gray-800" on:click={toggleNav}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>

    <!-- Navigation Links -->
    <nav class={`${isNavOpen ? 'fixed inset-0 bg-white z-50 flex flex-col items-start justify-start pt-16 pl-4' : 'hidden'} md:flex md:items-center md:space-x-6`}>
      <!-- Cancel Button for Mobile -->
      {#if isNavOpen}
        <button class="absolute top-4 right-4 p-2 text-gray-800" on:click={toggleNav}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      {/if}

      <a href="/" class="block py-2 px-4 text-gray-800 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-600">Home</a>
      <a href="/about" class="block py-2 px-4 text-gray-800 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-600">About Us</a>
      <a href="/services" class="block py-2 px-4 text-gray-800 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-600">Services</a>
      <a href="/contact" class="block py-2 px-4 text-gray-800 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-600">Contact</a>
      <a href="/tracking" class="block py-2 px-4 text-gray-800 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-gray-600">Tracking</a>
    </nav>
  </div>
</header>

<style>
  /* Add any custom styles here */
</style>
