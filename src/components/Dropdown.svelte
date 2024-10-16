<script lang="ts">
    import { createListbox } from "svelte-headlessui";

    export let classes: string;
    export let items: ReturnType<typeof createListbox>;
    export let options: string[];
    export let placeholder: string;
    export let clickEvent= () => {};
    export let selectEvent: (event: CustomEvent<{ selected: string[] }>) => void;
</script>

<div class=" relative inline-flex max-h-10">
    <button
      use:items.button
      class="inline-flex justify-center w-full text-gray-100 bg-white/10 border border-transparent rounded-md shadow-sm hover:bg-white/20 focus:outline-none backdrop-filter backdrop-blur-md {classes}"
      on:click={clickEvent}
      on:select={selectEvent}
    >
      <span class="text-nowrap text-gray-100">{placeholder}</span>
    </button>
    {#if $items.expanded && options.length > 0}
      <!-- TODO: blend scrollbar more into the applied colorscheme -->
      <ul
        use:items.items
        class="absolute right-0 max-w-60 z-10 mt-12 w-full bg-slate-900/50 border border-white/20 backdrop-filter backdrop-blur-md rounded-md shadow-lg ring-1 ring-black ring-opacity-5 list-none focus:outline-none max-h-56 overflow-y-auto overflow-x-hidden"
      >
        {#each options as option}
          {@const active = $items.selected.includes(option)}
          <li
            use:items.item={{ value: option }}
            class="block w-full text-gray-100 text-left cursor-pointer select-none relative hover:bg-white/20 my-0 pr-0 {classes} {active
              ? 'underline'
              : ''}"
          >
            <span class="block">{option}</span>
          </li>
        {/each}
      </ul>
    {/if}
  </div>