<script lang="ts">
  import GlassCard from "./GlassCard.svelte";

  export let src: string;
  export let alt: string;
  export let classes: string;
</script>

<GlassCard classes={classes}>
<img {src} {alt} class="rounded-md shadow-xl" />
<p class="text-center text-white text-opacity-80 pt-6 italic">{alt}</p>
</GlassCard>