<script lang="ts">
  import { availableTags } from "../../../constants";
  import { selectedTagsStore } from "../../stores/selectedTagsStore";
  import { createListbox } from "svelte-headlessui";
  import Pill from "../Pill.svelte";
  import { fade } from "svelte/transition";
  import CloseIcon from "../Icons/CloseIcon.svelte";

  export let classes = "";

  const listBox = createListbox({
    label: "Nach Tags filtern",
    multi: true,
    selected: $selectedTagsStore,
  });

  function handleSelect(event: CustomEvent<{ selected: string[] }>) {
    const selectedTags = event.detail.selected;
    selectedTagsStore.set(selectedTags);
  }
</script>

<div class="flex flex-wrap gap-2 me-8">
  {#each $listBox.selected as tag (tag)}
    {@const tagData = availableTags.find((t) => t.name === tag)}
    <div transition:fade use:listBox.deselect={tag} class="cursor-pointer">
      {#if tagData}
        <Pill color={tagData.color} description={tagData.name}>
          <div slot="postfixIcon">
            <CloseIcon color={tagData.color} />
          </div>
        </Pill>
      {/if}
    </div>
  {/each}
</div>
<div class=" relative inline-flex max-h-10 {classes}">
  <button
    use:listBox.button
    class="inline-flex justify-center w-full px-6 py-2 text-sm font-medium text-gray-200 bg-white/10 border border-transparent rounded-md shadow-sm hover:bg-white/20 focus:outline-none backdrop-filter backdrop-blur-md"
    on:select={handleSelect}
  >
    <span class="text-nowrap text-gray-200">Nach Tags filtern</span>
  </button>
  {#if $listBox.expanded}
  <!-- TODO: blend scrollbar more into the applied colorscheme -->
    <ul
      use:listBox.items
      class="absolute right-0 max-w-60 z-10 mt-12 w-full bg-slate-900/50 border border-white/20 backdrop-filter backdrop-blur-md rounded-md shadow-lg ring-1 ring-black ring-opacity-5 list-none focus:outline-none max-h-56 overflow-y-auto overflow-x-hidden "
    >
      {#each availableTags as tag, id}
        {@const active = $listBox.selected.includes(tag.name)}
        <li
          use:listBox.item={{ value: tag.name }}
          class="block w-full text-gray-200 text-center cursor-pointer select-none relative py-2 px-4 hover:bg-white/20 my-0 {active
            ? 'font-bold'
            : ''}"
        >
          <span class="block">{tag.name}</span>
        </li>
      {/each}
    </ul>
  {/if}
</div>
