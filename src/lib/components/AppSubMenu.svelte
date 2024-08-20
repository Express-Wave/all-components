<script lang="ts">
  import '../../app.css';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  // Define year and quarter variables
  let year = '2023'; 
  let quarter = 'q4'; 

  // Define the menu items for urban and rural paths
  const menus: Record<string, string[]> = {
    urban: [
      'overview',
      'weekday',
      'saturday',
      'sunday',
      'finance',
      'reconciliation',
      'disabled'
    ],
    rural: [
      'overview',
      'weekday',
      'saturday',
      'weekly totals',
      'dashboard',
      'finance',
      'annual statistics',
      'completion'
    ]
  };

  // Reactive store to get the current pathname
  $: pathname = $page.url.pathname;

  let currentMenu: string[] = [];
  let isUrbanPath = false;
  let isRuralPath = false;

  // Reactive statement to update the menu whenever pathname changes
  $: {
    updateMenu();
  }

  function updateMenu() {
    isUrbanPath = $page.url.pathname.includes('urban');
    isRuralPath = $page.url.pathname.includes('rural');
    currentMenu = [];

    if (isUrbanPath) currentMenu = menus.urban;
    if (isRuralPath) currentMenu = menus.rural;
  }

  // Function to determine if the current pathname matches or contains the item
  function isActive(item: string): boolean {
    return pathname.includes(item);
  }

  // Condition to show the menu only when the path includes 'q'
  $: shouldShowMenu = (currentMenu.length > 0) && (pathname.includes('q') || pathname.includes('Q'));
</script>

{#if shouldShowMenu}
  <div class="pl-3 text-sm font-medium text-center text-gray-700 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 backdrop-blur-md">
    <ul class="flex flex-wrap -mb-px">
      {#each currentMenu as item}
        <li class="me-2">
          <a
            href={`/forms/${isUrbanPath ? 'urban' : 'rural'}/${year}/${quarter}/${item}`}
            class={`capitalize inline-block p-4 border-b-2 rounded-t-lg
              ${isActive(item) ? 'text-[var(--clr-theme-color)] border-[var(--clr-theme-color)] dark:text-[var(--clr-theme-color)] dark:border-[var(--clr-theme-color)]' : 'text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}
              ${item === 'disabled' ? 'text-gray-400 cursor-not-allowed dark:text-gray-500' : ''}
            `}
            aria-current={isActive(item) ? 'page' : undefined}
          >
            {item}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/if}
