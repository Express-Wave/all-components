<script lang="ts">
    import '../../app.css';
    import { page } from '$app/stores';
  
    let pathname = $page.url.pathname;
  
    // Define year and quarter variables
    let year = '2023'; // Example year, replace with actual dynamic value
    let quarter = 'q4'; // Example quarter, replace with actual dynamic value
  
    // Split pathname and insert breadcrumb between each part
    const parts = pathname.split('/').filter((part) => part); // Filter out empty strings if pathname starts with a '/'
  
    let urbanMenu: string[] = [
      'overview',
      'weekday',
      'saturday',
      'sunday',
      'finance',
      'reconciliation',
      'disabled'
    ];
  
    // Function to determine if the current pathname matches or contains the item
    function isActive(item: string): boolean {
      return pathname.includes(item);
    }
  
    // Check if pathname includes 'urban'
    const isUrbanPath = pathname.includes('urban');
  </script>
  
  {#if isUrbanPath}
    <div class="pl-3 text-sm font-medium text-center text-gray-700 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 backdrop-blur-md ">
      <ul class="flex flex-wrap -mb-px">
        {#each urbanMenu as item}
          <li class="me-2">
            <a
              href={`/forms/urban/${year}/${quarter}/${item}`}
              class={`inline-block p-4 border-b-2 rounded-t-lg
                ${isActive(item) ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500' : 'text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}
                ${item === 'disabled' ? 'text-gray-400 cursor-not-allowed dark:text-gray-500' : ''}
              `}
              aria-current={isActive(item) ? 'page' : undefined}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
  