<script lang="ts">
  import { availableTags, Language } from "../../../constants";
  import { selectedTagsStore } from "../../stores/selectedTagsStore";
  import { createListbox } from "svelte-headlessui";
  import Pill from "../Pill.svelte";
  import { fade } from "svelte/transition";
  import CloseIcon from "../Icons/CloseIcon.svelte";
  import { useTranslations } from "../../i18n/utils";
  import Dropdown from "../Dropdown.svelte";
  export let classes = "";
  export let language: Language;

  const fromDict = useTranslations(language);

  const listBox = createListbox({
    label: fromDict("projects.filter"),
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

<Dropdown classes={classes} items={listBox} options={availableTags} selectEvent={handleSelect} language={language}/>
