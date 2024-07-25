<script lang="ts">
  import GlassCard from "../GlassCard.svelte";
  import { createDialog, type Dialog } from "svelte-headlessui";
  import Portal from "svelte-portal";
  import { fade, scale, slide } from "svelte/transition";
  import ProjectImageModal from "./ProjectImageModal.svelte";

  export let src: string;
  export let alt: string;
  export let classes: string;
  export let images: { src: string; alt: string }[] | [] = [];
  export let index: number;

  const dialog = createDialog({ label: "Bild vergrößern" }) as any;
</script>

<GlassCard {classes}>
  <button on:click={dialog.open}>
    {#if !src.endsWith(".png")}
      <img {src} {alt} class="rounded-md shadow-xl" />
    {:else}
      <img {src} {alt} class="rounded-md" />
    {/if}
    <p class="text-center text-gray-100 text-opacity-80 pt-6 italic">{alt}</p>
  </button>

  <ProjectImageModal {images} startIndex={index} {dialog} />
</GlassCard>
