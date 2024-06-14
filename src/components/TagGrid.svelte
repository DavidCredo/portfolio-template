<script>
  import Pill from "./Pill.svelte";
  import { availableTags } from "../../constants";
</script>

<div class="flex flex-wrap gap-2">
  {#each availableTags as tag}
    <Pill color={tag.color} description={tag.name} />
  {/each}
</div>
