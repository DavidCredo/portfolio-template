<script lang="ts">
  import Pill from "./Pill.svelte";
  import { getAvailableTags } from "../helpers.ts";

  export let language: Language;

  const availableTags = getAvailableTags(language);
</script>

<div class="flex flex-wrap gap-2">
  {#each availableTags as tag}
    <Pill color={tag.color} description={tag.name} />
  {/each}
</div>
