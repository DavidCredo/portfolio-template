<script lang="ts">
  import GlassCard from "../GlassCard.svelte";

  export let src: string;
  export let alt: string;
  export let classes: string;
</script>

<GlassCard {classes}>
  {#if !src.endsWith('.png')}
    <img {src} {alt} class="rounded-md shadow-xl" />
  {:else}
    <img {src} {alt} class="rounded-md" />
  {/if}  <p class="text-center text-gray-100 text-opacity-80 pt-6 italic">{alt}</p>
</GlassCard>
