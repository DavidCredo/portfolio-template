<script lang="ts">
  export let label: string;
  export let href: string;
  export let target: string;
</script>

<a {href} {target} class="bg-white/20 p-4 w-full justify-center rounded-xl inline-flex shadow-lg backdrop-filter backdrop-blur-md hover:bg-white/40 transition-all duration-300 ease-in-out hover:scale-105 hover:z-50 hover:shadow-2xl active:scale-90 active:shadow-xl lg:w-fit">
  <span class="mr-2"><slot /></span>
  {#if label}
    <span class="font-semibold text-zinc-100">{label}</span>
  {/if}
</a>
